import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Promo from "./components/promo/promo";
import "./i18n";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Promo />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
