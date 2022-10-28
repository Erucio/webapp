import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [canSubmit, setCanSubmit] = useState(false)

    const validateName = (value) => {
        
        const regex_name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

            if(!value.name)
            return"You must enter a name"  

            else if(value.name.length < 2)
            return"Your name should contain at least 2 characters"      

            else if(!regex_name.test(value.name))
            return "Your name should not contain any special characters"
      
         return null;   
    }

    const validateEmail = (value) => {
               
        const regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        
        if(!value.email)
         return "You must enter an email"
     
        else if (!regex_email.test(value.email))
         return "You must enter a valid e-mail address (eg. name@domain.com)"
        
        return null;
    }

    const validateComment = (value) => {
         
        if(!value.comment)
        return "You must enter a comment"

        else if(value.comment.length < 10)
        return "Your comment must be at least 10 characters long"

        return null;
            
    }
    
    const handleValidationData =(data) => {
        const  errors={}

        errors.name = validateName(data)
        errors.email = validateEmail(data)
        errors.comment = validateComment(data)
   
        if(errors.name === null && errors.email === null && errors.comment === null) {

            console.log('can submit')

            setCanSubmit(true)

       

        } else {

            console.log('can not submit')

            setCanSubmit(false)      

        } 

               }

    let inputName = 'validSuccessName'
        if(formErrors.name)
        inputName = 'validFailName'

    let inputEmail = 'validSuccessEmail'
        if(formErrors.email)
            inputEmail ='validFailEmail'

    let inputComment = 'validSuccessComment'
            if(formErrors.comment)
                inputComment ='validFailComment'
    

    let submitButton = 'disabled'
            if(canSubmit=== true)
            submitButton = 'enabled'
        
    const handleChange = (e) => {
        e.preventDefault()
        const {id, value} = e.target
            setContactForm({...contactForm, [id]: value})
    }

    const handleKeyUpName = () => {
        setFormErrors({...formErrors, name: validateName(contactForm)})
    }

    const handleKeyUpEmail = () => {
        setFormErrors({...formErrors, email: validateEmail(contactForm)})
    }

    const handleKeyUpComment = () => {
        setFormErrors({...formErrors, comment: validateComment(contactForm)})
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        handleValidationData(contactForm)  
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
                            <div className="form">
                                <div className="container">
                                    {canSubmit ? (
                                                                 
                                    <h1>Thank you for your comment</h1>                                  
                                    )
                                    :
                                    (<>
                                    <h3>Come in Contact with Us</h3>
                                    <form  onSubmit={handleSubmit} noValidate >
                                        <div className="input">
                                            <div className="mb-3 nameMail">
                                                <input 
                                                    className={inputName}
                                                    id="name"  
                                                    type="text" 
                                                    placeholder="Your Name" 
                                                    value={contactForm.name} 
                                                    onChange={handleChange}
                                                    onKeyUp={handleKeyUpName}
                                                     />
                                                <div className="errorMessage">{formErrors.name}</div>
                                            </div>
                                            <div className="mb-3 nameMail">
                                                <input 
                                                    className={inputEmail}
                                                    id="email"  
                                                    type="email" 
                                                    placeholder="Your Mail" 
                                                    value={contactForm.email} 
                                                    onChange={handleChange}
                                                    onKeyUp={handleKeyUpEmail}/>
                                                    
                                                <div className="errorMessage">{formErrors.email}</div>
                                            </div>
                                        </div>                
                                        <div className="mb-3 d-grid">
                                            <textarea 
                                                className={inputComment}
                                                style={{resize: 'none'}} 
                                                id="comment"  type="area" 
                                                placeholder="Comment" 
                                                rows="4" 
                                                value={contactForm.comment} 
                                                onChange={handleChange}
                                                onKeyUp={handleKeyUpComment}
                                                />
                                            <div className="errorMessage">{formErrors.comment}</div>

                                        </div>
                                        <div className={submitButton}>
                                            <div className="mb-3">
                                                <button type="submit" className="btn-theme">
                                                    <span className="corner-topLeft"></span>
                                                    <span className="corner-bottomRight"></span>
                                                    Post Comment</button>
                                            </div>
                                        </div>
                                    </form>
                                    </>)}                  
                                </div>
                            </div>
                </section>

    )
}

export default ContactForm