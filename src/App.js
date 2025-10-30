import Header from "./components/widgets/Header/Header"
import Intro from "./components/widgets/Intro/Intro"
import Chars from "./components/widgets/Chars/Chars"
import AboutUs from "./components/widgets/AboutUs/AboutUs";
import Separator from "./components/widgets/Separator/Separator";
import Cases from "./components/widgets/Cases/Cases";
import Feedback from "./components/widgets/Feedback/Feedback";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Chars />
      <AboutUs />
      <Separator />
      <Cases />
      <Feedback />
    </>
  );
}

export default App;
