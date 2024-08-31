import { useState } from "react";
import { AddClassModal } from "./(home)/features/AddClassModal";
import { Classcard } from "./(home)/components/Classcard";
import { ClassTabs } from "./(home)/features/ClassTabs";
import { Header } from "./(common)/components/Header";import { HomePage } from "./(home)/HomePage";


export default function Home() {
  const [openAddClassModal, setOpenAddClassModal] = useState(false)
  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-customGray">
      <HomePage/>

    </div>
  )
}