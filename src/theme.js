import { createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import blueGrey from "@material-ui/core/colors/blueGrey";

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: blueGrey[600],
    },
  },
});

export default theme;
