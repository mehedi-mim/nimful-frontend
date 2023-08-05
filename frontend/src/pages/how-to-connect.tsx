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
                <section className='tutorial-name'>
                    <h1>Initial setup for connecting webcloud.</h1>
                </section>
                <section className='tutorial-content'>
                    <div className='tutorial-content-header'>
                        <h2>Extentsion Installation.</h2>
                    </div>
                    <div className='tutorial-content-list'>
                            <li>Currently this feature only for chrome users.</li>
                            <li>Go to chrome web store and download extension <a href='https://chrome.google.com/webstore/detail/nimful/ndphdoaamlnblllclljiphalnaigbofl' className='extension-link'>Nimful</a>.</li>
                            <li>After installation when you open the extension, it will ask you for a seed. You can click generate seed and it will redirect you to nimful website.</li>
                        </div>
                    <div className='tutorial-content-header'>
                        <h2>Signup and Connect with Extension.</h2>
                    </div>
                    <div className='tutorial-content-list'>
                            <li>Signup and login to the system.</li> 
                            <li>Go to <a href='/profile' className='extension-link'>profile</a> section. You will see your current seed.You can always generate a new seed. Click generate new for having a new seed.</li>
                            <li>Copy your seed, paste it to nimful extension and hit submit.</li>
                            <li>Ta-daaaaaa! now you can open any tab, visit websites, it will track your visited domains. See what's <a href='/webcloud' className='extension-link'>webcloud</a> for you.</li>
                        </div>
                </section>
                {/* Rest of the sections and content */}

            </div>
        </CenterWrapper>
    );
}

export default WebCloudTutorial;
