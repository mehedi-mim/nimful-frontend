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
                        <p>
                            At nimful.com, which you can visit at https://nimful.com, safeguarding the privacy of our users stands as a key focal point. This official Privacy Policy outline delineates the sorts of data assembled and logged by nimful.com,
                            coupled with its subsequent utilization.
                            Should you possess further inquiries or necessitate more comprehensive details regarding our Privacy Policy,
                            feel free to reach out to us via email at noreply.nimful@gmail.com.
                        </p>
                    </div>
                    <div className='privacy-content-header'>
                        <h2>Data Collections</h2>
                    </div>
                    <div className='privacy-content-para'>
                        <p> We adhere to a common practice involving the utilization of  data collection at nimful.com through our chrome extension Nimful.
                            These data  are collected when visitors access websites and that extension is connected. This is a routine procedure followed by all hosting
                            companies and is integral to hosting services' analytical processes. The data amassed through these visits encompass internet protocol (IP) addresses,
                            Internet Service Provider (ISP), visited domains ,emails through logged in , date and time stamps, entry and exit pages, and conceivably the count of clicks.
                            Importantly, none of this data is interconnected with any business purposes.
                            The rationale behind collecting this data is to dissect trends, manage the website, monitor users' navigation across the site, and gather demographic insights.
                            This Privacy Policy pertains exclusively to our digital undertakings and remains effective solely for individuals visiting our website,
                             encompassing the data they choose to share or gather on nimful.com. It's important to note that this policy does not extend to any
                              information collected through offline means or via avenues other than this particular website.
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
                            process and have the option to grant or deny consent.By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
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
                        <p>Safeguarding children while they navigate the online realm is another aspect of our core commitment.
                            We advocate for parents and guardians to actively oversee, engage with, and/or supervise the digital pursuits of youngsters.
                            At nimful.com, we are resolute in not intentionally gathering any Personal Identifiable Information
                             from individuals under the age of 13. If you believe that your child has shared such information on our platform, 
                             we strongly urge you to promptly get in touch with us. We assure you that we will diligently work to swiftly eliminate such data from our records..
                        </p>
                    </div>

                    <div className='privacy-content-header'>
                        <h2>Contact Us</h2>
                    </div>
                    <div className='privacy-content-para'>
                        <p>If you have any questions, concerns, or feedback regarding our Privacy Policy or data practices, please contact us at noreply.nimful@gmail.com.
                        </p>
                    </div>


                </section>
                {/* Rest of the sections and content */}

            </div>
        </CenterWrapper>
    );
}

export default WebCloudTutorial;
