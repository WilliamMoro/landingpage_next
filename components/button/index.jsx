import StyleButton from "./button.module.scss";

const Button = ({ title, kind }) => {
    const generationClassByKind = () => {
        if(kind === "secundary") 
            return StyleButton.secundary

        return StyleButton.primary;
    }

    return ( 
        <button className={`${StyleButton.button} ${generationClassByKind()}`}>
            {title}
        </button>
    );
};

export default Button;