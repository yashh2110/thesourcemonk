import { Button } from "@mui/material";
import React from "react";

function GetQuote() {
  return (
    <div className="quote-container">
      <p className="quote-text">Write us at contact@sourcemonk.com</p>
      <Button variant="contained" className="quoteBtn">
        Mail Us
      </Button>
    </div>
  );
}

export default GetQuote;
