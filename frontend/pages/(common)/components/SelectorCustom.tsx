import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectGroup
} from "@/components/ui/select"
import { Topic } from '@/generated';
import { StringToBoolean } from 'class-variance-authority/types';


interface SelectorCustomProps {
    content: string[];
    defaultValue?: string;
    id?: string;
    width?: string;
    groupName?: string;
    feedbackOnValueChange: (value: string) => void;
}

export const SelectorCustom = ({ content, defaultValue, width, groupName, feedbackOnValueChange, id }: SelectorCustomProps) => {

    return (
        <Select defaultValue={defaultValue ? defaultValue : content[0]} onValueChange={(value) => feedbackOnValueChange(value)}>
            <SelectTrigger className={`${width ? `w-${width}px` : "w-180px"}`}>
                <SelectValue placeholder={defaultValue ? defaultValue : content[0]} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{groupName}</SelectLabel>
                    {content.map((item, index) => <SelectItem key={index} value={item}>{item}</SelectItem>
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
