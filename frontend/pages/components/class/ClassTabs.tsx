import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from '@/components/ui/separator'


const ClassTabs = () => {
  return (
    <div className='w-full flex items-center'>
        <Tabs defaultValue="account" className="w-[400px] ">
            <TabsList className='bg-customGray border border-gray-150'>
                <TabsTrigger className='w-32' value="all">Бүгд</TabsTrigger>
                <Separator orientation='vertical' className='h-full'/>

                <TabsTrigger className='w-32' value="coding">Coding</TabsTrigger>
                <Separator orientation='vertical' className='h-full'/>
                <TabsTrigger className='w-32' value="design">Design</TabsTrigger>
            </TabsList>
        </Tabs>
      
    </div>
  )
}

export default ClassTabs
