import React, {useState} from 'react'
import { Student, Topic } from '@/generated'
import { HeaderMap } from '../utils/Utils'
import { Button } from '@/pages/(common)/components/Button'
import { AddTopicModal } from './AddTopicModal'
import { TopicTable } from './TopicTable'
import { Search } from 'lucide-react'
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
        <div className='flex border-gray-300 border rounded-lg'>
            <div className='flex justify-center items-center text-gray-500 rounded-l-lg px-2 bg-gray-200'><Search size={15}/></div>
            <input type='text' className='p-2  placeholder:italic rounded-r-lg' placeholder={` Search topic`} onChange={(e)=>setSearch(e.target.value)} />
          </div>            <Button text={`${monHeader} +`} value={openAddTopicModal} setValue={setOpenAddTopicModal} />
            </div>
        <TopicTable data={filteredTopicData} value={openAdjustTopicModal} setValue={setOpenAdjustTopicModal} refreshTopicsData={refreshTopicsData} setAdjustTopicData={setAdjustTopicData}/>
        <AddTopicModal value={openAddTopicModal} setValue={setOpenAddTopicModal} refreshTopicsData={refreshTopicsData} />
        <AdjustTopicModal value={openAdjustTopicModal} setValue={setOpenAdjustTopicModal} refreshTopicsData={refreshTopicsData} adjustTopicData={adjustTopicData}/>
    </div>
  )
}

