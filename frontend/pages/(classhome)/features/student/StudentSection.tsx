import React, {useState} from 'react'
import { StudentTable } from './StudentTable'
import { AddStudentModal } from './AddStudentModal'
import { Student } from '@/generated'
import { HeaderMap } from '../utils/Utils'
import { Button } from '@/pages/(common)/components/Button'
import { AdjustStudentModal } from './AdjustStudentModal'

type StudentSectionProps = {
    selectedTab: string,
    studentsDataByClassId: Student[],
    refreshStudentsData: ()=> void;
    studentsLoading: boolean;
    studentsError: any
}

export const StudentSection = ({ selectedTab, studentsDataByClassId, refreshStudentsData , studentsLoading, studentsError }: StudentSectionProps) => {
    const [openAddStudentModal, setOpenAddStudentModal] = useState(false)
    const [openAdjustStudentModal, setOpenAdjustStudentModal] = useState(false)
    const [adjustStudentData, setAdjustStudentData] = useState<Student>()
    const [search, setSearch] =useState<string>("")

    const filteredStudentData = studentsDataByClassId?.filter((student) => {
        const searchTerm = search.trim().toLowerCase();
        return (
          student.studentCode?.toLowerCase().includes(searchTerm) ||
          student.firstName?.toLowerCase().includes(searchTerm) ||
          student.lastName?.toLowerCase().includes(searchTerm) ||
          student.phoneNumber?.toLowerCase().includes(searchTerm) ||
          student.email?.toLowerCase().includes(searchTerm) 
        //   student.active?.toString().toLowerCase().includes(searchTerm)
        );
      })

    const monHeader = HeaderMap[selectedTab] || 'сурагч';
  
    return (
    <div className='flex flex-col w-full'>
        <div className='flex justify-between my-8'>
            <input type='text' className='p-2 border-gray-400 placeholder:italic rounded-sm' placeholder='Search' onChange={(e)=>setSearch(e.target.value)} />
            <Button text={`${monHeader} +`} value={openAddStudentModal} setValue={setOpenAddStudentModal} />
            </div>
        <StudentTable data={filteredStudentData} value={openAdjustStudentModal} setValue={setOpenAdjustStudentModal} refreshStudentsData={refreshStudentsData} setAdjustStudentData={setAdjustStudentData}/>
        <AddStudentModal value={openAddStudentModal} setValue={setOpenAddStudentModal} refreshStudentsData={refreshStudentsData} />
        <AdjustStudentModal value={openAdjustStudentModal} setValue={setOpenAdjustStudentModal} adjustStudentData={adjustStudentData}  refreshStudentsData={refreshStudentsData}/>
    </div>
  )
}

