import Button from "@mui/material/Button";
import { useState } from "react";
import "./BigButton.css";
import ConfettiEffect from "./ConfettiEffect";

function BigButton() {
  const [buttonPressed, buttonNot] = useState(false);

  return (
    <div>
      {buttonPressed ? <ConfettiEffect /> : null}
      <Button
        color="success"
        size="large"
        className="bigButt"
        onClick={() => buttonNot(!buttonPressed)}
        variant="contained"
      >
        PRESS ME
      </Button>
    </div>
  );
}

export default BigButton;
