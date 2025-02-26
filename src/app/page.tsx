import Layout from "@/components/layout"
import Image from "next/image"

export default function Home() {
  return (
    <Layout>
      <main className="px-4 py-16">
        <h1>Hello world!</h1>
        <div className="m-8">
          <Image src="/logo.png" alt="Logo" width={200} height={200} />
        </div>
        <p> This is indeed one of the websites in the internet</p>
      </main>
    </Layout>
  )
}
