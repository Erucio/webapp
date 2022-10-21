import React from 'react'
import { NavLink } from 'react-router-dom'

function contacts() {
  return (
<section className="formMap">
        <div className="map">
            <div className="container">
                <div className="icon">
                    <NavLink to={"/"}><i className="fa-solid fa-home"></i></NavLink>
                    <p> Contacts </p>
                </div>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.82720559699123!2d-81.36286800134407!3d25.81411291488444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88da5d290b0f055d%3A0xf8436ec57d5ba1b9!2sThe%20Captain&#39;s%20Lodge!5e0!3m2!1ssv!2sse!4v1665474799933!5m2!1ssv!2sse'></iframe>
            </div>
        </div>
        <div className="form">
            <div className="container">
                <h3>Come in Contact with Us</h3>
                <form noValidate id="contactSubmit">
                    <div className="input">
                        <div className="mb-3 nameMail">
                            <label for="contactSubmit_name" value=""></label>
                            <input id="contactSubmit_name" onKeyUp="validate" type="text" autoComplete="given-name" placeholder="Your Name" required></input>
                            <div id="nameErrorMsg" className="errorMsg"></div>
                        </div>
                        <div className="mb-3 nameMail">
                            <label for="contactSubmit_email" value=""></label>
                            <input id="contactSubmit_email" onKeyUp="validate" type="email" autoComplete="email" placeholder="Your Mail" required></input>
                            <div id="emailErrorMsg" className="errorMsg"></div>
                        </div>
                    </div>                
                    <div className="mb-3 d-grid">
                        <textarea style={{resize: 'none'}} id="contactSubmit_comment" onKeyUp="validate" type="area" placeholder="Comment" rows="4" required></textarea>
                        <div id="textErrorMsg" className="errorMsg"></div>

                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-theme">
                            <span className="corner-topLeft"></span>
                            <span className="corner-bottomRight"></span>
                            Post Comment</button>
                    </div>
                </form> 
            </div>
        </div>
</section>

  )
}

export default contacts