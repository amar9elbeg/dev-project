import React, { useState } from 'react'
import { HeaderEachClass } from "../(common)/components/HeaderEachClass";
import { Class, useGetClassByIdQueryQuery, useGetStudentsByClassIdQueryQuery , Student} from "@/generated";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClassItemTabs } from './features/ClassItemTabs';
import { Button } from '../(common)/components/Button';
import { AddStudentModal } from './features/AddStudentModal';

export const ClassHomePage = ({ classId }: { classId: string | string[] | undefined }) => {

    const { data: classDataResponse, loading: classLoading, error: classError } = useGetClassByIdQueryQuery({ variables: { classId: classId } })
    const classData: Class = classDataResponse?.getClassByIdQuery;

    const [selectedTab, setSelectedTab] = useState('student')
    const [openAddStudentModal, setOpenAddStudentModal] = useState(false)

    const { data: studentsDataResponse, loading: studentsLoading, error: studentsError, refetch: refetchStudents } = useGetStudentsByClassIdQueryQuery({
        variables: { classId: classId }
    });
    const studentsDataByClassId: [Student] = studentsDataResponse?.getStudentsByClassId

    return (
        <div className="min-h-screen w-full flex justify-center items-start bg-customGray">
            <div className="w-full">
                <HeaderEachClass name={classData?.name} />
                <div className="w-full flex-col justify-center py-10 px-20">
                    <ClassItemTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    <Button text='Сурагч +' value={openAddStudentModal} setValue={setOpenAddStudentModal} />
                </div>
            </div>
            <AddStudentModal value={openAddStudentModal} setValue={setOpenAddStudentModal} refreshStudentsData={ refetchStudents} />
            {/* modals */}
            <ToastContainer />

        </div>
    )
}