import React, { useState } from 'react'
import { HeaderEachClass } from "../(common)/components/HeaderEachClass";
import { Class, useGetClassByIdQueryQuery } from "@/generated";
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClassItemTabs } from './features/ClassItemTabs';

export const ClassHomePage = ({classId}: {classId: string | string[] | undefined}) => {

    const { data, loading, error } = useGetClassByIdQueryQuery({ variables: { classId: classId } })
    const classData: Class = data?.getClassByIdQuery;
    const [selectedTab, setSelectedTab] = useState('student')

    return (
        <div className="min-h-screen w-full flex justify-center items-start bg-customGray">
            <div className="w-full">
                <HeaderEachClass name={classData?.name}/>
                <div className="w-full flex-col justify-center py-10 px-20">
                    <ClassItemTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                </div>
            </div>
            {/* modals */}
            <ToastContainer />

        </div>
    )
}