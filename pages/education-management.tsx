import EducationManagementSection from '@/components/EducationManagementSection/EducationManagementSection'
import NavBar from '@/components/NavBar/NavBar'
import withAuth from '@/hoc/withAuth'
import React from 'react'

const EducationalManagement = () => {
  return (
    <>
    <NavBar />
    <EducationManagementSection />
    </>
  )
}

export default withAuth(EducationalManagement);