// theme.ts or theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPopover: {
      styleOverrides: {
        root: {
          "& div[class*='MUIDataTableToolbar-filterPaper']": {
            "@media (max-width: 600px)": {
              minWidth: "92%",
            },
          },
        },
      },
    },
  },
});

export default theme;
