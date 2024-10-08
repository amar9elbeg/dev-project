import React from 'react'
import {  useField } from 'formik';


interface MyTextInputProps {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    id?: string;
    
  }

export const Input = ({ label, ...props }:MyTextInputProps) => {

    const [field, meta] = useField(props);
    return (
      <div className='w-full flex flex-col gap-1 h-28'>
        <label className=' leading-6 tracking-tight' htmlFor={props.id || props.name}>{label}</label>
        <input className=" w-full bg-gray-100 border p-3 h-12 rounded-lg  placeholder:text-slate-500 placeholder:text-sm" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error text-red-500 text-xs">{meta.error}</div>
        ) : null}
      </div>
    );
  };
