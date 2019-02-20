import React from "react";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import "./index.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: true
    };
  }

  changeSignState() {
    this.setState({
      isSignUp: !this.state.isSignUp
    });
  }

  render() {
    return (
      <main className="login-wrap">
        <article className="login-info">
          <section className="describe">
            <div className="photo" />
          </section>
          <section className="login-content">
            {this.state.isSignUp ? <SignUp /> : <SignIn />}
            <div className="toggle-ways">
              {this.state.isSignUp ? (
                <span>没有账号？
                  <a className="notice" onClick={this.toggleSign.bind(this)}>
                    注册
                  </a>
                </span>
              ) : (
                <span>
                  有账号了？
                  <a className="notice" onClick={this.toggleSign.bind(this)}>
                    请登录
                  </a>
                </span>
              )}
            </div>
          </section>
        </article>
      </main>
    );
  }
}

export default App;
