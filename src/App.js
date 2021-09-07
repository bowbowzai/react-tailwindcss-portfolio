import { useEffect, useState } from "react";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Project from "./components/projects/Project";
import Loading from './components/loading/Loading'
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
  }, [])

  return isLoading ? < Loading type='bars' color='crimson' /> : (
    <div className='App scroll-smooth h-screen w-full relative no-scroll-bar scroll-y-mandatory overflow-y-scroll'>
      <Header />
      <About />
      <Project />
    </div>
  );
}

export default App;
