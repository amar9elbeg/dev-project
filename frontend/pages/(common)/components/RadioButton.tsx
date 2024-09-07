import React from 'react';
import { useField } from 'formik';

interface MyRadioButtonInputProps {
  label: string;
  name: string;
  value: string;
  radioButtonValue: string;
}

export const RadioButton = ({ label, radioButtonValue, ...props}: MyRadioButtonInputProps) => {
  const [field] = useField({ name: props.name, value: props.value });

  return (
    <label className={`border rounded-md py-2 px-2 ${radioButtonValue === props.value ? 'bg-gray-100 border-gray-300' : 'border-gray-100'}`}>
      <input
        type="radio"
        {...field} 
        {...props}
        checked={radioButtonValue === props.value}
      />
      <span className='ml-2'>{label}</span>
    </label>
  );
};
