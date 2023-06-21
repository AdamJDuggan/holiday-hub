// // Components
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <section className="h-[100vh]">1</section>
      <section className="h-[100vh] bg-dark text-light">1</section>
    </>
  );
}

export default App;
