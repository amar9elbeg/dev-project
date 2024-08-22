import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { LogInIcon } from 'lucide-react'


const LogOutButton = () => {
  return (
    <Button variant="ghost" asChild>
        <Link href="/"><LogInIcon/></Link>
    </Button>

  )
}

export default LogOutButton
