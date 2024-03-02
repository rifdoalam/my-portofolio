import Head from "next/head";
import Navbar from "../navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{`Rifdo Alam`}</title>
        <meta name="description" content="Rifdo Alam Portofolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"></link>
      </Head>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
}
