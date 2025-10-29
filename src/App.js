import Header from "./components/Header/Header"
import Intro from "./components/Intro/Intro"

function App() {
  return (
    <>
      <Header />
      <Intro />

      <div id="chars" style={{ height: "1000px", marginTop: "200px" }}>Букавы</div>
      <div id="about" style={{ height: "1000px" }}>О Нас</div>
      <div id="cases" style={{ height: "1000px" }}>Кейсы</div>
      <div id="feedback" style={{ height: "1000px" }}>Обратная связь</div>
      {/* <Chars /> */}
      {/* <AboutUs /> */}
      {/* <Separator /> */}
      {/* <Cases /> */}
      {/* <Feedback /> */}
    </>
  );
}

export default App;
