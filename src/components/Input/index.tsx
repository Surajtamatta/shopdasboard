
import { InputPropsType } from "@/interfaces/components/Input";
import { useState, useEffect } from "react";
import { Input } from "@/styles/Input";

const InputComponent = ({
  type,
  name,
  placeholder,
  register,
  variant,
  ...rest
}: InputPropsType) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setInputValue(rest.value || "");
  }, [rest.value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

 return (
  <Input
    type={type}
    {...register(name)}
    placeholder={placeholder}
    minLength={rest.minLength}
    maxLength={rest.maxLength}
    pattern={rest.pattern}
    variant={variant}
    value={inputValue}
    onChange={handleChange} 
    disabled ={rest.disabled}
  />
);
}
export default InputComponent;
