import "./App.css";
import Logo from "./Components/Logo/Logo";
import Signin from "./Components/Signin/Signin";
import ImageLinkForm from "./Components/ImageLinkform/ImageLinkForm";
import Register from "./Components/Register/Register";
function App() {
  return (
    <div>
      <ImageLinkForm />
      <Logo />
      <Signin />
      <Register />
    </div>
  );
}

export default App;
