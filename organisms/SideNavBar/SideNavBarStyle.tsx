import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  boxShadow: "none",
  borderRight: "1px solid rgba(65, 65, 65, 0.20)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  boxShadow: "none",
  borderRight: "1px solid rgba(65, 65, 65, 0.20)",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

export const SideNavBarWrapper = styled("div")({
  display: "flex",
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const NavBarTop = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  background: "#fff",
  boxShadow: "none",
  borderBottom: "1px solid rgba(65, 65, 65, 0.20)",
  height: "60px",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const FlexContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

interface StyledIconBtnProps {
  "aria-label"?: string;
  edge?: string;
  theme?: any;
  open?: boolean;
}

export const StyledIconBtn = styled(IconButton)(
  ({ theme, open }: StyledIconBtnProps) => ({
    visibility: open ? "hidden" : "visible",
  })
);

export const NavBarDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid rgba(65, 65, 65, 0.20)",
  padding: theme.spacing(2, 1),
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
}));

export const NavListContainer = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingBottom: "3rem",
}));

export const StyledList = styled(List)(({ theme }) => ({}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "block",
  padding: "0 auto",

  "& .MuiButtonBase-root": {
    margin: 0,
  },
}));

interface StyledListItemProps {
  open?: any;
  isLogoutBtn?: boolean;
  isCurrentPath?: boolean;
}
export const StyledListItemButton = styled(ListItemButton)(
  ({ open, isLogoutBtn, isCurrentPath }: StyledListItemProps) => ({
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    margin: "1rem 0",
    borderRadius: "8px",
    padding: "0rem 0.8rem",
    transition: "color 100ms ease",

    ...(isCurrentPath && {
      background: isLogoutBtn ? "rgba(239, 68, 68, 0.2)" : "#4361ee",

      "& .MuiTypography-root": {
        color: isLogoutBtn ? "rgba(239, 68, 68, 1)" : "#fff",
      },

      "& .MuiListItemIcon-root  svg": {
        color: isLogoutBtn ? "5px solid rgba(239, 68, 68, 0.5)" : "#fff",
      },
    }),

    "&:hover": {
      background: isLogoutBtn
        ? "rgba(239, 68, 68, 0.2)"
        : isCurrentPath
        ? "#4361ee"
        : "rgba(0, 0, 0, 0.05)",
    },

    "&:hover .MuiTypography-root": {
      color: isLogoutBtn ? "rgba(239, 68, 68, 1)" : isCurrentPath && "#fff",
    },

    "&:hover .MuiListItemIcon-root  svg": {
      color: isLogoutBtn ? "rgba(239, 68, 68, 0.8)" : isCurrentPath && "#fff",
    },
  })
);

export const StyledListItemIcon = styled(ListItemIcon)(
  ({ open }: StyledListItemProps) => ({
    minWidth: 0,
    mr: open ? 3 : "auto",
    justifyContent: "center",
  })
);

export const ListLink = styled(Typography)(({ theme }) => ({
  marginLeft: "1rem",
  fontFamily: "Poppins, sans-serif",
  color: "#000",
  fontSize: "14px",
}));

export const ProfileContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",

  "&:hover": {
    background: "none",
  },
});

interface TextProp {
  color?: string;
}
export const Text = styled(Typography)(({ color }: TextProp) => ({
  fontFamily: "Poppins, sans-serif",
  color: color ? color : "#000",
}));
