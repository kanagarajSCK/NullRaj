import { useState } from "react";

export default function SubmitFlag() {
  const [flag, setFlag] = useState("");
  const [message, setMessage] = useState("");

  const validateFlag = () => {
    if (flag === "CTF{Th1s_1s_Th3_Fl4g}") {
      setMessage("🎉 Correct Flag!");
    } else {
      setMessage("❌ Try Again!");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Submit Your Flag</h2>
      <input
        className="w-full p-2 border rounded text-black"
        placeholder="Enter your flag here"
        value={flag}
        onChange={(e) => setFlag(e.target.value)}
      />
      <button
        onClick={validateFlag}
        className="mt-4 bg-accent text-white px-4 py-2 rounded"
      >
        Submit
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
