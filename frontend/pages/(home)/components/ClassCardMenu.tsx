import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Delete, Edit, Ellipsis, MenuIcon } from 'lucide-react'
  

export const ClassCardMenu = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger data-testid='menu-icon'> <Ellipsis/></DropdownMenuTrigger>
    <DropdownMenuContent align='end'>
        <DropdownMenuItem className='flex justify-start gap-3'>
            <Edit className='w-4 h-4' data-testid='edit-icon'/>
            <p>Засах</p>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex justify-start gap-3'>
            <Delete className='w-4 h-4' data-testid='delete-icon'/>
            <p>Устгах</p>
        </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

