import Typography from './Typography';
import { IoIosArrowDown } from 'react-icons/io';

interface SelectOption{
    label: string;
    value: any;
    data: any;
    name: any;
    handleChange: (prevState: any) => void;
    className?: string
}
export const SelectOption = ({ label, value, data, name, handleChange, className}:SelectOption) => {
    return (
      <div className={`relative ${className}`}>
        <Typography variant="small" className="pl-1">
          {label}
        </Typography>
        <select
          name={name}
          id={name}
          className=" capitalize text-xs outline-none border w-full h-11 rounded-md px-4 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
          onChange={handleChange}
        >
          <option className="text-xs capitalize pointer-events-none">
            {value?.discount || 'Select Option'}
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
        <IoIosArrowDown className="absolute right-3 top-1/2 pointer-events-none text-gray-600" />
      </div>
    );
  };
