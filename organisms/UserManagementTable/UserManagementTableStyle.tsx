import { styled } from "@mui/system";
import {
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";

export const TableWrapper = styled(TableContainer)({
  borderRadius: "13px 13px 0px 0px",
  background: "rgba(240, 240, 240, 1)",
});

export const StyledTable = styled(Table)({});

export const StyledTableHead = styled(TableHead)({
  borderBottom: "1px solid rgba(181, 181, 181, 0.13)",
});

export const StyledTableCell = styled(TableCell)({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  color: "#374957",
});

type CellWrapperPropType = {
  flexDir?: string | null;
  alignItem?: string | null;
};

export const CellWrapper = styled("div")(
  ({ flexDir = null, alignItem = null }: CellWrapperPropType) => ({
    display: "flex",
    flexDirection: flexDir === "column" ? "column" : "row",
    alignItems: alignItem ? alignItem : "center",
    flexWrap: "wrap",
  })
);

export const Text = styled(Typography)({
  fontFamily: "inherit",
  fontWeight: "inherit",
});

export const StyledTableBody = styled(TableBody)({
  background: "rgba(243, 243, 243, 0.5)",
});

export const StyledChip = styled(Chip)({
  borderRadius: "7px",
  fontFamily: "inherit",
  fontWeight: "400",
  marginTop: "5px",
});

export const StyledIconButton = styled(IconButton)({});
