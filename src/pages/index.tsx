import styles from "@/styles/Home.module.css";
import { Text } from "@mantine/core";
import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
      </main>
    </>
  );
}
