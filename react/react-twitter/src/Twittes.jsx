import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import "./twitter.css";

function Twittes(props) {
  return (
    <div className="tweets">
      <span>{props.tw.value}</span>
      <Button variant="contained" color="secondary" onClick={() => props.delete(props.tw)}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default Twittes;
