
//React...
import React, {useState} from 'react';
import { useInView } from 'react-intersection-observer';

// Import Email.js library
import emailjs from 'emailjs-com'; 

//React icons...
import { RiErrorWarningFill } from "react-icons/ri";

//Styles...
import styles from '../styles/Contact.module.scss'

interface EmailTemplate {
    from_email: string,
    from_name: string,
    message: string
}

const ContactComponent = () => {

    const [formData, setFormData] = useState<EmailTemplate>({
        from_email: '',
        from_name: '',
        message: ''
    });
    const [emailIsInvalid, setEmailIsInvalid] = useState<boolean>(false);

    const { ref, inView } = useInView({
      threshold: 0, // Adjust this value as needed
      triggerOnce: true, // Trigger only once
    });
  
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ 
            ...formData, 
            [name]: value 
        });
    };
  
    //Regular expression for email from user...
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const [message, setMessage] = useState('Submit');
  
    const handleSubmitCheck = async (e: any) => {
      e.preventDefault();
      if(formData.from_email && formData.from_name && formData.message) {
  
        if(!emailPattern.test(formData.from_email)) {
          setMessage('Loading')
          setEmailIsInvalid(true);
          return;
        }
        sendEmail(e);
        setEmailIsInvalid(false);
        setFormData({
          from_email: '',
          from_name: '',
            message: ''
        });
        setMessage('Submitted');
        setTimeout(() => {
          setMessage('Submit')
        }, 5000)
      }
    };
  
    const sendEmail = async (e: any) => {
        try {
          await emailjs.sendForm(
            'service_50xi2u4', 
            'template_m1oqvw5', 
            e.target, 
            "V19aGRH_RgVYiOgI_"
          );
        } 
        catch (error) {
          console.error('Error sending email:', error);
        }
    };
  
    


    return (
        <div id={styles.contact_wrap} ref={ref} className={`${inView ? styles.active : ""}`}>
            <div>
                <h1>Lets connect</h1>
                <p>Shoot me an email if you found my profile interesting enough.</p>
            </div>
            <form 
                onSubmit={handleSubmitCheck} 
                id={styles.form_wrap}
            >
                <div>
                    <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    value={formData.from_name}
                    onChange={handleChange}
                    maxLength={25}
                    required
                    />
                    <div id={styles.email_input_wrapper}>
                    <input
                        type="email"
                        name="from_email"
                        placeholder="Email"
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                    />  
                    {emailIsInvalid &&
                        <span>
                        Invalid
                        <RiErrorWarningFill/>
                        </span>
                    }

                    </div>
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit">{message}</button>
            </form>
      </div>
    );
};

export default ContactComponent;