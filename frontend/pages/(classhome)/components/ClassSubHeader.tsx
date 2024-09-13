import React, { Dispatch, SetStateAction } from 'react'


interface ClassSubHeaderProps {
    selectedTab: string;
    setSelectedTab: Dispatch<SetStateAction<string>>;
}

export const ClassSubHeader = (props: ClassSubHeaderProps) => {
    const { selectedTab, setSelectedTab } = props
    
    return (
        <div className='flex flex-col'>
            <h1></h1>
            <p className='text-gray-400'></p>
        </div>
    )
}

