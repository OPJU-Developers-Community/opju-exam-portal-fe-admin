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
  borderRadius: "8px",
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
  background: active ? "#FCFCFC" : "transparent",
  border: active
    ? "1px solid rgba(137, 137, 137, 0.40)"
    : "1px solid transparent",
  borderRadius: "6px",
  padding: "0.5rem 1rem",
  cursor: "pointer",
  filter: active ? "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12))" : "none",
}));
