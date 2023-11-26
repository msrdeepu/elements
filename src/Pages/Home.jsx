import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./home.css";

import elementdData from "../Elements";
import CardItem from "../CardItem/CardItem";
import { Link } from "react-router-dom";
import { Padding } from "@mui/icons-material";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));
const Home = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "8px",
        }}
      >
        <h2 style={{ color: "orange" }}>Search Elements</h2>
        <TextField
          type="search"
          id="standard-basic"
          label="Search Elements"
          variant="standard"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
        }}
      >
        {elementdData
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((item) => (
            <CardItem
              id={item.atomicNumber}
              symbol={item.symbol}
              name={item.name}
              yearfound={item.yearDiscovered}
              block={item.block}
              ec={item.electronicConfiguration}
              groupBlock={item.groupBlock}
              an={item.atomicNumber}
              standardState={item.standardState}
            />
          ))}
      </Box>
    </>
  );
};

export default Home;
