import React, {useState} from 'react'
import { Student, Topic } from '@/generated'
import { HeaderMap } from '../utils/Utils'
import { Button } from '@/pages/(common)/components/Button'
import { AddTopicModal } from './AddTopicModal'
import { TopicTable } from './TopicTable'
import { AdjustClassModal } from '@/pages/(home)/features/AdjustClassModal'
import { AdjustTopicModal } from './AdjustTopicModal'
type TopicSectionProps = {
    selectedTab: string,
    topicsDataByClassId: Topic[],
    refreshTopicsData: ()=> void;
    topicsLoading: boolean;
    topicsError: any
}

export const TopicSection = ({ selectedTab, topicsDataByClassId, refreshTopicsData , topicsLoading, topicsError }: TopicSectionProps) => {
    const [openAddTopicModal, setOpenAddTopicModal] = useState(false)
    const [openAdjustTopicModal, setOpenAdjustTopicModal] = useState(false)
    const [adjustTopicData, setAdjustTopicData] = useState<Topic>()
    const [search, setSearch] =useState<string>("")

    const filteredTopicData = topicsDataByClassId?.filter((topic) => {
        const searchTerm = search.trim().toLowerCase();
        return (
          topic.name?.toLowerCase().includes(searchTerm) ||
          topic.description?.toLowerCase().includes(searchTerm)
        );
      })

    const monHeader = HeaderMap[selectedTab] || 'сурагч';
  
    return (
    <div className='flex flex-col w-full'>
        <div className='flex justify-between my-8'>
            <input type='text' className='p-2 border-gray-400 placeholder:italic rounded-sm' placeholder='Search' onChange={(e)=>setSearch(e.target.value)} />
            <Button text={`${monHeader} +`} value={openAddTopicModal} setValue={setOpenAddTopicModal} />
            </div>
        <TopicTable data={filteredTopicData} value={openAdjustTopicModal} setValue={setOpenAdjustTopicModal} refreshTopicsData={refreshTopicsData} setAdjustTopicData={setAdjustTopicData}/>
        <AddTopicModal value={openAddTopicModal} setValue={setOpenAddTopicModal} refreshTopicsData={refreshTopicsData} />
        <AdjustTopicModal value={openAdjustTopicModal} setValue={setOpenAdjustTopicModal} refreshTopicsData={refreshTopicsData} adjustTopicData={adjustTopicData}/>
    </div>
  )
}

