import StyleFooter from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/assets/image/Connection.png";
import Instagram from "../../public/assets/image/instagram.svg";
import Facebook from "../../public/assets/image/facebook.svg";
import Linkdln from "../../public/assets/image/linkedln.svg";
import Youtube from "../../public/assets/image/youtube.svg";

const Footer = () => {
    return (
        <div className={StyleFooter.container}>
            <div className={`${StyleFooter.column}, ${StyleFooter.columnPrincipal}`}>
                <Image className={StyleFooter.logo} src={Logo} alt="Logo"></Image>
                <h1 className={StyleFooter.title}>0800 900 800</h1>
                <p>william_juanmoro@hotmail.com</p>
            </div>
            <div className={StyleFooter.column}>
                <h1>Menu</h1>
                <p>Quem Somos</p>
                <p>Cases</p>
            </div>
            <div className={StyleFooter.column}>
                <h1>Conteudo</h1>
                <p>E-Books</p>
                <p>Fórmulas Prontas</p>
            </div>
            <div className={`${StyleFooter.column} ${StyleFooter.alignRight}`}>
                <h1>Social</h1>
                <div className={StyleFooter.icons}>
                    <Link href="/">
                        <Image src={Instagram} alt="Instagram"></Image>
                    </Link>
                    <Link href="/">
                        <Image src={Facebook} alt="Facebook"></Image>
                    </Link>
                    <Link href="/">
                        <Image src={Linkdln} alt="Linkdln"></Image>
                    </Link>
                    <Link href="/">
                        <Image src={Youtube} alt="Youtube"></Image>
                    </Link>
                </div>
            </div>
            <div className={StyleFooter.allRightReserverd}>
                ©2025 William Moro - Todos os direitos reservados.
            </div>
        </div>
    );
};

export default Footer;