import { useState } from "react";
import logo from "../../assets/logo.png";

import { StyledGameScreen } from "./style";

import { GiPaper, GiRock, GiScissors } from "react-icons/gi";

export const GameScreen = () => {
  const choices = ["Pedra", "Papel", "Tesoura"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  function determineWinner(player, computer) {
    if (player === computer) return "Empate";
    if (
      (player === "Pedra" && computer === "Tesoura") ||
      (player === "Papel" && computer === "Pedra") ||
      (player === "Tesoura" && computer === "Papel")
    ) {
      return "Você venceu!";
    }
    return "Você perdeu!";
  }

  function makeComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function handlePlayerChoice(choice) {
    setPlayerChoice(choice);
    const computerPlay = makeComputerChoice();
    setComputerChoice(computerPlay);
    setResult(determineWinner(choice, computerPlay));
  }
  return (
    <StyledGameScreen>
      <img
        src={logo}
        alt="Logo do site escrito Jokenpo com fontes alternativas"
      />

      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            {choice === "Pedra" ? (
              <GiRock size={35} color="#F8F8F8" />
            ) : choice === "Papel" ? (
              <GiPaper size={35} color="#F8F8F8" />
            ) : (
              <GiScissors size={35} color="#F8F8F8" />
            )}
          </button>
        ))}
      </div>
      <div>
        {playerChoice && computerChoice && (
          <>
            <p>Você escolheu {playerChoice}.</p>
            <p>Computador escolheu {computerChoice}.</p>
            <h3>Resultado: {result}</h3>
          </>
        )}
      </div>
    </StyledGameScreen>
  );
};
