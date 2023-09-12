// lib & others

// hoc
import withAuth from "@/hoc/withAuth";

// components
import NavBar from "@/components/NavBar/NavBar"
import EducationManagementSection from "@/components/EducationManagementSection/EducationManagementSection";

// redux

const EducationManagement = () => {
  return (
    <div>
      <NavBar />
      <EducationManagementSection />
    </div>
  )
}

export default withAuth(EducationManagement);