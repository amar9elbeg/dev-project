import React from 'react'
import Link from 'next/link'
import CompanyLogoIcon from '../icons/CompanyLogoIcon'

const CompanyLogo = () => {
  return (
    <Link href="/">
        <CompanyLogoIcon/>
    </Link>
  )
}

export default CompanyLogo

