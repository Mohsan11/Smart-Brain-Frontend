import React from "react";
class Register extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      name: "",
      password: "",
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onsumbitregister = () => {
    fetch("http://localhost:3001/register", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };
  render() {
    return (
      <div>
        <article className="br3 shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
          <main className="pa4 black-80">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0 underline pointer">
                Register
              </legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" email="email-address">
                  Name
                </label>
                <input
                  onChange={this.onNameChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address3"
                />
              </div>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" email="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address1"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" email="password">
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password1"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onsumbitregister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3"></div>
          </main>
        </article>
      </div>
    );
  }
}
export default Register;
