import React, { Dispatch, SetStateAction } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ClassItemTabsProps {
    selectedTab: string;
    setSelectedTab: Dispatch<SetStateAction<string>>;
}

export const ClassItemTabs = (props: ClassItemTabsProps) => {
    const { selectedTab, setSelectedTab } = props
    return (
        <div className='w-full flex items-center mt-10 mb-5'>
            <div className='flex'>
                <div onClick={()=>setSelectedTab('student')} className={` cursor-pointer w-28 text-center p-2 ${selectedTab=='student' ? "border-b-2 border-black" : "text-gray-500"}`}>Сурагч</div>
                <div onClick={()=>setSelectedTab('topic')} className={` cursor-pointer w-28 text-center p-2 ${selectedTab=='topic' ? "border-b-2 border-black" : "text-gray-500"}`}>Сэдэв</div>
                <div onClick={()=>setSelectedTab('report')} className={` cursor-pointer w-28 text-center p-2 ${selectedTab=='report' ? "border-b-2 border-black" : "text-gray-500"}`}>Репорт</div>
            </div>
        </div>
    )
}
