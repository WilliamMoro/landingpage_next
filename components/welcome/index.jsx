import Image from "next/image";
import Button from "../button";
import StyleWelcome from "./welcome.module.scss";
import BannerWelcome from "../../public/assets/image/slogan.svg";

const Welcome = () => {
    return (
        <div className={StyleWelcome.container}>
            <div className={StyleWelcome.text}>
                <h1>Melhor Agência de marketing da cidade!</h1>
                <p>
                    Somos uma agência de performance digital, aceleramos vendas e aquisições de leads para grander marcas.
                </p>
                <Button title="Aumentar Vendas" kind="secundary"></Button>
            </div>
            <div className={StyleWelcome.image}>
                <Image className={StyleWelcome.banner} src={BannerWelcome} alt="Banner Welcome"></Image>
            </div>
        </div>
    );
};

export default Welcome;