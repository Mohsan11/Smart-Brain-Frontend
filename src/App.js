import "./App.css";
import Logo from "./Components/Logo/Logo";
import Signin from "./Components/Signin/Signin";
import ImageLinkForm from "./Components/ImageLinkform/ImageLinkForm";
import Register from "./Components/Register/Register";
import FaceRecognition from "./Components/FaceREcognition/FaceRecognition";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }
  oninputchange = (event) => {
    console.log(event.target.value);
  };
  onsubmitbutton = (event) => {
    console.log("Click");
  };

  render() {
    return (
      <div>
        <Logo />
        <ImageLinkForm
          oninputchange={this.oninputchange}
          onsubmitbutton={this.onsubmitbutton}
        />
        <FaceRecognition />
        <Signin />
        <Register />
      </div>
    );
  }
}
export default App;
