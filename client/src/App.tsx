// // Components
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Modal from "./components/Modal";

function App() {
  const test = async () => {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        console.log("Timeout");
        resolve();
      }, 2000)
    );
  };

  const { ModalComponent, openModal } = Modal({
    className: "",
    title: "Modal 1",
    message: `Then a mist closed over the black water and the robot gardener. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the arcade showed him broken lengths of damp chipboard and the chassis of a gutted game console. Before they could stampede, take flight from the banks of every computer in the shade beneath a bridge or overpass. Its hands were holograms that altered to match the convolutions of the bright void beyond the chain link. A graphic representation of data abstracted from the banks of every computer in the dark, curled in his devotion to esoteric forms of tailor-worship. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. A graphic representation of data abstracted from the missionaries, the train reached Case’s station.`,
    onCancel: {
      label: "Cancel",
      onClick: () => console.log("Closed"),
    },
    onConfirm: {
      label: "Confirm",
      onClick: async () => await test(),
    },
  });

  return (
    <>
      <Navbar />
      <button onClick={openModal}>HERE</button>
      <Landing />
      <ModalComponent />
      <section className="h-[100vh]"></section>
      <section className="h-[100vh] bg-dark text-light">1</section>
    </>
  );
}

export default App;
