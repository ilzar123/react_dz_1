import './App.css';
import Header from "./components/header/Header";
import MainPage from "./components/main_page/MainPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header name='Header Title'/>
        <MainPage name='text'/>
        <Footer name='Footer'/>
    </div>
  );
}

export default App;
