import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');

  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', 
      { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/account');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <div>    
      <section id="contact-us" className="contact-us section">
                    <div className="container">
                    <div className="contact-head">
                        <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="form-main">
                            <div className="title">
                                <h4>Login</h4>
                                <h3>to Your Account</h3>
                            </div>
                            <form className="form" method="post" action="mail/mail.php">
                                <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="form-group">
                                    <label>Username<span>*</span></label>
                                    <input type="text" {...username} autoComplete="new-password" />
                                    {/* <input name="name" type="text" placeholder /> */}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="form-group">
                                    <label>Password<span>*</span></label>
                                    <input type="password" {...password} autoComplete="new-password" />
                                    {/* <input name="subject" type="text" placeholder /> */}
                                    </div>
                                </div>
                               
                                <div className="col-12">
                                    <div className="form-group button">
                                    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                                    <button type="button" className="btn animate" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} >
                                    Log in</button>
                                    <br />

                                    </div>
                                </div>

                      
                                </div>
                            </form>
                            </div>
                        </div>
   
                        </div>
                    </div>
                    </div>
                </section>
    
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;