// import Clarifai from "clarifai";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import Signin from "./Components/Signin/Signin";
import ImageLinkForm from "./Components/ImageLinkform/ImageLinkForm";
import Register from "./Components/Register/Register";
import FaceRecognition from "./Components/FaceREcognition/FaceRecognition";
import { Component } from "react";
import Navigator from "./Components/Navigator/Navigator";
import Rank from "./Components/Rank/Rank";

// const app = new Clarifai.App({
//   apiKey: "0440a2cdf6ae4c38b4dd8a626b451ffe",
// });
const initialstate = {
  input: "",
  imageUrl: "",
  IsSignedIn: false,
  route: "signin",
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};
class App extends Component {
  constructor() {
    super();
    this.state = initialstate;
  }
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };
  // componentDidMount() {
  //   fetch("http://localhost:3001")
  //     .then((response) => response.json())
  //     //.then((data) => console.log(data));
  //     //similar to this bcz it return data anyway
  //     .then(console.log);
  // }
  oninputchange = (event) => {
    this.setState({ input: event.target.value });
  };
  onsubmitbutton = (event) => {
    this.setState({ imageUrl: this.state.input });
    fetch("http://localhost:3001/image", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id,
      }),
    })
      .then((response) => response.json())
      .then((count) => {
        this.setState(Object.assign(this.state.user, { entries: count }));
      })
      .catch(console.log);

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
      this.setState(initialstate);
    } else if (route === "home") {
      this.setState({ IsSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div>
        <Navigator
          IsSignedIn={this.state.IsSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              oninputchange={this.oninputchange}
              onsubmitbutton={this.onsubmitbutton}
            />
            <FaceRecognition imageUrl={this.state.imageUrl} />
          </div>
        ) : this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}
export default App;
