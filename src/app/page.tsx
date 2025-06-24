import Image from "next/image";
import styles from "../styles/home.module.css";


export default function Home() {

  return (
    <>
      <Image src="/images/pokemon.jpg" width="800" height="250" alt="Logo escrita Pokémon maiuscula, em amarelo com bordas azuis" />
      <h1 className={styles.title}>Pokenext</h1>
    </>
  );
}
