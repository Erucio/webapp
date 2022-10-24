import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [canSubmit, setCanSubmit] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if(!values.name)
            errors.name = "You must enter a name"

        if(!values.email)
            errors.email = "You must enter an e-mail address"
        else if (!regex_email.test(values.email))
            errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"

        if(!values.comment)
            errors.comment = "You must enter a comment"

        else if(values.comment.length < 10)
            errors.comment = "Your comment must be longer than 10 characters"
        
        if(Object.keys(errors).length === 0)
            setCanSubmit(true)
        else
            setCanSubmit(false)

        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }

    return (
                <section className="formMap">
                        <div className="map">
                            <div className="container">
                                <div className="icon">
                                    <NavLink to={"/"}><i className="fa-solid fa-home"></i></NavLink>
                                    <p> Contacts </p>
                                </div>
                                <iframe title="googleMap" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.82720559699123!2d-81.36286800134407!3d25.81411291488444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88da5d290b0f055d%3A0xf8436ec57d5ba1b9!2sThe%20Captain&#39;s%20Lodge!5e0!3m2!1ssv!2sse!4v1665474799933!5m2!1ssv!2sse'></iframe>
                            </div>
                        </div>
                        {canSubmit ?
                        (
                        <div className="submitText">
                            <h1>Thank you for your comment</h1>
                        </div>)
                        :
                        (
                            <div className="form">
                                <div className="container">
                                    <h3>Come in Contact with Us</h3>
                                    <form  onSubmit={handleSubmit} noValidate >
                                        <div className="input">
                                            <div className="mb-3 nameMail">
                                                <input id="name"  type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange}></input>
                                                <div className="errorMessage">{formErrors.name}</div>
                                            </div>
                                            <div className="mb-3 nameMail">
                                                <input id="email"  type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange}></input>
                                                <div className="errorMessage">{formErrors.email}</div>
                                            </div>
                                        </div>                
                                        <div className="mb-3 d-grid">
                                            <textarea style={{resize: 'none'}} id="comment"  type="area" placeholder="Comment" rows="4" value={contactForm.comment} onChange={handleChange}></textarea>
                                            <div className="errorMessage">{formErrors.comment}</div>

                                        </div>
                                        <div className="mb-3">
                                            <button type="submit" className="btn-theme">
                                                <span className="corner-topLeft"></span>
                                                <span className="corner-bottomRight"></span>
                                                Post Comment</button>
                                        </div>
                                    </form>                  
                                </div>
                            </div>
                        )}
                </section>

    )
}

export default ContactForm