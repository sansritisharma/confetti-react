import Confetti from "react-confetti";
import Button from "@mui/material/Button";
import { useState } from "react";

function BigButton() {

    const [buttonPressed, buttonNot] = useState(false);


  return (
    <div>
      {buttonPressed ? <Confetti /> : null}
      <Button onClick={() => buttonNot(!buttonPressed)}
      variant="contained">Contained</Button>
    </div>
  );
}
export default BigButton;
