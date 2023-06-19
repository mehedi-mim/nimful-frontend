import Wrapper from '@/components/common/Wrapper';
import React, { FC } from 'react';

const ContactPage: FC = () => {
    return (
        <Wrapper hasLeftSidebar={true} hasRightWrapper={false}>
            <div className="contact-container">
                <div className="contact-form">
                    <img src="https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/336923457_221091087242211_1107605500335323964_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEm1uY3TouyFVXLQKSmq24Gw2GlIo4JY5DDYaUijgljkLO0cfA2KXdamqy4Fb-3OPNVP2v_H8uXYYuqLZ5MiGrr&_nc_ohc=BRRd8wCp__YAX82PfIv&_nc_ht=scontent.fdac11-1.fna&oh=00_AfBkTpDoZV3TcEb3EKf_bMvGBUENry4D2qLB8EmvLK9i_w&oe=649460F0" alt="Profile Image" />
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
