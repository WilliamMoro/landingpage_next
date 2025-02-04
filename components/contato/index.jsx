import Button from "../button";
import Input from "../input";
import Select from "../select";
import StyleContato from "./contato.module.scss";

const Contato = ()  => {
    return( 
    <div className={StyleContato.container}>
        <div className={StyleContato.texts}>
            <span>Entre em Contato</span>
            <h1>Aumente seu resultado de venda e performance</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
        </div>
        <div className={StyleContato.form}>
            <h1>Fale com um Especialista!</h1>

            <form action="">
                <Input type="text" placeholder="Nome Completo" required />
                <Input type="email" placeholder="E-mail Mais Usado" required />
                <Input 
                    type="text" 
                    placeholder="Celular/WhatsApp" 
                    pattern="^\(\d{2}\) \d{5}-\d{4}$"
                    required />
                <Input type="text" placeholder="Site" required />
                <Select 
                    placeholder="Orçamento Para Mídia" 
                    options={[
                        {label: "Instagram", value: "instagram"},
                        {label: "Facebook", value: "facebook"},
                        {label: "WhatsApp Businness", value: "whatsapp"},
                        {label: "Google ADS", value: "googleAds"}
                    ]} 
                    required 
                />

                <Button title="Enviar" kind="full"></Button>
            </form>
        </div>
    </div>
    );
};

export default Contato;