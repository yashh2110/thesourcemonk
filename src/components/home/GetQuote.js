import { Button } from "@mui/material";
import React from "react";

function GetQuote() {
  return (
    <div className="quote-container">
      <p className="quote-text">Get in touch with the best in the field</p>
      <Button variant="contained" className="quoteBtn">
        Call Us
      </Button>
    </div>
  );
}

export default GetQuote;
