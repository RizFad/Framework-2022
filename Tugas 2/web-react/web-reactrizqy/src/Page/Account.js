import React from 'react';
import { getUser, removeUserSession } from '../Utils/Common';

function Account(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/');
  }

  return (
    <div>
        {/* Start Contact */}
                <section id="contact-us" className="contact-us section">
                <div className="container">
                    <div className="contact-head">
                        <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="form-main">
                            <div className="title">
                                <h4>Welcome</h4>
                                <h3>{user.name}!</h3>
                            </div>
                            <form className="form" method="post" action="mail/mail.php">
                                <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="form-group">
                                    <label>Your Name<span>*</span></label>
                                    <input name="name" type="text" value= {user.name} readOnly/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="form-group">
                                    <label>Birthdate<span>*</span></label>
                                    <input name="subject" type="text" value= {user.username} readOnly />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="form-group">
                                    <label>Your Email<span>*</span></label>
                                    <input name="email" type="email" readOnly/>
                                    </div>	
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="form-group">
                                    <label>Your Phone<span>*</span></label>
                                    <input name="company_name" type="text" readOnly/>
                                    </div>	
                                </div>
                                <div className="col-12">
                                    <div className="form-group message">
                                    <label>Address<span>*</span></label>
                                    <textarea name="message" readOnly/>
                                    </div>
                                </div>
                                
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="single-head">
                                <div className="single-info">
                                    <div className="col-12">
                                        <div className="form-group button">
                                            <button type="submit" className="btn animate" onClick={handleLogout}>LogOut</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*/ End Contact */}
      </div>
  );
}

export default Account;
