import React, { Dispatch, SetStateAction } from 'react'
import { Button as ShadcnButton } from "@/components/ui/button"

interface ButtonProps {
  text: string;
  buttonVariant?: ButtonVariant;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
  dataCy?: string
}

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

export const Button = ({ text, buttonVariant = "default", value, setValue, disabled, dataCy }: ButtonProps) => {
  return (
    <ShadcnButton
      variant={buttonVariant}
      type="submit"
      className="text-lg gap-2 capitalize"
      disabled={disabled}
      data-cy={dataCy}
      onClick={() => {
        if (disabled === false || disabled === undefined) {
          setValue(!value);
        }
      }}
    >
      {text}
    </ShadcnButton>
  )
}

