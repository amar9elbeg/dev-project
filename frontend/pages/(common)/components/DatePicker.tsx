import React from 'react';
import { useField, useFormikContext } from 'formik';
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  name: string;
  label: string;
  id?: string
}

export const DatePicker= ({ name, ...props } : DatePickerProps) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { setValue } = helpers;
  const { setFieldTouched } = useFormikContext();

  return (
    <div className='flex w-full flex-col gap-1 h-28'>
      <label className=' leading-6 tracking-tight' htmlFor={props.id || name}>{props.label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full bg-gray-100 h-12 justify-start text-left font-normal",
              !value && "text-muted-foreground"
            )}
            onClick={()=>setFieldTouched(name,true)}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(new Date(value), "PPP") : <span>Огноо оруулна уу.</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[220px] flex justify-center p-0" align='start'>
          <Calendar
            mode="single"
            selected={value ? new Date(value) : undefined}
            onSelect={(date) => setValue(date ? date.toISOString() : '')}
          />
        </PopoverContent>
      </Popover>
      {meta.touched && meta.error ? (
          <div className="error text-red-500 text-xs">{meta.error}</div>
        ) : null}

    </div>
  );
};