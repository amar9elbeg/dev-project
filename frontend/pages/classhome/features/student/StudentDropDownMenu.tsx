import React, { Dispatch, SetStateAction }  from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Delete, Edit, Ellipsis } from 'lucide-react'
import { Student, useDeleteStudentMutationMutation} from "@/generated";


  
interface StudentDropDownMenuProps {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  data: Student;
  setAdjustStudentData: Dispatch<SetStateAction<Student | undefined>>;
  refreshStudentsData: ()=> void;
}


export const StudentDropDownMenu = ({value, setValue , data, setAdjustStudentData, refreshStudentsData}: StudentDropDownMenuProps) => {
  const [deleteStudentMutation] = useDeleteStudentMutationMutation()

  const deleteStudent= async ()=>{
    await deleteStudentMutation({variables:{studentId: data?._id}})
    await refreshStudentsData()
  }

  const openAdjustModal=()=>{
    setValue(true);
    setAdjustStudentData(data)
  }

  return (
    <DropdownMenu>
    <DropdownMenuTrigger data-testid='menu-icon' className='cursor-pointer' data-cy='ClassHomePage-StudentTable-DropDownMenu-Menu-Button'> <Ellipsis/></DropdownMenuTrigger>
    <DropdownMenuContent align='end' data-cy='ClassHomePage-StudentTable-DropDownMenu-Menu-Content'>
        <DropdownMenuItem className='flex justify-start gap-3' onClick={()=>openAdjustModal()} data-cy='ClassHomePage-StudentTable-DropDownMenu-Edit-Button'>
            <Edit className='w-4 h-4' data-testid='edit-icon'/>
            <p>Засах</p>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex justify-start gap-3' onClick={()=>deleteStudent()}>
            <Delete className='w-4 h-4' data-testid='delete-icon'/>
            <p>Устгах</p>
        </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

