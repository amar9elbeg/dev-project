import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import ClassCardMenu from './ClassCardMenu';


interface ClassCardProps {
    className: string;
    startDate: string;
    endDate: string;
    teacherName1: string;
    teacherName2: string;
}

const Classcard = ({...props}: ClassCardProps) => {
  return (
    <div>
        <Card className='w-full'>
            <CardHeader>
                <CardTitle className='w-full uppercase flex justify-between'>
                    <p>{props.className}</p>
                    <ClassCardMenu/>
                </CardTitle>
                <CardDescription>{`${props.startDate} - ${props.endDate} `}</CardDescription>
            </CardHeader>
            <CardContent className='flex gap-4'>
                <p className='capitalize bg-gray-200 p-2 text-sm rounded-sm'>{props.teacherName1}</p>
                <p className='capitalize bg-gray-200 p-2 text-sm rounded-sm'>{props.teacherName2}</p>
            </CardContent>
        </Card>

      
    </div>
  )
}

export default Classcard