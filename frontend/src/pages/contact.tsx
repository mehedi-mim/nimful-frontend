import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import Wrapper from '@/components/common/Wrapper';
import React, { FC, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage: FC = () => {
  const [sender_name, setFullName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSend = async () => {
    try {
      if (process.env.NEXT_PUBLIC_BACKEND_BASE_URL) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/contact-me`, {
          method: 'POST',
          // Add necessary headers and body for the API request
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender_name,
            subject,
            message,
          }),
        });

        if (response.ok) {
          console.log(response)
          const data = await response.json()
          toast.success(data.message);
          setFullName('')
          setSubject('')
          setMessage('')
        } else {
          const errorData = await response.json();
          toast.error(errorData.detail);
        }
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CenterWrapper>
      <div className="contact-container">
        <ToastContainer />
        <div className="contact-form">
          <div className="image-container">
            <img src="images/contact-page/con.jpg" alt="Profile Image" />
            <div className="cloud">
              <span className="question">Want to reach me?</span>
            </div>
          </div>
          <input
            type="email"
            placeholder="Your email"
            value={sender_name}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" onClick={handleSend}>
            Send
          </button>
        </div>
        <div className="contact-links">
          <a href="https://www.facebook.com/mhm.cse">Facebook</a>
          <a href="https://twitter.com/mHm_cse">Twitter</a>
          <a href="mailto:mehedi.mim.bd@gmail.com">Gmail</a>
          <a href="https://www.linkedin.com/in/mehedi-mim/">Linkedin</a>
        </div>
      </div>
    </CenterWrapper>
  );
};

export default ContactPage;
