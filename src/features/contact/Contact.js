import { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [send, setSend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_jkong',
        'template_hnqs90l',
        formRef.current,
        '3vrRA5Q2zD4ADJAsd'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact-container'>
      <div className='contact' id='contact'>
        <div className='c-wrapper flex'>
          <div className='c-title-container'>
            <h1 className='c-title'>connect with me</h1>
          </div>
        </div>
        <div className='c-form flex'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='user_name' />
            <input type='text' placeholder='Subject' name='user_subject' />
            <input type='text' placeholder='Email' name='user-email' />
            <textarea rows='5' placeholder='Message' name='message' />
            <button className='form-submit uppercase'>Submit</button>
            {send && <span className='sendComment'>Thank you...</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
