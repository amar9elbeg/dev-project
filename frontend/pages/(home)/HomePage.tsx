import { useState } from "react";
import { AddClassModal } from "./features/AddClassModal";
import { Classcard } from "./components/Classcard";
import { ClassTabs } from "./features/ClassTabs";
import { Header } from "../(common)/components/Header";
import { Button } from "../(common)/components/Button";
import { AdjustClassModal } from "./features/AdjustClassModal";
import { Class, useGetClassesQueryQuery } from "@/generated";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const HomePage = () => {
  const [openAddClassModal, setOpenAddClassModal] = useState(false)
  const [openAdjustClassModal, setOpenAdjustClassModal] = useState(false)
  const [adjustClassData, setAdjustClassData] = useState<Class>()
  const [selectedTab, setSelectedTab] = useState('ALL')

  const { data, loading, error, refetch } = useGetClassesQueryQuery();

  const filteredClasses = data?.getClassesQuery?.filter((eachClass: Class) => {
    if (selectedTab === 'ALL') { return true; }
    else { return eachClass.type === selectedTab; }
  }) || [];

  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-customGray">
      <div className="w-full">
        <Header />
        <div className="w-full flex-col justify-center py-10 px-20">
          <div className="w-full flex justify-between">
            <ClassTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <Button text="Анги +" value={openAddClassModal} dataCy='HomePage-Add-Class-Button' setValue={setOpenAddClassModal} buttonVariant="outline" />
          </div>
          <div className="w-full grid grid-cols-4 my-10 gap-5">
            {filteredClasses.map((each: Class) =>
            (
              <Classcard classData={each} value={openAdjustClassModal} setValue={setOpenAdjustClassModal} setAdjustData={setAdjustClassData} refreshClassesData={refetch} />
            )
            )}
          </div>
        </div>
      </div>
      <AddClassModal value={openAddClassModal} setValue={setOpenAddClassModal} refreshClassesData={refetch} />
      <AdjustClassModal value={openAdjustClassModal} setValue={setOpenAdjustClassModal} adjustClassData={adjustClassData} refreshClassesData={refetch} />
      <ToastContainer />

    </div>
  )
}