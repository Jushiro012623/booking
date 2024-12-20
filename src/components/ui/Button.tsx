import clsx from 'clsx';
import React, { useRef } from 'react';

const variants = {
  primary: 'text-white border-slate-800 bg-slate-800 hover:bg-slate-900',
  secondary: 'bg-gray-300 text-black border-gray-300 hover:bg-gray-400',
  danger: 'bg-red-500 text-white border-transparent hover:bg-red-600',
  light: 'bg-white border text-slate-900 hover:bg-gray-100',
  dark: 'bg-slate-700 text-white border-transparent hover:bg-slate-800',
  border: 'bg-border border text-slate-900 hover:bg-gray-200 hover:text-slate-900',
  success: 'bg-border bg-teal-500 border-teal-500 text-white hover:bg-teal-600',
  plain: ''
};

const sizes = {
  small: 'py-[10px] px-3 text-xs',
  small2: 'py-3 px-4 text-xs',
  medium: 'py-3 px-4 text-sm',
  large: 'py-4 px-5 text-lg',
  custom: ''
};
interface ButtonProps{
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    children: React.ReactNode;
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    type?: 'button' |'submit' |'reset'; 
    [key: string]: any; 
}
const Button: React.FC<ButtonProps> = ({type = 'button', onClick, className, children, variant = 'primary', size = 'small', ...props }) => {
  const buttonRef = useRef(null);
  return (
    <button
      ref={buttonRef}
      className={clsx(
        'relative overflow-hidden border outline-none rounded-md focus:outline-none btn min-w-20',
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
}
export default Button
