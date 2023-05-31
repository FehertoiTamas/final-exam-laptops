import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Laptop({ data }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <Typography variant="h5">{data.name}</Typography>
      {showDetails && (
        <>
          <Typography>brand: {data.brand}</Typography>
          <Typography>weight: "{data.weight}</Typography>
        </>
      )}
      <Button variant="contained" onClick={toggleDetails}>
        {showDetails ? "Show less" : "Show more"}
      </Button>
    </div>
  );
}
