import Image from "next/image";

import NoDataFoundImg from "../../public/no-data-found.png";

// components
import { Text, Wrapper } from "./NoDataFoundStyle";

const NoDataFound = () => {
  return (
    <Wrapper>
      <Image src={NoDataFoundImg} alt="no-data-found" height="320" />
      <Text fontSize="1.2rem">No Data Found</Text>
    </Wrapper>
  );
};

export default NoDataFound;
