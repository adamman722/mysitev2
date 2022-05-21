import React from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function LandingPage() {
  return (
    <div>
      <Link to={`/about`}>About meeeee</Link>

      <Outlet />
    </div>
  );
}

export default LandingPage;
