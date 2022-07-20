// import Clarifai from "clarifai";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import Signin from "./Components/Signin/Signin";
import ImageLinkForm from "./Components/ImageLinkform/ImageLinkForm";
import Register from "./Components/Register/Register";
import FaceRecognition from "./Components/FaceREcognition/FaceRecognition";
import { Component } from "react";
import Navigator from "./Components/Navigator/Navigator";

// const app = new Clarifai.App({
//   apiKey: "0440a2cdf6ae4c38b4dd8a626b451ffe",
// });
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      IsSignedIn: false,
      route: "signin",
    };
  }
  oninputchange = (event) => {
    this.setState({ input: event.target.value });
  };
  onsubmitbutton = (event) => {
    console.log("click");

    // app.models
    //   .predict(
    //     "53e1df302c079b3db8a0a36033ed2d15",
    //     "https://samples.clarifai.com/face-det.jpg"
    //   )
    //   .then(
    //     function (response) {
    //       console.log(response);
    //     },
    //     function (err) {
    //       console.log(err);
    //     }
    //   );
  };
  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ IsSignedIn: false });
    } else if (route === "home") {
      this.setState({ IsSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div>
        <Navigator
          IsSignedIn={this.IsSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <ImageLinkForm
              oninputchange={this.oninputchange}
              onsubmitbutton={this.onsubmitbutton}
            />
            <FaceRecognition imageUrl={this.state.imageUrl} />
          </div>
        ) : this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}
export default App;
