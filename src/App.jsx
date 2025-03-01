import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [status, setStatus] = useState("🔥 STUDY TIME");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      const minutes = now.getMinutes();
      if (minutes % 60 >= 50) {
        setStatus("🍯 BREAK TIME");
      } else {
        setStatus("🔥 STUDY TIME");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h3>Automation Timer For Groom Player</h3>
      <h1>{status}</h1>
      <h2>{currentTime.toLocaleTimeString()}</h2>
    </>
  );
}

export default App;
