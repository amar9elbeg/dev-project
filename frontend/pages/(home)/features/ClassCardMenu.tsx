import React, { Dispatch, SetStateAction }  from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Delete, Edit, Ellipsis } from 'lucide-react'
import { Class , useDeleteClassMutationMutation} from "@/generated";


  
interface ClassCardMenuProps {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  classData: Class;
  setAdjustData: Dispatch<SetStateAction<Class | undefined>>;
  refreshClassesData: ()=> void;
}


export const ClassCardMenu = (props: ClassCardMenuProps) => {
  const {value, setValue , classData, setAdjustData, refreshClassesData} = props
  const [deleteClassMutation] = useDeleteClassMutationMutation()

  const deleteClassFunction= async ()=>{
    await deleteClassMutation({variables:{classId: classData?._id}})
    await refreshClassesData()
  }

  const openAdjustModal=()=>{
    setValue(true);
    setAdjustData(classData)
  }

  return (
    <DropdownMenu>
    <DropdownMenuTrigger data-cy='HomePage-ClassCard-DropDownMenu-Menu-Button' className='cursor-pointer'> <Ellipsis/></DropdownMenuTrigger>
    <DropdownMenuContent align='end' data-cy='HomePage-ClassCard-DropDownMenu-Menu-Content'>
        <DropdownMenuItem className='flex justify-start gap-3' onClick={()=>openAdjustModal()} data-cy='HomePage-ClassCard-DropDownMenu-Edit-Button'>
            <Edit className='w-4 h-4' data-testid='edit-icon'/>
            <p>Засах</p>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex justify-start gap-3' onClick={()=>deleteClassFunction()}>
            <Delete className='w-4 h-4' data-testid='delete-icon'/>
            <p>Устгах</p>
        </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

