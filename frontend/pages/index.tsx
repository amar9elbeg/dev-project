import Header from "./components/header/Header";
import LogOutButton from "./components/header/LogOutButton";
import UserAccount from "./components/header/UserAccount";

export default function Home() {
  return( 
  <div className="min-h-screen flex justify-center items-start">
        <Header/>
  </div>
  )
}