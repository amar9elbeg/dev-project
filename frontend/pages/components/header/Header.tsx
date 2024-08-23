import React from 'react'
import CompanyLogo from './CompanyLogo'
import UserAccount from './UserAccount'
import LogOutButton from './LogOutButton'
import { Separator } from "@/components/ui/separator"


const Header = () => {
  return (
    <div className='w-full h-16 flex justify-between items-center py-5 px-10 bg-white'>
        <div className='flex justify-start gap-2'>
            <CompanyLogo/>
        </div>

        <div className='flex justify-end gap-2 items-center h-full '>
            <UserAccount avatarPicUrl="" userName="Dulguun Batbaatar" />
            <Separator orientation="vertical" className='h-8'/>
            <LogOutButton/>
        </div>
      
    </div>
  )
}

export default Header 
