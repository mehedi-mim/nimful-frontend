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
            <div className="webcloud-tutorial-container">
                <div className="section">
                    <h1>Initial setup for connecting webcloud.</h1>
                </div>

                <div className="section">
                    <ul>
                    <li className="clickable" onClick={() => togglePoint(2)}>Objective</li>
                        {expandedPoints.includes(2) && (
                            <div className='Chield-one'>
                                <p>[Text explaining how to install the WebCloud extension.]</p>
                                <div className="code-example">
                                    <pre>
                                        <code>
                                            {/* Include the code snippet demonstrating how to install the extension */}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        )}
                        <li className="clickable" onClick={() => togglePoint(2)}>Install extension</li>
                        {expandedPoints.includes(2) && (
                            <div className='Chield-one'>
                                <p>[Text explaining how to install the WebCloud extension.]</p>
                                <div className="code-example">
                                    <pre>
                                        <code>
                                            {/* Include the code snippet demonstrating how to install the extension */}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        )}
                        <li className="clickable" onClick={() => togglePoint(3)}>Signup and Connect with Nimful</li>
                        {expandedPoints.includes(3) && (
                            <div className='Chield-one'>
                                <p>[Text explaining how to sign up and connect with Nimful.]</p>
                                <div className="code-example">
                                    <pre>
                                        <code>
                                            {/* Include the code snippet demonstrating signing up and connecting with Nimful */}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>

                {/* Rest of the sections and content */}

            </div>
        </CenterWrapper>
    );
}

export default WebCloudTutorial;
