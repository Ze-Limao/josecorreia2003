"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

type MascotPlaceholderProps = {
  sectionKey: string;
};

const MODEL_HEIGHT = 2.4;
const MODEL_ROTATION_Y = THREE.MathUtils.degToRad(60);
const MODEL_OFFSET = new THREE.Vector3(0, -0.1, 0);

export function MascotPlaceholder({ sectionKey }: MascotPlaceholderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodStartRef = useRef<number | null>(null);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    nodStartRef.current = performance.now();
  }, [sectionKey]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 2.5;
    controls.maxDistance = 7;

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
    resizeObserver.observe(container);

    const ambientLight = new THREE.HemisphereLight(0xffffff, 0x303040, 0.7);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight.position.set(2, 3, 4);
    scene.add(ambientLight, directionalLight);

    const loader = new GLTFLoader();
    let goose: THREE.Object3D | null = null;
    const modelPivot = new THREE.Group();
    scene.add(modelPivot);
    let disposed = false;

    const disposeObject = (object: THREE.Object3D) => {
      object.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return;

        child.geometry.dispose();
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];
        materials.forEach((childMaterial) => childMaterial.dispose());
      });
    };

    loader.load("/goose.glb", (gltf) => {
      if (disposed) {
        disposeObject(gltf.scene);
        return;
      }

      goose = gltf.scene;
      const modelBounds = new THREE.Box3().setFromObject(goose);
      const modelCenter = modelBounds.getCenter(new THREE.Vector3());
      const modelSize = modelBounds.getSize(new THREE.Vector3());
      const modelScale = MODEL_HEIGHT / modelSize.y;

      goose.position.set(
        -modelCenter.x * modelScale,
        -modelCenter.y * modelScale,
        -modelCenter.z * modelScale
      );
      goose.scale.setScalar(modelScale);

      modelPivot.position.copy(MODEL_OFFSET);
      modelPivot.rotation.y = MODEL_ROTATION_Y;
      modelPivot.add(goose);
      controls.target.copy(MODEL_OFFSET);
      controls.update();
    });

    let animationFrame = 0;
    const animate = () => {
      const nodStart = nodStartRef.current;
      if (nodStart !== null) {
        const progress = Math.min((performance.now() - nodStart) / 650, 1);
        modelPivot.position.y =
          MODEL_OFFSET.y + Math.sin(progress * Math.PI * 4) * 0.08 * (1 - progress);

        if (progress === 1) {
          modelPivot.position.y = MODEL_OFFSET.y;
          nodStartRef.current = null;
        }
      }

      controls.update();
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      disposed = true;
      if (goose) disposeObject(goose);
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center"
      aria-hidden="true"
    />
  );
}
