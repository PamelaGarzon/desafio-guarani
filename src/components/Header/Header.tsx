import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "rgb(39, 75, 43)" }}>
      <Toolbar disableGutters sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px", opacity: 1 }}
            srcSet={`${logo} 163w, ${logo} 82w, ${logo} 41w`}
          />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
