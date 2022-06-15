import Confetti from "react-confetti";
import "./ConfettiEffect.js";

function ConfettiEffect() {
  return (
    <div className="confettiEffect">
      <Confetti numberOfPieces={800} tweenDuration={5000} />
    </div>
  );
}

export default ConfettiEffect;
