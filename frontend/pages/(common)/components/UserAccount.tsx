import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

export const UserAccount = (props: { avatarPicUrl: string, userName: string}) => {
    const {avatarPicUrl, userName} =props
  return (
    <div className='flex items-center h-8 gap-2'>
        <Avatar>
            <AvatarImage src={avatarPicUrl} alt="avatar" role='img'/>
            <AvatarFallback>{userName[0]}</AvatarFallback>
        </Avatar>

        <p className='normal-case font-GIP text-sm font-medium leading-[18px] text-left'>{userName}</p>
      
    </div>
  )
}

export default UserAccount
