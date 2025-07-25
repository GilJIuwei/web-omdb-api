import { MovieProvider } from "./api/context/MovieContext";
import Home from "./pages/Home";

function App() {
  return (
    <MovieProvider>
      <Home />
    </MovieProvider>
  );
}

export default App;
