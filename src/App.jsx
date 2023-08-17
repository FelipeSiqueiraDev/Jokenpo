import { GameScreen } from "./components/GameScreen";
import { GlobalStyles } from "./styles/global";
import { GlobalReset } from "./styles/reset";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <GlobalReset />
      <GameScreen/>
    </>
  );
};
