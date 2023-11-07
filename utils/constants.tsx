import {
  SerialNoIcon,
  TableActionIcon,
  TableEmailIcon,
  TablePasswordIcon,
  TableProfileIcon,
  TableSubjectIcon,
} from "@/atoms/Icons";

type navLinkType = {
  name: string;
  path: string;
};

export const navLinks: navLinkType[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "User management",
    path: "/user-management",
  },
  {
    name: "Education management",
    path: "/education-management",
  },
  {
    name: "Report",
    path: "/report",
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

export const educationManagementTabs = [
  {
    query: "all",
    value: "All",
  },
  {
    query: "university",
    value: "University",
  },
  {
    query: "school",
    value: "School",
  },
];
