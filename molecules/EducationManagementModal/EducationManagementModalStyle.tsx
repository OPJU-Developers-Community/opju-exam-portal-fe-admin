import {
  Button,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({});

export const ModalWrapper = styled("div")`
  padding: 1rem 1.5rem;
  border-radius: 13px;
  max-width: 400px;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
`;

export const FormControlWrapper = styled(FormControl)({
  margin: "1rem 0 0 0",
  fontWeight: 500,
});

export const StyledLabel = styled(FormControlLabel)({
  "& > span": {
    fontFamily: "Nunito",
  },
});
