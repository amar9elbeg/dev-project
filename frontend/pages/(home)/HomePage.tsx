import { useEffect, useState } from "react";
import { AddClassModal } from "./features/AddClassModal";
import { Classcard } from "./components/Classcard";
import { ClassTabs } from "./features/ClassTabs";
import { Header } from "../(common)/components/Header";import { ButtonComponent } from "../(common)/components/ButtonComponent";
{}



export const HomePage=()=> {
  const [openAddClassModal, setOpenAddClassModal] = useState(false)
  
  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-customGray">
      <div className="w-full">
        <Header />
        <div className="w-full flex-col justify-center py-10 px-20">
          <div className="w-full flex justify-between">
            <ClassTabs />
            <ButtonComponent text="Анги +" value={openAddClassModal} setValue={setOpenAddClassModal}/>
          </div>
          <div className="w-full grid grid-cols-5 my-10">
            <Classcard className="24h-mp1a" endDate="23.05.11" startDate="24.11.22" teacherName1="elbeg" teacherName2="gerelee" />
          </div>



        </div>


      </div>
      <AddClassModal value={openAddClassModal} setValue={setOpenAddClassModal} />

    </div>
  )
}