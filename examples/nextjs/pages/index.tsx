import dynamic from "next/dynamic";
import Head from "next/head";

const ClientPdf = dynamic(() => import("./Pdf"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js example</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ClientPdf />
      </main>
    </>
  );
}
