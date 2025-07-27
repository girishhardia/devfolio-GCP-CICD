import { useEffect, useState } from "react";

const DecryptText = ({
  values = ["Empty"],
  interval = 2000,
  className = "",
}) => {
  const [text, setText] = useState(values[0]);
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [values, interval]);

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    const targetText = values[index];
    const intervalId = setInterval(() => {
      if (currentIndex < targetText.length) {
        currentText += targetText[currentIndex];
        setDisplayText(currentText);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [index, values]);

  return <span className={className}>{displayText}</span>;
};

DecryptText.propTypes = {};

export default DecryptText;
