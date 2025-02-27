import Layout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <main className="px-4 py-16">
        <div className="grid grid-col grid-cols-2 gap-64 justify-center py-8 px-24">
          <div className="justify-left text-text-pretty">
            <h1 className="break-words">José Correia</h1>
            <h2 className="">Software Engineer</h2>
            <h3> gtihub </h3>
            <div className="mt-4 flex px-32 py-16 ">
                <Image src="/logo.png" alt="Logo" width={400} height={400} className="animate-spinSlow" />
            </div>
          </div>
          <div className="justify-left">
            <p> This is indeed one of the websites in the internet.This is indeed one of the websites in the internet.This is indeed one of the websites in the internet.This is indeed one of the websites in the internet.This is indeed one of the websites in the internet.This is indeed one of the websites in the internet.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
