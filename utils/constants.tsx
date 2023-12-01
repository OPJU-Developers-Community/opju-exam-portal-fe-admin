import {
  IconBuddyDashboardIcon,
  IconBuddyEducationManagementIcon,
  IconBuddyReportIcon,
  IconBuddyUserManagementIcon,
  SerialNoIcon,
  TableActionIcon,
  TableEmailIcon,
  TablePasswordIcon,
  TableProfileIcon,
  TableSubjectIcon,
} from "@/atoms/Icons";
import managementSvg from "@/public/management.svg";

type navLinkType = {
  name: string;
  path: string;
  icon: any;
};

export const navLinks: navLinkType[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: <IconBuddyDashboardIcon />,
  },
  {
    name: "User management",
    path: "/user-management",
    icon: <IconBuddyUserManagementIcon />,
  },
  {
    name: "Education management",
    path: "/education-management",
    icon: <IconBuddyEducationManagementIcon />,
  },
  {
    name: "Report",
    path: "/report",
    icon: <IconBuddyReportIcon />,
  },
];

// remove below array (part of component)
export const userManagementUsers = [
  "Question Setter",
  "Question Verifier",
  "Examiner",
];

export const userManagementTabs = [
  {
    query: "all",
    value: "All",
  },
  {
    query: "question_setter",
    value: "Question Setter",
  },
  {
    query: "question_verifier",
    value: "Question Verifier",
  },
  {
    query: "examiner",
    value: "Examiner",
  },
];

export const educationManagementTabs = [
  {
    query: "all",
    value: "All"
  },
  {
    query: "university",
    value: "University"
  },
  {
    query: "school",
    value: "School"
  },

]

export const userManagementTableHeadCells = [
  {
    label: "S.no",
    icon: <SerialNoIcon />,
  },
  {
    label: "User name",
    icon: <TableProfileIcon />,
  },
  {
    label: "Email",
    icon: <TableEmailIcon />,
  },
  {
    label: "Password",
    icon: <TablePasswordIcon />,
  },
  {
    label: "Subjects access",
    icon: <TableSubjectIcon />,
  },
  {
    label: "Actions",
    icon: <TableActionIcon />,
  },
];

export const AuthPageAd = [
  {
    title: "Empowering Academic Excellence",
    description:
      "Effortlessly manage Assessment Coordinators, Exam Verifiers, and Students. Secure, collaborative user administration for academic success.",
    img: "",
  },
  {
    title: "Elevate Learning, Simplify Administration",
    description:
      "Simplify curriculum planning, resource allocation, and assessment processes. A smarter, efficient tool for an elevated learning experience.",
    img: "",
  },
  {
    title: "Insights at a Glance",
    description:
      "Real-time data, comprehensive reports, informed decision-making. The powerhouse for shaping the future of education.",
    img: managementSvg,
  },
];

export const defaultErrorMessage = "Something went wrong";

export const defaultProfilePic =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D";

export const createUserFields = [
  {
    label: "User name",
    name: "name",
    placeholder: "Enter user name",
  },
  {
    label: "Email id",
    name: "email_id",
    placeholder: "Enter user email id",
  },
  {
    label: "Password",
    name: "password",
    placeholder: "Enter user password",
  },
  {
    label: "Subject access",
    name: "subject_access",
    placeholder: "Provide subject access",
  },
];

export const createEducatonFields = [
  {
    label: "Program name",
    name: "program",
    placeholder: "Enter program name",
  },
  {
    label: "Course name",
    name: "course",
    placeholder: "Enter course name",
  },
  {
    label: "Branch",
    name: "branch",
    placeholder: "Enter branch",
  },
  {
    label: "Semester",
    name: "semester",
    placeholder: "Enter semester",
  },
  {
    label: "Subjects",
    name: "subjects",
    placeholder: "Enter subjects",
  },
]
