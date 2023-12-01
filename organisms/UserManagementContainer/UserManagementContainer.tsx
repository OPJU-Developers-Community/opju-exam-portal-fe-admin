// components
import UserManagementCard from "@/molecules/UserManagementCard/UserManagementCard";
import { Wrapper } from "./UserManagementContainerStyle";
import { Box, Skeleton } from "@mui/material";
import NoDataFound from "@/molecules/NoDataFound/NoDataFound";

// types
interface userManagementProps {
  apiStatus: string;
  data: [];
}
const UserManagementContainer = (props: userManagementProps) => {
  const { apiStatus, data } = props;
  return (
    <>
      {apiStatus === "success" && !data?.length && <NoDataFound />}

      {apiStatus === "success" && data?.length && (
        <Wrapper>
          {data?.map((item, i) => (
            <UserManagementCard key={i} item={item} />
          ))}
        </Wrapper>
      )}

      {apiStatus === "loading" && (
        <Wrapper>
          {[...new Array(15)].map((_, i) => (
            <Box
              key={i}
              sx={{
                background: "#fff",
                borderRadius: "8px",
                padding: "16px",
                width: "380px",
                maxWidth: "100%",
              }}
            >
              <Box display="flex" alignItems="center">
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton
                  variant="text"
                  width="50%"
                  sx={{ marginLeft: "8px" }}
                  animation="wave"
                />
              </Box>
              <Box marginTop={2}>
                {[...new Array(3)].map((_, i) => (
                  <Skeleton
                    key={i}
                    variant="text"
                    sx={{ marginLeft: "8px" }}
                    animation="wave"
                  />
                ))}
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                marginTop={1}
              >
                <Skeleton
                  variant="text"
                  width="50%"
                  sx={{ marginLeft: "8px" }}
                  animation="wave"
                />
              </Box>
            </Box>
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default UserManagementContainer;
