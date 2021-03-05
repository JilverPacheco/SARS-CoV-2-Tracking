import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AnimatePresence>
        <Main />
      </AnimatePresence>
    </div>
  );
}

export default App;
