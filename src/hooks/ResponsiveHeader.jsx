import { useEffect, useState } from "react";

const ResponsiveHeader = () => {
  const [timer, setTimer] = useState('');
  const [timeLeft, setTimeLeft] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  // Load timer from localStorage on mount
  useEffect(() => {
    const storedTimer = localStorage.getItem('timer');
    if (storedTimer) {
      setTimer(storedTimer);
      startCountdown(storedTimer);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const startCountdown = (targetTime) => {
    if (!targetTime) return;

    const endTime = new Date(targetTime).getTime();

    const id = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        clearInterval(id);
        setTimeLeft(0);
        localStorage.removeItem('timer');
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    setIntervalId(id);
  };

  const handleStart = () => {
    if (!timer || timer.trim() === "") {
      alert("Please enter a valid time");
      return;
    }

    localStorage.setItem("timer", timer);
    startCountdown(timer);
  };

  // Convert milliseconds to hh:mm:ss
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div style={styles.container}>
      <h2>Countdown Timer</h2>
      <input
        className="p-2 border border-black"
        type="datetime-local"
        value={timer}
        onChange={(e) => setTimer(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleStart} style={styles.button}>Start</button>

      <div style={{ marginTop: "1rem" }}>
        {timeLeft !== null ? (
          <h1 style={styles.timer}>{formatTime(timeLeft)}</h1>
        ) : (
          timer && <h1>{new Date(timer).toLocaleString()}</h1>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    maxWidth: 400,
    margin: "auto",
    fontFamily: "sans-serif",
  },
  input: {
    padding: "0.5rem",
    width: "100%",
    marginBottom: "1rem",
  },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
  timer: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
};

export default ResponsiveHeader;
