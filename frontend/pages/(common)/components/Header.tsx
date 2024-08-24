import React from 'react'
import CompanyLogoIcon from '@/pages/components/icons/CompanyLogoIcon'
import UserAccount from './UserAccount'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import { LogInIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'


export const Header = () => {
  return (
    <div className='w-full h-16 flex justify-between items-center py-5 px-10 bg-white'>
      <div className='flex justify-start gap-2'>
          <Link href="/">
            <CompanyLogoIcon/>
        </Link>
      </div>

      <div className='flex justify-end gap-2 items-center h-full '>
        <UserAccount avatarPicUrl="" userName="Dulguun Batbaatar" />
        <Separator orientation="vertical" className='h-8' />
        <Button variant="ghost" asChild>
        <Link href="/">
          <LogInIcon />
        </Link>
    </Button>
      </div>

    </div>
  )
}