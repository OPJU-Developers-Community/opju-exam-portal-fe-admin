type navLinkType = {
    name: string;
    path: string;
}

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
        path: "/education-management"
    },
    {
        name: "Report",
        path: "/report"
    },
]

// remove below array (part of component)
export const userManagementUsers = [
    "Question Setter",
    "Question Verifier",
    "Examiner",
]

export const userManagementTabs = [
    {
      query: "all",
      value: "All",
    },
    {
      query: "question-setter",
      value: "Question Setter",
    },
    {
      query: "question-verifier",
      value: "Question Verifier",
    },
    {
      query: "examiner",
      value: "Examiner",
    },
  ];