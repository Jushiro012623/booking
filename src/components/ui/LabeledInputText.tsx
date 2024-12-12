import React from 'react'
import { variants } from './InputText';
import clsx from 'clsx';
import Typography from './Typography';
import requiredImg from '../../assets/icon-required.svg'
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
    isRequired?: boolean;
    [key: string]: any;
}
const LabeledInputText: React.FC<LabeledInputText> = ({
    variant = "default",
    name,
    label,
    message,
    className,
    parentClass,
    isRequired= false,
    onChange = () => {},
    value,
    placeholder = label,
    ...props
  }) => {
    
    const variantClass = variants[variant] || variants.default;
    return (
      <div className={`w-full relative ${parentClass}`}>
        <Typography
          htmlFor={name}
          variant="label"
          color={variant}
          className={`block top-0 left-1 absolute -translate-y-full`}>
          {label}
        </Typography>
        
        <div className='h-full w-full relative rounded-md'>
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
            {isRequired && <img src={requiredImg} alt="" className='absolute top-[1px] left-[1px] block z-[10]' style={{borderTopLeftRadius: '5px'}}/>}
        </div>
        <Typography variant="info" color={variant} className={`absolute`}>
          {message}
        </Typography>
      </div>
    );
  }
export default LabeledInputText
