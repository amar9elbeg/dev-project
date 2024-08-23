import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import ClassCardMenuIcon from '../icons/ClassCardMenuIcon'
import EditIcon from '../icons/EditIcon'
import DeleteIcon from '../icons/DeleteIcon'
  

const ClassCardMenu = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger> <ClassCardMenuIcon/> </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuItem className='flex justify-start gap-3'>
            <EditIcon/>
            <p>Засах</p>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex justify-start gap-3'>
            <DeleteIcon/>
            <p>Устгах</p>
        </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ClassCardMenu
