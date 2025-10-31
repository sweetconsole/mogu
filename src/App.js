import { useEffect } from "react";
import Header from "./components/widgets/Header/Header"
import Intro from "./components/widgets/Intro/Intro"
import Chars from "./components/widgets/Chars/Chars"
import AboutUs from "./components/widgets/AboutUs/AboutUs";
import Separator from "./components/widgets/Separator/Separator";
import Cases from "./components/widgets/Cases/Cases";
import Feedback from "./components/widgets/Feedback/Feedback";

const App = () => {
  const widthDesktop = 1440
  const heightDesktop = 900
  const widthMobile = 375
  const heightMobile = 986
  const notMobile = 1023

  useEffect(() => {
    const typeScreen = () => {
      const width = window.screen.width
      const height = window.screen.height

      if (width > notMobile) {
        if ((width / height) >= (widthDesktop / heightDesktop)) {
          document.getElementById("html").classList = "landscape-desktop"
        } else {
          document.getElementById("html").className = "portrait-desktop"
        }
      } else {
        if ((width / height) >= (widthMobile / heightMobile)) {
          document.getElementById("html").className = "landscape-mobile"
        } else {
          document.getElementById("html").className = "portrait-mobile"
        }
      }
    }

    window.addEventListener("resize", typeScreen)

    typeScreen()
  }, [])

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
