import React, { Dispatch, SetStateAction }  from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Delete, Edit, Ellipsis } from 'lucide-react'
import { Topic, useDeleteTopicMutationMutation} from "@/generated";


  
interface TopicDropDownMenuProps {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  data: Topic;
  setAdjustTopicData: Dispatch<SetStateAction<Topic | undefined>>;
  refreshTopicsData: ()=> void;
}


export const TopicDropDownMenu = ({value, setValue , data, setAdjustTopicData, refreshTopicsData}: TopicDropDownMenuProps) => {
  const [deleteTopicMutation] = useDeleteTopicMutationMutation()

  const deleteTopic= async ()=>{
    await deleteTopicMutation({variables:{topicId: data?._id}})
    await refreshTopicsData()
  }

  const openAdjustModal=()=>{
    setValue(true);
    setAdjustTopicData(data)
  }

  return (
    <DropdownMenu>
    <DropdownMenuTrigger data-testid='menu-icon' className='cursor-pointer' data-cy='ClassHomePage-TopicTable-DropDownMenu-Menu-Button'> <Ellipsis/></DropdownMenuTrigger>
    <DropdownMenuContent align='end' data-cy='ClassHomePage-TopicTable-DropDownMenu-Menu-Content'>
        <DropdownMenuItem className='flex justify-start gap-3' onClick={()=>openAdjustModal()} data-cy='ClassHomePage-TopicTable-DropDownMenu-Edit-Button'>
            <Edit className='w-4 h-4' data-testid='edit-icon'/>
            <p>Засах</p>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex justify-start gap-3' onClick={()=>deleteTopic()}>
            <Delete className='w-4 h-4' data-testid='delete-icon'/>
            <p>Устгах</p>
        </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

