import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const IntroAnimation = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState<"in" | "fadeout">("in");
  
  useEffect(() => {
    const timer1 = setTimeout(() => setStage("fadeout"), 2200); // hold before fade
    const timer2 = setTimeout(() => navigate("/home"), 3200); // go to home after fade
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [navigate]);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-50 ${
        stage === "fadeout" ? "animate-fadeOutBlack" : ""
      }`}
    >
      <img
        src="/Zero flames logo - black.jpg"
        alt="Zero Flames Fire Systems Logo"
        className={`w-96 h-110 ${
          stage === "in" ? "animate-cinematicPop" : "scale-100 opacity-100"
        }`}
      />
    </div>
  );
};

export default IntroAnimation;