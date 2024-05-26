import { Footer, Header } from "./components";

import Dictionary from "./pages/Dictionary";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div>
        <Header />
        <Dictionary />
      </div>
      <Footer />
    </div>
  );
}

export default App;
