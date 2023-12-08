// lib and others
import { useEffect } from "react";

// hoc
import withAuth from "@/hoc/withAuth";

// template
import DashboardTemplate from "@/templates/DashboardTemplate/DashboardTemplate";
import CommonTemplate from "@/templates/CommonTemplate/CommonTemplate";

function Home() {
  return (
    <CommonTemplate>
      <DashboardTemplate />
    </CommonTemplate>
  );
}

export default withAuth(Home);
