import React, { useState } from 'react'
import { HeaderEachClass } from "../(common)/components/HeaderEachClass";
import { Class, useGetClassByIdQueryQuery, useGetStudentsByClassIdQueryQuery, Student } from "@/generated";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClassItemTabs } from './features/ClassItemTabs';
import { Button } from '../(common)/components/Button';
import { AddStudentModal } from './features/AddStudentModal';
import { SubHeader } from './components/SubHeader';
import { StudentTable } from './features/StudentTable';

export const ClassHomePage = ({ classId }: { classId: string | string[] | undefined }) => {

    const { data: classDataResponse, loading: classLoading, error: classError } = useGetClassByIdQueryQuery({ variables: { classId: classId } })
    const classData: Class = classDataResponse?.getClassByIdQuery;

    const [selectedTab, setSelectedTab] = useState('student')
    const headerMap: { [key: string]: string } = {
        student: 'сурагч',
        topic: 'сэдэв',
        report: 'репорт',
    };
    const monHeader = headerMap[selectedTab] || 'сурагч';
    const [openAddStudentModal, setOpenAddStudentModal] = useState(false)
    const [openAddTopicModal, setOpenAddTopicModal] = useState(false)
    const [openAddReportModal, setOpenAddReportModal] = useState(false)


    const { data: studentsDataResponse, loading: studentsLoading, error: studentsError, refetch: refetchStudents } = useGetStudentsByClassIdQueryQuery({
        variables: { classId: classId }
    });
    const studentsDataByClassId: [Student] = studentsDataResponse?.getStudentsByClassId

    return (
        <div className="min-h-screen w-full flex justify-center items-start bg-customGray">
            <div className="w-full">
                <HeaderEachClass name={classData?.name} />
                <div className="w-full flex-col justify-center py-10 px-20">
                    <SubHeader header={selectedTab} numberEachSection={24} />
                    <ClassItemTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    <Button text={`${monHeader} +`} value={openAddStudentModal} setValue={setOpenAddStudentModal} />
                    <StudentTable/>
                </div>
            </div>
            <AddStudentModal value={openAddStudentModal} setValue={setOpenAddStudentModal} refreshStudentsData={refetchStudents} />
            <ToastContainer />

        </div>
    )
}