import Typography from './Typography';
import { IoIosArrowDown } from 'react-icons/io';
import requiredImg from '../../assets/icon-required.svg'
interface SelectOption{
    label: string;
    text: any;
    data: any;
    name: any;
    isRequired?: boolean;
    handleChange: (prevState: any) => void;
    className?: string
}
export const SelectOption = ({ text, label, data, name, handleChange,isRequired = false , className}:SelectOption) => {
    return (
      <div className={`relative ${className}`}>
        <Typography variant="small" className="top-0 left-1 absolute -translate-y-full">
          {label}
        </Typography>
        <div className='relative rounded-md overflow-hidden'>
            <select
            name={name}
            id={name}
            className=" capitalize text-xs outline-none border w-full h-11 rounded-md px-4 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
            onChange={handleChange}
            >
            <option className="text-xs capitalize pointer-events-none">
                {text || 'Select Option'}
            </option>
            {data?.map((data : any, index : number) => (
                <option
                key={index}
                className={`text-xs`}
                value={data.id} 
                >
                {data.name}
                </option>
            ))}
            </select>
            {isRequired && <img src={requiredImg} alt="" className='absolute top-0 left-0'/>}
        </div>
        
        <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
      </div>
    );
  };
