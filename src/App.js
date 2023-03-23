import { Provider } from "react-redux";

import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import ContentPage from "./Components/Starter/ContentPage.js";
import store from "./redux/store.js";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <ContentPage />
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
