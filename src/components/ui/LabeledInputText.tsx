import React from 'react'
import { variants } from './InputText';
import clsx from 'clsx';
import Typography from './Typography';

interface LabeledInputText{
    variant?: keyof typeof variants;
    name: string;
    label: string;
    message?: string;
    className?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    parentClass?: string;
    value?: string;
    [key: string]: any;
}
const LabeledInputText: React.FC<LabeledInputText> = ({
    variant = "default",
    name,
    label,
    message,
    className,
    parentClass,
    onChange = () => {},
    value,
    placeholder = label,
    ...props
  }) => {
    
    const variantClass = variants[variant] || variants.default;
    return (
      <div className={`w-full ${parentClass}`}>
        <Typography
          htmlFor={name}
          variant="label"
          color={variant}
          className={`block pl-1`}>
          {label}
        </Typography>
        <input
          name={name}
          className={clsx(
            "rounded-md h-11 text-xs outline-none px-4 w-full",
            variantClass,
            className
          )}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...props}
        />
        <Typography variant="info" color={variant} className={`mt-1`}>
          {message}
        </Typography>
      </div>
    );
  }
export default LabeledInputText
