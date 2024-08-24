import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ClassCardMenu } from './ClassCardMenu';



interface ClassCardProps {
    className: string;
    startDate: string;
    endDate: string;
    teacherName1: string;
    teacherName2: string;
}

export const Classcard = (props: ClassCardProps) => {
    const { } = props
    return (
        <div>
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle className='w-full uppercase flex justify-between'>
                        <p>{className}</p>
                        <ClassCardMenu />
                    </CardTitle>
                    <CardDescription>{`${startDate} - ${endDate} `}</CardDescription>
                </CardHeader>
                <CardContent className='flex gap-4'>
                    <p className='capitalize bg-gray-200 p-2 text-sm rounded-sm'>{teacherName1}</p>
                    <p className='capitalize bg-gray-200 p-2 text-sm rounded-sm'>{teacherName2}</p>
                </CardContent>
            </Card>


        </div>
    )
}

