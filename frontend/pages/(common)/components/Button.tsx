import React, { Dispatch, SetStateAction } from 'react'
import { Button as ShadcnButton } from "@/components/ui/button"

interface ButtonProps {
  text: string;
  buttonVariant?: ButtonVariant;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
}

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

export const Button = ({ text, buttonVariant = "default", value, setValue, disabled }: ButtonProps) => {
  return (
    <ShadcnButton 
      variant={buttonVariant} 
      type="submit" 
      className="text-lg gap-2" 
      disabled={disabled}
      onClick={() => {
        if (disabled === false || disabled === undefined) {
          setValue(!value);        }
      }}
    > 
      {text}
    </ShadcnButton>
  )
}

