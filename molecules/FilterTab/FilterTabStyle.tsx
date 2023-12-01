import { styled } from "@mui/system";

type FilterPropType = {
  mxWidth : string | null
}

export const FilterWrapper = styled("div")(
  ({
    mxWidth = null
  }: FilterPropType) => ({
    background: "rgba(247, 247, 247, 0.50)",
  border: "1px solid rgba(0, 0, 0, 0.10)",
  borderRadius: "6px",
  width: "100%",
  maxWidth: mxWidth ?  mxWidth : "494px",
  padding: "0.5rem 0.3rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  })
);

type tabType = {
  active: Boolean;
};
export const StyledTab = styled("span")(({ active }: tabType) => ({
  background: active ? "#1C64F2" : "transparent",
  color: active ? "#FFFFFF" : "auto",
  borderRadius: "6px",
  padding: "8px 16px",
  cursor: "pointer",
}));
