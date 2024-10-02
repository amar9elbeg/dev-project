import React, { Dispatch, SetStateAction } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from '@/components/ui/separator'

interface ClassTabsProps {
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<string>>;
}

export const ClassTabs = (props: ClassTabsProps) => {
  const { selectedTab, setSelectedTab } = props
  return (
    <div className='w-full flex items-center'>

      <Tabs defaultValue="ALL" value={selectedTab} onValueChange={setSelectedTab} className="w-[400px] ">
        <TabsList className='bg-customGray border border-gray-150'>
          <TabsTrigger className='w-32' value="ALL" data-cy='Class-Tabs-All-Classes'>Бүгд</TabsTrigger>
          <Separator orientation='vertical' className='h-full' />

          <TabsTrigger className='w-32' value="CODING" data-cy='Class-Tabs-Coding-Classes'>Coding</TabsTrigger>
          <Separator orientation='vertical' className='h-full' />
          <TabsTrigger className='w-32' value="DESIGN" data-cy='Class-Tabs-Design-Classes'>Design</TabsTrigger>
        </TabsList>
      </Tabs>

    </div>
  )
}
