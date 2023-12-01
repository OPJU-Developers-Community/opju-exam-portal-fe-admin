import { styled } from "@mui/system";

export const FilterWrapper = styled("div")({
  background: "rgba(247, 247, 247, 0.50)",
  border: "1px solid rgba(0, 0, 0, 0.10)",
  borderRadius: "6px",
  width: "100%",
  maxWidth: "494px",
  padding: "5px 5px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

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
