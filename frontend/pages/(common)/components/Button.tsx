import React, { Dispatch, SetStateAction } from 'react'
import { Button as ShadcnButton } from "@/components/ui/button"

interface ButtonProps {
  text: string;
  buttonVariant?: ButtonVariant;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

export const Button = ({ text, buttonVariant = "default", value, setValue }: ButtonProps) => {
  return (
    <ShadcnButton 
      variant={buttonVariant} 
      type="submit" 
      className="text-lg gap-2" 
      onClick={() => setValue(!value)}
    > 
      {text}
    </ShadcnButton>
  )
}
