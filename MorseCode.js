import React, { useState } from "react";
// Importing Button and Input components using relative paths
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

// Morse Code mapping
const morseCodeMap = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
};

// Function to get a random letter from the morseCodeMap keys
const getRandomLetter = () => {
  const letters = Object.keys(morseCodeMap);
  return letters[Math.floor(Math.random() * letters.length)];
};

export default function MorseCodeGame() {
  const [letter, setLetter] = useState(getRandomLetter()); // Current letter to guess
  const [input, setInput] = useState(""); // Morse code input
  const [message, setMessage] = useState(""); // Feedback message

  const checkAnswer = () => {
    // Check if input matches the Morse code of the letter
    if (input.trim() === morseCodeMap[letter]) {
      setMessage("Correct! Here's the next letter.");
      setLetter(getRandomLetter()); // Get new random letter
      setInput(""); // Clear input
    } else {
      setMessage("Incorrect, try again.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold">Morse Code Trainer</h1>
      <p className="text-lg mt-4">Translate this letter into Morse code:</p>
      <div className="text-4xl font-bold mt-2">{letter}</div>
      <Input
        className="mt-4 p-2 border rounded"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input state
        placeholder="Enter Morse Code (e.g., .- for A)"
      />
      <Button className="mt-2 p-2 bg-blue-500 text-white rounded" onClick={checkAnswer}>
        Submit
      </Button>
      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
}
