import React from 'react'
import { CompanyLogoIcon } from '@/pages/components/icons/CompanyLogoIcon'
import UserAccount from './UserAccount'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import { ArrowLeft, LogInIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'


export const HeaderEachClass = ({name}: {name: string}) => {
    return (
        <div className='w-full h-16 flex justify-between items-center py-5 px-10 bg-white'>
            <div className='flex justify-start gap-2 items-center'>
                <Link href="/">
                    <ArrowLeft />
                </Link>
                    <CompanyLogoIcon />
                    <span className='uppercase font-bold'>{name}</span>
            </div>

            <div className='flex justify-end gap-2 items-center h-full '>
                <UserAccount avatarPicUrl="https://picsum.photos/200" userName="Dulguun Batbaatar" />
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

