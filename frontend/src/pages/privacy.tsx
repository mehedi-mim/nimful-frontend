import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import Wrapper from '@/components/common/Wrapper';
import React, { FC, useState } from 'react';

const WebCloudTutorial: FC = () => {
    const [expandedPoints, setExpandedPoints] = useState<number[]>([]);

    const togglePoint = (index: number) => {
        if (expandedPoints.includes(index)) {
            setExpandedPoints(expandedPoints.filter((item) => item !== index));
        } else {
            setExpandedPoints([...expandedPoints, index]);
        }
    };

    return (
        <CenterWrapper>
            <div className="privacy-container">
                <section className='privacy-name'>
                    <h1>PRIVACY POLICY</h1>
                </section>
                <section className='privacy-content'>
                    <div className='privacy-content-header'>
                        <h2>Privacy Policy for Nimful.</h2>
                    </div>
                    <div className='privacy-content-para'>
                        <p>Welcome to Nimful! This Privacy Policy outlines how Nimful ("we," "us," or "our") collects, utilizes, 
                            and safeguards data when you use our browser extension, Nimful ("Extension"). Our commitment to your privacy drives us to provide transparent information about our data practices.
                        </p>
                    </div>
                    <div className='privacy-content-header'>
                        <h2>Data Collection and Usage</h2>
                    </div>
                    <div className='privacy-content-para'>
                        <p>We have developed the Extension to track users' website visit activity with explicit permissions obtained from users. The Extension is designed with no harmful intent and does not serve any business-related purpose.
                             Our utmost priority is user privacy and complete transparency.
                        </p>
                    </div>

                    <div className='privacy-content-header'>
                        <h2>Data Security</h2>
                    </div>
                    <div className='privacy-content-para'>
                        <p>We take comprehensive measures to safeguard user data. All collected data is securely protected 
                            using industry-standard encryption and security protocols.
                        </p>
                    </div>

                    <div className='privacy-content-header'>
                        <h2>Transparency</h2>
                    </div>
                    <div className='privacy-content-para'>
                        <p>We are committed to providing transparent information about our data practices. Users are always informed about the data collection 
                            process and have the option to grant or deny consent.
                        </p>
                    </div>

                    <div className='privacy-content-header'>
                        <h2>Third Parties</h2>
                    </div>
                    <div className='privacy-content-para'>
                        <p>We do not share collected data with third parties. The data collected is solely used to improve the
                             Extension's functionality and enhance the browsing experience.
                        </p>
                    </div>

                    <div className='privacy-content-header'>
                        <h2>Children's Privacy</h2>
                    </div>
                    <div className='privacy-content-para'>
                        <p>Our Extension is not intended for children under the age of 12. We do not knowingly collect personal information from children under this age. If you believe your child has provided personal
                             information, please contact us to have it removed.
                        </p>
                    </div>

                    <div className='privacy-content-header'>
                        <h2>Contact Us</h2>
                    </div>
                    <div className='privacy-content-para'>
                        <p>If you have any questions, concerns, or feedback regarding our Privacy Policy or data practices, please contact us at nimful.noreply@gmail.com.
                        </p>
                    </div>


                </section>
                {/* Rest of the sections and content */}

            </div>
        </CenterWrapper>
    );
}

export default WebCloudTutorial;
