import React, { Dispatch, SetStateAction } from 'react'
import { Button as ShadcnButton } from "@/components/ui/button"

interface ButtonProps {
  text: string;
  bgColor?: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

export const ButtonComponent = ({ text, bgColor, value, setValue }: ButtonProps) => {


  return (
    <ShadcnButton type="submit" className={`${bgColor ? bgColor : ""} text-lg gap-2`} onClick={() => setValue(!value)}> {text}</ShadcnButton>

  )
}


