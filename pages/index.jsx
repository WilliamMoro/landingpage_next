import Header from "@/components/header";
import styles from "./Home.module.scss";
import Welcome from "@/components/welcome";
import Features from "@/components/features";
import Contato from "@/components/contato";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header></Header>
        <Welcome></Welcome>
        <Features></Features>
        <Contato></Contato>
        <Footer></Footer>
      </div>
    </>
  );
}
