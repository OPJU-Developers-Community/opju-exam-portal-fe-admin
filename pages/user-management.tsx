// lib and others
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// hoc
import withAuth from "@/hoc/withAuth";

// components
import NavBar from "@/components/NavBar/NavBar";
import UserManagementSection from "@/components/UserManagementSection/UserManagementSection";
import { Wrapper } from "./styles/UserManagementPageStyle";

// redux
import { getQuestionSetter } from "@/redux/slices/questionSetterSlice";

const UserManagement = () => {
  const { data: questionSetterData, status: questionSetterApiStatus } =
    useSelector((state: any) => state.questionSetter);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getQuestionSetter({ type: "question_setter" }));
  }, []);

  const userManagementUsers = [
    {
      title: "Question Setter",
      data: questionSetterData,
      apiStatus: questionSetterApiStatus,
    },
    {
      title: "Question Verifier",
      data: [],
      apiStatus: "",
    },
    {
      title: "Examiner",
      data: [],
      apiStatus: "",
    },
  ];

  return (
    <>
      <NavBar />
      <Wrapper>
        {userManagementUsers.map((user, index) => (
          <UserManagementSection
            title={user.title}
            data={user.data}
            apiStatus={user.apiStatus}
            key={index}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default withAuth(UserManagement);
