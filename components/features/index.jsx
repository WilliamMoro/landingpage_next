import StyleFeature from "./features.module.scss";
import Icon from "../../public/assets/image/icon.svg";
import Image from "next/image";

const Features = () => {
    return <div className={StyleFeature.container}>
        <h1>Na Cidade e Região, não há agência melhor. Garantimos.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className={StyleFeature.features}>
            <div className={StyleFeature.feature}>
                <Image src={Icon} className={StyleFeature.icon}></Image>
                <h1>Digita Strategy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={StyleFeature.feature}>
                <Image src={Icon} className={StyleFeature.icon}></Image>
                <h1>Digita Strategy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={StyleFeature.feature}>
                <Image src={Icon} className={StyleFeature.icon}></Image>
                <h1>Digita Strategy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={StyleFeature.feature}>
                <Image src={Icon} className={StyleFeature.icon}></Image>
                <h1>Digita Strategy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
}

export default Features;