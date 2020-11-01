import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import "./twitter.css";
import Twittes from "./Twittes";

function Twitter() {
  const [twittes, setTwittes] = useState([]);
  const [open, setOpen] = React.useState({ status: false, message: "" });
  const [newTwitte, setNewTwitte] = useState("");

  const v = React.useState(0);

const y = v[0];

const setY = v[1];
console.log(setY);
  useEffect(() => {
    console.log(uuidv4('dac7edb82-cda0-4da7-9504-39711a04adfbe'))
  
    
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get("http://localhost:3000/tweets");
    setTwittes(response.data);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ status: false, message: "" });
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  function handleChange(e) {
    setNewTwitte(e.target.value);
  }

  async function postNewTwitte() {
    const numberSpaces = newTwitte.split(" ").length - 1;
    const numberEnters = newTwitte.split("\n").length - 1;
    if (!(numberSpaces + numberEnters === newTwitte.length)) {
      const response = await axios.post("http://localhost:3000/tweets", {
        id: uuidv4(),
        value: newTwitte,
      });
      if (response.status === 201) {
        setOpen({ status: true, message: "Tweet criado com sucesso!" });
        setTwittes([...twittes, response.data]);
        setNewTwitte("");
      }
    }
  }

  async function DeleteTwitte(tw) {
    const response = await axios.delete(
      `http://localhost:3000/tweets/${tw.id}`
    );
    if (response.status === 200) {
      setOpen({ status: true, message: "Tweet removido com sucesso!" });
      setTwittes((previous) =>
        previous
          .map((t) => {
            return t.id === tw.id ? null : t;
          })
          .filter((o) => o)
      );
    }
  }

  function getColorText() {
    if (newTwitte.length <= 270) {
      return "span-green bold";
    }
    if (newTwitte.length <= 280) {
      return "span-orange bold";
    } else return "span-red bold";
  }

  function handleKeyUp(event) {
    if (event.keyCode === 13 && event.ctrlKey) {
      if (!(newTwitte.length > 280)) {
        postNewTwitte();
      }
    }
  }

  return (
    <>
      <h1>React Twitter</h1>
      <div>
        <div>Esreva aqui:</div>
        <textarea
          className="text-area"
          onChange={handleChange}
          value={newTwitte}
          onKeyUp={(event) => handleKeyUp(event)}
        ></textarea>
        <div className="width-60">
          <span className={getColorText()}>{`${
            280 - newTwitte.length
          } caracter(es) restante(s)`}</span>
          <Button
            variant="contained"
            color="primary"
            disabled={newTwitte.length > 280}
            onClick={() => postNewTwitte()}
          >
            TWITTAR
          </Button>
        </div>
      </div>

      {twittes.map((tw) => {
        return <Twittes tw={tw} key={tw.id} delete={DeleteTwitte} />;
      })}
      <Snackbar
        open={open.status}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {open.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Twitter;
