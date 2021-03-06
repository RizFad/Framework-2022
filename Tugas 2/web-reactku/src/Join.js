import React, { useContext, useState } from "react";
import { AuthContext } from "../src/index";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../src/firebase.config";

const app = initializeApp(firebaseConfig);

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) Auth.setLoggedIn(true);
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const googleJoin = () => {
    const provider = new app.auth.GoogleAuthProvider();
    app
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        Auth.setLoggedIn(true);
      });
  };


  return (
    <div>
      <h1>Join</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="email"
        />
        <input          
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          placeholder="password"
        />
        <hr />
        <button
          className="googleBtn"
          type="button"
          onClick={() => googleJoin()}
          >
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Join with Google
          </button>
          <button type="submit">Login</button>
        <span>{error}</span>
      </form>
    </div>
  );

};

export default Join;
