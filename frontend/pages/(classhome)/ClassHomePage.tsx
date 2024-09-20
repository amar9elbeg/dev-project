import React, { useState } from 'react'
import { HeaderEachClass } from "../(common)/components/HeaderEachClass";
import { Class, useGetClassByIdQueryQuery, useGetStudentsByClassIdQueryQuery, Student, Topic, useGetTopicByClassIdQueryQuery } from "@/generated";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClassItemTabs } from './features/ClassItemTabs';
import { SubHeader } from './components/SubHeader';
import { HeaderMap } from './features/utils/Utils';
import { StudentSection } from './features/student/StudentSection';
import { TopicSection } from './features/topic/TopicSection';
import { ReportSection } from './features/report/ReportSection';

export const ClassHomePage = ({ classId }: { classId: string | string[] | undefined }) => {
    const classCode = classId

    // class data
    const { data: classDataResponse, loading: classLoading, error: classError } = useGetClassByIdQueryQuery({ variables: { classId: classCode } })
    const classData: Class = classDataResponse?.getClassByIdQuery;

    // student data
    const { data: studentsDataResponse, loading: studentsLoading, error: studentsError, refetch: refetchStudentsData } = useGetStudentsByClassIdQueryQuery({
        variables: { classId: classCode }
    });
    const studentsDataByClassId: Student[] = studentsDataResponse?.getStudentsByClassIdQuery

    //topic data
    const { data: topicsDataResponse, loading: topicsLoading, error: topicsError, refetch: refetchTopicsData } = useGetTopicByClassIdQueryQuery({
        variables: { classId: classCode }
    });
    console.log("/topic raw", topicsDataResponse);

    const topicsDataByClassId: Topic[] = topicsDataResponse?.getTopicByClassIdQuery
    console.log("/topic ", topicsDataByClassId)

    //report data


    const [selectedTab, setSelectedTab] = useState('student')
    const monHeader = HeaderMap[selectedTab] || 'сурагч';

    const numberOfItemForEachSection = () => {
        if (selectedTab == 'student') {
            return studentsDataByClassId?.length
        }
        if (selectedTab == 'topic') {
            return topicsDataByClassId?.length
        } else {
            return 1
        }
    }
        ;

    const selectSection = () => {
        if (selectedTab == 'student') {
            return (<StudentSection selectedTab={selectedTab}
                studentsDataByClassId={studentsDataByClassId}
                refreshStudentsData={refetchStudentsData}
                studentsLoading={studentsLoading}
                studentsError={studentsError} />)
        }
        if (selectedTab == 'topic') {
            return (<TopicSection selectedTab={selectedTab}
                topicsDataByClassId={topicsDataByClassId}
                refreshTopicsData={refetchTopicsData}
                topicsLoading={topicsLoading}
                topicsError={topicsError} />)
        } else {
            return (<ReportSection selectedTab={selectedTab}
                reportsDataByClassId={studentsDataByClassId}
                refreshReportsData={refetchTopicsData}
                reportsLoading={topicsLoading}
                reportsError={topicsError} />)
        }
    }





    return (
        <div className="min-h-screen w-full flex justify-center items-start bg-customGray">
            <div className="w-full">
                <HeaderEachClass name={classData?.name} />
                <div className="w-full flex-col justify-center py-10 px-20">
                    <SubHeader header={selectedTab} numberOfItemForEachSection={numberOfItemForEachSection()} />
                    <ClassItemTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    {selectSection()}
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}