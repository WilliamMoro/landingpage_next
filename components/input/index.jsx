import StyleInput from "./input.module.scss";

const Input = ({type, placeholder, regex, required}) => {
    return (
    <input 
        type={type}
        placeholder={placeholder} 
        pattern={regex}
        required={required}
        className={StyleInput.input}
    />
    );
};

export default Input;