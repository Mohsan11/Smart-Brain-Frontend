import React from "react";
const Register = () => {
  return (
    <div>
      <article className="br3 shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign Un</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" email="email-address">
                First Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address3"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" email="email-address">
                Last Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address2"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" email="email-address">
                Email
              </label>
              <input
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
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password1"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3"></div>
        </main>
      </article>
    </div>
  );
};
export default Register;
