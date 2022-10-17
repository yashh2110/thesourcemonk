import "./App.css";
import "aos/dist/aos.css";
import Aos from "aos";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Routes from "./routes/Routes";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
