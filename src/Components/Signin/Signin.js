import React from "react";
const Signin = () => {
  return (
    <div>
      <article className="br3 shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main class="pa4 black-80 ">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Sign In</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="email-address">
                Email
              </label>
              <input
                class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" for="password">
                Password
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div class="">
            <input
              class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
            <p className="f4 link dim black pointer underline db">Register</p>
          </div>
          <div class="lh-copy mt3"></div>
        </main>
      </article>
    </div>
  );
};
export default Signin;
