// compnents
import EducationManagementCard from "@/molecules/EducationManagementCard/EducationManagementCard";
import { Wrapper } from "./EducationManagementContainerStyle";
import { Box, Divider, Skeleton } from "@mui/material";
import NoDataFound from "@/molecules/NoDataFound/NoDataFound";

// types
interface educationManagementProps {
  apiStatus: string;
  data: [];
}

const EducationManagementContainer = (props: educationManagementProps) => {
  const { apiStatus, data } = props;
  return (
    <>
      {apiStatus === "success" && !data?.length && <NoDataFound />}

      {apiStatus === "success" && data?.length >= 1 && (
        <Wrapper>
          {data?.map((item, i) => (
            <EducationManagementCard key={i} item={item} />
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
              <Box display="flex" flexDirection="column">
                <Skeleton
                  variant="text"
                  width="50%"
                  sx={{ marginLeft: "8px" }}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  width="30%"
                  sx={{ marginLeft: "8px" }}
                  animation="wave"
                />
              </Box>
              <Divider />
              <Box marginTop={2} display="flex" justifyContent="space-between">
                <Skeleton
                  width="25%"
                  key={i}
                  variant="text"
                  sx={{ marginLeft: "8px" }}
                  animation="wave"
                />
                <Skeleton
                  width="25%"
                  key={i}
                  variant="text"
                  sx={{ marginLeft: "8px" }}
                  animation="wave"
                />
              </Box>
              <Skeleton
                width="25%"
                key={i}
                variant="text"
                sx={{ marginLeft: "8px" }}
                animation="wave"
              />
              <Box display="flex" flexWrap="wrap">
                {[...new Array(5)].map((_, i) => (
                  <Skeleton
                    variant="text"
                    width="20%"
                    sx={{ marginLeft: "8px", marginTop: "8px" }}
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

export default EducationManagementContainer;
