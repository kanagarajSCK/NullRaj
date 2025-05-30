// import { useState } from "react";

// export default function SubmitFlag() {
//   const [flag, setFlag] = useState("");
//   const [message, setMessage] = useState("");

//   const validateFlag = () => {
//     if (flag === "CTF{Th1s_1s_Th3_Fl4g}") {
//       setMessage("🎉 Correct Flag!");
//     } else {
//       setMessage("❌ Try Again!");
//     }
//   };

//   return (
//     <div className="p-10 max-w-md mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Submit Your Flag</h2>
//       <input
//         className="w-full p-2 border rounded text-black"
//         placeholder="Enter your flag here"
//         value={flag}
//         onChange={(e) => setFlag(e.target.value)}
//       />
//       <button
//         onClick={validateFlag}
//         className="mt-4 bg-accent text-white px-4 py-2 rounded"
//       >
//         Submit
//       </button>
//       {message && <p className="mt-4">{message}</p>}
//     </div>
//   );
// }







import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "./SubmitFlag.css";

export default function SubmitFlag() {
  const [flag, setFlag] = useState("");
  const [message, setMessage] = useState("");
  const [shake, setShake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const validateFlag = () => {
    if (flag === "CTF{Th1s_1s_Th3_Fl4g=}") {
      setMessage("🎉 Correct Flag! Well done!");
      setShowConfetti(true);
      setShake(false);
      setTimeout(() => setShowConfetti(false), 5000);
    } else {
      setMessage("❌ Incorrect Flag! Try harder, hacker!");
      setShake(true);
      setTimeout(() => setShake(false), 400); // reset shake effect
    }
  };

  return (
    <div className="submit-flag-container">
      <h2 className="submit-title">🚩 Submit Your Flag</h2>
      <p className="submit-subtext">Prove your skills, submit the correct flag below</p>
      <input
        className={`flag-input ${shake ? "shake" : ""}`}
        placeholder="Enter your flag here"
        value={flag}
        onChange={(e) => setFlag(e.target.value)}
      />
      <button
        onClick={validateFlag}
        className="submit-btn"
      >
        Submit Flag
      </button>
      {message && (
        <p className="submit-message">{message}</p>
      )}
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  );
}
