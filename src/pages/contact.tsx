import Wrapper from '@/components/common/Wrapper';
import React, { FC } from 'react';

const ContactPage: FC = () => {
    return (
        <Wrapper hasLeftSidebar={true} hasRightWrapper={false}>
            <div className="contact-container">
                <div className="contact-form">
                    <div className="image-container">
                        <img src="images/contact-page/profile.png" alt="Profile Image" />
                        <div className="cloud">
                            <span className="question">Want to reach me?</span>
                        </div>
                    </div>
                    <input type="text" placeholder="Your full name" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message" rows={4} />
                    <button type="submit">Send</button>
                </div>
                <div className="contact-links">
                    <a href="https://www.facebook.com/mhm.cse">Facebook</a>
                    <a href="https://twitter.com/mHm_cse">Twitter</a>
                    <a href="mailto:mehedi.mim.bd@gmail.com">Gmail</a>
                    <a href="https://www.linkedin.com/in/mehedi-mim/">Linked in</a>

                </div>
            </div>
        </Wrapper>
    );
}
export default ContactPage;
