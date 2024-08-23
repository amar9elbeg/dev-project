import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const ClassTabs = () => {
  return (
    <div className='w-full flex items-center'>
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger className='w-32' value="all">Бүгд</TabsTrigger>

                <TabsTrigger className='w-32' value="coding">Coding</TabsTrigger>

                <TabsTrigger className='w-32' value="design">Design</TabsTrigger>
            </TabsList>
        </Tabs>
      
    </div>
  )
}

export default ClassTabs
