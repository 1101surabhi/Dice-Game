import React, { useEffect } from "react";
import styles from "./Alert.module.css";
import confetti from "canvas-confetti";

const Alert = (props) => {
  const { wrong } = props;
  const content = wrong
    ? "Missed it! Keep trying for a better roll!"
    : "Well done! Your guess was spot on!";
  let classes = wrong
    ? "border border-red-600 bg-red-200"
    : "border border-green-600 bg-green-200";

  useEffect(() => {
    if (!wrong) {
      const duration = 2 * 1000; // 2 seconds
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  });

  return (
    <div
      className={`rounded-md text-lg border-red poppins-medium ${classes} absolute px-4 py-3 left-1/2 top-16 -translate-x-1/2 ${styles.alert}`}
    >
      {content}
    </div>
  );
};

export default Alert;
