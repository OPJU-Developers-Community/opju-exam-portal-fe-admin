// components
import SideNavBar from "@/organisms/SideNavBar/SideNavBar";
import { Box } from "@mui/material";

// types
import { ComponentChildrenProps } from "@/types/index.type";

const CommonTemplate = ({ children }: ComponentChildrenProps) => {
  return (
    <SideNavBar>
      <Box component="main" sx={{ flexGrow: 1, p: "5rem 1rem" }}>
        {children}
      </Box>
    </SideNavBar>
  );
};

export default CommonTemplate;
