//React...
import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import Email.js library

//React interasection observer...
import { useInView } from 'react-intersection-observer';

//React icons...
import { RiErrorWarningFill } from "react-icons/ri";

// styles...
import styles from "../styles/Contact.module.scss";


interface EmailTemplate {
  from_email: string,
  from_name: string,
  message: string
}

const ContactForm = () => {

    const [formData, setFormData] = useState<EmailTemplate>({
      from_email: '',
      from_name: '',
      message: ''
    });
    const [emailIsInvalid, setEmailIsInvalid] = useState<boolean>(false);

    const handleChange = (e: any) => {
      const { name, value } = e.target;
      setFormData({ 
          ...formData, 
          [name]: value 
      });
    };

    //Regular expression for email from user...
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSubmitCheck = async (e: any) => {
      e.preventDefault();
      if(formData.from_email && formData.from_name && formData.message) {

        if(!emailPattern.test(formData.from_email)) {
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
        console.log('Email sent successfully');
      } 
      catch (error) {
        console.error('Error sending email:', error);
      }
    };

    const { ref, inView } = useInView({
      threshold: 0, // Adjust this value as needed
      triggerOnce: true, // Trigger only once
    });

  return (
    <section id={styles.contactForm_section} className='main-font-family'>

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
            <button type="submit">Submit</button>
        </form>
      </div>

      
    </section>
  );
};

export default ContactForm;
