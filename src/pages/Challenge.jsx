// const hiddenFlag = "CTF{Th1s_1s_Th3_Fl4g}"; // 👈 Hidden flag

// export default function Challenge() {
//   return (
//     <div className="p-10">
//       <h2 className="text-3xl font-semibold">Challenge</h2>
//       <p className="mt-4">Inspect the app, decode, or reverse engineer to find the flag!</p>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import './Challenge.css'; // Add CSS for animation and styles

const hiddenFlag = "CTF{Th1s_1s_Th3_Fl4g=}"; // 👈 Hidden flag

export default function Challenge() {
  const [text, setText] = useState('');
  const message = "Can you find the hidden flag?";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + message[index]);
      index++;
      if (index === message.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="challenge-container">
      <h2 className="title">🕵️‍♂️ Challenge Time!</h2>
      <p className="typing">{text}</p>

      <div className="challenge-grid">
        <img src="https://i.imgur.com/W3Q9q2V.png" alt="CTF Puzzle" className="challenge-image" />
        <div className="hint-box">
          <h3 className="hint-title">🧩 Hint</h3>
          <p>Use developer tools, explore the code, or try decoding techniques.</p>
          <p>Look deep, maybe in the browser console or source.</p>
        </div>
      </div>

      <p className="footer-note">🔐 The flag is hidden in plain sight... or is it?</p>
    </div>
  );
}
