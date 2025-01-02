import React, { useState } from "react";

const Natiq = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [audio, setAudio] = useState(null);
  const [error, setError] = useState("");

  const handleEcho = async () => {
    setLoading(true);
    setAudio(null);
    setError("");

    try {
      const response = await fetch("https://echo-6sdzv54itq-uc.a.run.app/natiq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const result = await response.json();

      if (result.wave) {
        const base64Audio = result.wave.replace(/-/g, "+").replace(/_/g, "/");
        setAudio(`data:audio/wav;base64,${base64Audio}`);
      } else {
        setError("Failed to generate audio. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="natiq-view">
      <h1>Natiq Service</h1>
      <textarea
        placeholder="Write Arabic text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleEcho} disabled={loading || !text}>
        {loading ? "Loading..." : "Echo"}
      </button>
      {loading && <div className="loading-overlay">Loading...</div>}
      {audio && <audio className="audio" controls autoPlay src={audio}></audio>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Natiq;
