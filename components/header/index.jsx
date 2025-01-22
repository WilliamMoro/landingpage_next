import Image from "next/image";
import Logo from "/public/assets/image/Connection.png";
import Link from "next/link";
import StyleHeader from "./header.module.scss";

const Header = () => {
    return (
        <div className={StyleHeader.container}>
            <div className={StyleHeader.logo_container}>
                <Image className={StyleHeader.logo} src={Logo}></Image>
            </div>
            <div className={StyleHeader.menu}>
                <Link href="/">Home</Link>
                <Link href="/">O que fazemos</Link>
                <Link href="/">Cases</Link>
            </div>
            <div className={StyleHeader.action}>
                <button className={StyleHeader.button}>Fale Conosco</button>
            </div>
        </div>
    );
};

export default Header;