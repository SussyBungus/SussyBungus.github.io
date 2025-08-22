import React, { useState, useEffect, useRef } from "react";
import "../styles/valentine.css";

const startDate = new Date(2025, 5, 4); // June 4, 2025
const noMessages = [
  "Are you sure, baby? 😢",
  "Please, pookie 💖",
  "Don't be mean 😘",
  "Just say yes 😏",
  "Aww, come on ❤️",
  "You're breaking my heart 💔",
  "Please say yes 🥺",
  "Nooo, I love you 😭",
  "Don't make me sad 😢",
  "Say yes, pookie! 💕"
];

const Valentine = () => {
  const [step, setStep] = useState(0);
  const [daysTogether, setDaysTogether] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [showButtons, setShowButtons] = useState(false);
  const [noText, setNoText] = useState("No 😢");
  const [celebrate, setCelebrate] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    let timer;
    if (step === 0) timer = setTimeout(() => setStep(1), 10000);
    else if (step === 1) {
      const today = new Date();
      const diffTime = Math.abs(today - startDate);
      setDaysTogether(Math.floor(diffTime / (1000 * 60 * 60 * 24)));
      setShowHearts(true);
      timer = setTimeout(() => setStep(2), 10000);
    }
    return () => clearTimeout(timer);
  }, [step]);

  // Scratch card logic
  useEffect(() => {
    if (step !== 2) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = 350;
    canvas.height = 150;

    ctx.fillStyle = "#FF6F61";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let scratched = false;
    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let transparentPixels = 0;
      for (let i = 3; i < imgData.data.length; i += 4) {
        if (imgData.data[i] === 0) transparentPixels++;
      }
      if (transparentPixels > canvas.width * canvas.height * 0.35 && !scratched) {
        scratched = true;
        setTimeout(() => setShowButtons(true), 500);
      }
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("touchmove", (e) => {
      e.preventDefault();
      handleMove(e.touches[0]);
    });

    return () => canvas.removeEventListener("mousemove", handleMove);
  }, [step]);

  const handleNoClick = () => {
    const randMsg = noMessages[Math.floor(Math.random() * noMessages.length)];
    setNoText(randMsg);
    setYesSize(prev => prev + Math.random() * 0.3 + 0.1);
  };

  const handleYesClick = () => setCelebrate(true);

  useEffect(() => {
    const handleContext = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContext);
    return () => document.removeEventListener("contextmenu", handleContext);
  }, []);

  return (
    <div className="valentine-container no-scroll">
      {!celebrate && step === 0 && (
        <div className="section">
          <h1>Valentine's Bbg 😏</h1>
          <p>
            Emily, my heart races every time I think of you. You light up my world,
            and each moment with you is a cherished memory. 💖
          </p>
        </div>
      )}

      {!celebrate && step === 1 && (
        <div className="section">
          <h1>Our Journey Together</h1>
          <p className="days">
            It's been <strong>{daysTogether} days</strong> together, full of smiles,
            laughter, and love. 💘<br />
            That's basically <strong>{daysTogether * 24} hours</strong> in Valorant ☠️
          </p>
        </div>
      )}

      {!celebrate && step === 2 && (
        <div className="section">
          <h1>Emily…</h1>
          <h3>Scratch the card hehe 💌</h3>
          <div className="scratch-card">
            <div className="scratch-message">💌 Will You Be mY VALENTINEEEEEE 💌</div>
            <canvas ref={canvasRef} className="canvas"></canvas>
          </div>

          {showButtons && (
            <div className="valentine-buttons">
              <button id="yes-btn" style={{ transform: `scale(${yesSize})` }} onClick={handleYesClick}>
                Yes ❤️
              </button>
              <button id="no-btn" onClick={handleNoClick}>{noText}</button>
            </div>
          )}
        </div>
      )}

      {celebrate && (
        <div className="section celebration">
          <h1>YAYYYYY! 😘💖</h1>
          <p>I'm so happy! Happy Valentine's Day, Emily! 💕</p>
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              className="floating-heart"
              style={{
                left: `${Math.random() * 95}%`,
                animationDelay: `${Math.random() * 5}s`,
                pointerEvents: "none"
              }}
            >
              ❤️
            </span>
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i + 100}
              className="floating-heart confetti"
              style={{
                left: `${Math.random() * 95}%`,
                animationDelay: `${Math.random() * 5}s`,
                pointerEvents: "none"
              }}
            >
              💖
            </span>
          ))}
        </div>
      )}

      {!celebrate && showHearts &&
        Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i + 200}
            className="floating-heart"
            style={{
              left: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 5}s`,
              pointerEvents: "none",
            }}
          >
            ❤️
          </span>
        ))}
    </div>
  );
};

export default Valentine;
