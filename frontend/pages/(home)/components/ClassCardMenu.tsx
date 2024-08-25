import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import ClassCardMenuIcon from '../../components/icons/ClassCardMenuIcon'
import EditIcon from '../../components/icons/EditIcon'
import DeleteIcon from '../../components/icons/DeleteIcon'
  

export const ClassCardMenu = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger> <ClassCardMenuIcon/> </DropdownMenuTrigger>
    <DropdownMenuContent align='end'>
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

