import React, { useState } from 'react'
import { Topic, Student, Report } from '@/generated'
import { HeaderMap } from '../utils/Utils'
import { Button } from '@/pages/(common)/components/Button'
import { Search } from 'lucide-react'
import { AddReportModal } from './AddReportModal'
import { ReportTable } from './ReportTable'


type ReportSectionProps = {
    selectedTab: string,
    studentsDataByClassId: Student[],
    topicsDataByClassId: Topic[],
    reportsDataByClassId: Report[],
    refreshReportsData: () => void;
    reportsLoading: boolean;
    reportsError: any
}

export const ReportSection = ({ selectedTab, reportsDataByClassId,topicsDataByClassId, studentsDataByClassId, refreshReportsData, reportsLoading, reportsError }: ReportSectionProps) => {
    const [openAddReportModal, setOpenAddReportModal] = useState(false)
    const [openAdjustReportModal, setOpenAdjustReportModal] = useState(false)
    const [adjustReportData, setAdjustReportData] = useState<Topic>()
    const [search, setSearch] = useState<string>("")

    const filteredReportData = reportsDataByClassId?.filter((report) => {
        const searchTerm = search.trim().toLowerCase();
        return (
            report._id?.toLowerCase().includes(searchTerm)
        );
    })

    const monHeader = HeaderMap[selectedTab] || 'сурагч';

    return (
        <div className='flex flex-col w-full'>
            <div className='flex justify-between my-8'>
                <div className='flex border-gray-300 border rounded-lg'>
                    <div className='flex justify-center items-center text-gray-500 rounded-l-lg px-2 bg-gray-200'><Search size={15} /></div>
                    <input type='text' className='p-2  placeholder:italic rounded-r-lg' placeholder={` Search report`} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <Button text={`${monHeader} +`} value={openAddReportModal} setValue={setOpenAddReportModal} />
            </div>
            <ReportTable studentData={studentsDataByClassId} />

            <AddReportModal value={openAddReportModal} setValue={setOpenAddReportModal} refreshReportsData={refreshReportsData} topicsDataByClassId={topicsDataByClassId}/>
        </div>
    )
}

