import { useState } from "react";

export default function CrystalVoice() {
  const [playing, setPlaying] = useState(false);
  const audio = new Audio("http://127.0.0.1:5000/api/crystal/audio");

  const handlePlay = () => {
    if (!playing) {
      audio.play();
      setPlaying(true);
      audio.onended = () => setPlaying(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={handlePlay}
        className="bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-bold py-2 px-6 rounded-2xl shadow-lg hover:scale-105 transition"
      >
        {playing ? "Crystal parle..." : "Crystal te parle"}
      </button>
    </div>
  );
}