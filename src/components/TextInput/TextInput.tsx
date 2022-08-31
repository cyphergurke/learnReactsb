import { useState } from "react";
import PropTypes from "prop-types";


interface TextInputProps {
    label: string;
    name: string;
    placeholder: string;
    type: string;
}

export const TextInput = ({ name, type, label, placeholder }: TextInputProps) => {
    const [value, setValue] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        console.log(value)
    };


    return (
        <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={name}>{label}</label>
            <input
                className='shadow appearance-none border rounded w-full py-2 
            px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                onChange={(e) => handleChange(e)} type={type} name={name} value={value} placeholder={placeholder} />
        </div>
    )
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string
}

