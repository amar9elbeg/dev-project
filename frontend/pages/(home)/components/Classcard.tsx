import React, { Dispatch, SetStateAction } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ClassCardMenu } from './ClassCardMenu';
import { Class} from "@/generated";
import Link from 'next/link';


interface ClassCardProps {
    classData: Class;
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
    setAdjustData: Dispatch<SetStateAction<Class | undefined>>;
    refreshClassesData: ()=> void;


}

export const Classcard = (props: ClassCardProps) => {
    const { classData, value, setValue, setAdjustData, refreshClassesData } = props

    const endDateCus = classData.endDate.split("T")[0];

    const endDateFormatted = endDateCus.toString()
        .split("-")
        .map((part: String) => part.slice(-2))
        .join(".");

    const startDateCus = classData.startDate.split("T")[0];

    const startDateFormatted = startDateCus
        .split("-")
        .map((part: String) => part.slice(-2))
        .join(".");


    return (
        <Link href={`/classhome/${classData?._id}`}>
        <div className='cursor-auto'>
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle className='w-full uppercase flex justify-between'>
                        <p>{classData.name}</p>
                        <ClassCardMenu value={value} setValue={setValue} classData={classData} setAdjustData={setAdjustData} refreshClassesData={refreshClassesData}/>
                    </CardTitle>
                    <CardDescription>{`${startDateFormatted} - ${endDateFormatted} `}</CardDescription>
                </CardHeader>
                <CardContent className='flex gap-4'>
                    <p className='capitalize bg-gray-200 p-2 text-sm rounded-sm'>{classData.teachers?.[0] ?? 'Unknown'}</p>
                    <p className='capitalize bg-gray-200 p-2 text-sm rounded-sm'>{classData.teachers?.[1] ?? 'Unknown'}</p>
                </CardContent>
            </Card>
        </div>
        </Link>
    )
}

