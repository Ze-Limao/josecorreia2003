import { Rubik, Rubik_Mono_One, Rubik_Scribble } from "next/font/google";

export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const rubikMono = Rubik_Mono_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-rubik-mono",
});

export const rubikScribble = Rubik_Scribble({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-rubik-scribble",
});
