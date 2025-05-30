// import './Home.css';

// export default function Home() {
//   return (
//     <div className="home-container text-center mt-20 px-4">
//       <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Welcome to the CTF</h1>

//       <img
//         src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
//         alt="Ocean Waves"
//         className="mx-auto rounded-lg shadow-lg mb-6 animate-fadeIn"
//       />

//       <p className="mt-4 text-lg text-gray-400 animate-fadeIn delay-200">
//         Can you find the hidden flag?
//       </p>

//       <p className="mt-2 text-gray-500 animate-fadeIn delay-400 max-w-xl mx-auto">
//         Explore every corner of this app. The flag might be hidden in the code, comments, or even in plain sight.
//       </p>

//       <p className="mt-6 text-sm text-gray-400 italic animate-fadeIn delay-600">
//         Hint: Sometimes, the flag is not where you expect it.
//       </p>
//     </div>
//   );
// }


import { useState } from 'react';
import './Home.css';

export default function Home() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  return (
    <div className="home-container text-center mt-20 px-4">
      <h1 className="text">
        🎉 Welcome to the Ultimate CTF Challenge
      </h1>

      {/* <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
        alt="Ocean Waves"
        className="mx-auto rounded-lg shadow-xl mb-8 animate-fadeIn"
      /> */}

      <p className="mt-4 text-xl animate-fadeIn delay-200">
        Can you find the <strong>hidden flag</strong>? 🕵️‍♂️
      </p>

      <p className="mt-4 max-w-xl mx-auto text-gray-300 animate-fadeIn delay-400">
        Explore every corner of this app. The flag might be hidden in the code, comments, or even in plain sight.
      </p>

      <h2 className="mt-10 text-3xl font-semibold text-yellow-300 animate-fadeIn delay-600">
        How to Play
      </h2>
      <ul className="list-disc list-inside mt-4 text-left max-w-xl mx-auto animate-fadeIn delay-800">
        <li>🔍 Inspect elements and source code carefully.</li>
        <li>💻 Look for hidden clues in comments or variables.</li>
        <li>🚀 Use your hacking skills ethically and responsibly.</li>
        <li>🏆 Find the flag and submit it to win prizes!</li>
      </ul>

      <button
        onClick={() => alert('Keep looking! Sometimes the flag is hidden where you least expect.')}
        className="mt-8 bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300 animate-fadeIn delay-1000"
      >
        Need a Hint?
      </button>

      <div className="mt-8 text-gray-400 italic animate-fadeIn delay-1200">
        <p>Tip: Try clicking the button below for a surprise!</p>
        <button
          className="mt-2 px-5 py-2 border border-gray-400 rounded hover:bg-gray-600 transition duration-300"
          onClick={() => setShowEasterEgg(!showEasterEgg)}
        >
        Secret Message
        </button>
        {showEasterEgg && (
          <p className="mt-3 text-yellow-300 font-mono">
            🎉 Congrats! You found a secret message: FLAG-IS-HIDDEN-HERE 🎉
          </p>
        )}
      </div>
    </div>
  );
}
