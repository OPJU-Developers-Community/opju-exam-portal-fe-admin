// lib
import Image from "next/image";

// componenets
import CommonTemplate from "@/templates/CommonTemplate/CommonTemplate";
import { Box, Typography } from "@mui/material";
import Error404Img from "../public/error.png";

const Custom404Error = () => {
  return (
    <CommonTemplate>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 10rem)"
      >
        <Box position="relative">
          <Image src={Error404Img} alt="404-image" width={400} />
          <Typography
            textAlign="center"
            fontSize="1.3rem"
            fontFamily="Poppins, sans-serif"
            fontWeight={600}
            color="#1C64F2"
            sx={{
              position: "absolute",
              top: "84%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Page not found
          </Typography>
        </Box>
      </Box>
    </CommonTemplate>
  );
};

export default Custom404Error;
