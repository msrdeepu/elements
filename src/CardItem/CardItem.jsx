import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardItem({
  name,
  symbol,
  yearfound,
  id,
  block,
  ec,
  groupBlock,
  an,
  standardState,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card key={id} sx={{ minWidth: 345, margin: "8px", padding: "3px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {symbol}
          </Avatar>
        }
        title={name}
        subheader={`Discovered: ${yearfound}`}
      />

      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "crimson" }}>Atomic No:</p>
          <p style={{ color: "orange" }}>{an}</p>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "crimson" }}>Block</p>
          <p style={{ color: "orange" }}>{block}</p>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "crimson" }}>EC</p>
          <p style={{ color: "orange" }}>{ec}</p>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "crimson" }}>GroupBlock</p>
          <p style={{ color: "orange" }}>{groupBlock}</p>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "crimson" }}>Standard State:</p>
          <p style={{ color: "orange" }}>{standardState}</p>
        </div>
        <hr />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Button variant="contained">View Full Details</Button>
        </IconButton>
      </CardActions>
    </Card>
  );
}
