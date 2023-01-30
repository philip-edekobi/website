import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>luxury.dev(Philip Edekobi)</title>
        <meta
          name="description"
          content="Philip Edekobi's personal website and blog"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p
          className={inter.className}
          style={{
            fontSize: "3rem",
          }}
        >
          Philip Edekobi: work in progress
        </p>
      </main>
    </>
  );
}
