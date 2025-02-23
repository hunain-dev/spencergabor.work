import Header from "./Components/Header"
import Home from "./Components/pages/Home/Home"
import LocomotiveScroll from 'locomotive-scroll';
import Footer from "./Components/Footer";
const App = () => {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Header />
      <Home />
      <Footer />
      
      
    </div>
  )
}

export default App
