import { Route, Routes } from "react-router-dom";

// import components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// material UI
import Grid from "@mui/material/Grid";

// material UI theming
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Date picker
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ad0000",
      contrastText: "ffffff"
    },
    secondary: {
      main: "#181818",
      contrastText: "#ffffff"
    },
    background: {
      default: '#000000',
      paper: '#181818',
    },
    text: {
      primary: "#ffffff",
    },
    divider: "rgba(255,255,255,0.7)",
  },
});

function App() {
  return (

<LocalizationProvider dateAdapter={AdapterDateFns}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        className="App"
        direction="column"
        align="center"
        justifyContent="space-between"
        wrap="nowrap"
      >
        <Grid item>
          <NavBar />
        </Grid>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          direction="column"
          align="center"
          justifyContent="space-between"
          wrap="nowrap"
          className="App"
        >
          <Grid item>
            <NavBar />
          </Grid>

          <Grid item>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
            </Routes>
          </Grid>

          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
