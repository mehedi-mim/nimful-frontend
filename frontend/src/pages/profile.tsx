import React, { FC, useEffect, useState } from 'react';
import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';

const ProfilePage: FC = () => {
  const [fullName, setFullName] = useState<string>('N/A');
  const [userName, setUserName] = useState<string>('N/A');
  const [seed, setSeed] = useState<string>('N/A');
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [copyText, setCopyText] = useState<string>('Click to Copy');

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('access_token');
    if (!storedAccessToken) {
      window.location.href = '/login';
    } else {
      setAccessToken(storedAccessToken);
      fetchProfileData(storedAccessToken);
    }
  }, []);

  const fetchProfileData = (token: string) => {
    if (process.env.NEXT_PUBLIC_BACKEND_BASE_URL) {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/self-profile`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          setFullName(data.full_name);
          setUserName(data.user_name);
          setSeed(data.seed);
        })
        .catch(error => {
          console.error('Error fetching profile data:', error);
        });
    }
  };

  const copySeedToClipboard = () => {
    navigator.clipboard.writeText(seed)
      .then(() => {
        console.log('Seed copied to clipboard:', seed);
        setCopyText('Seed Copied');
      })
      .catch(error => {
        console.error('Error copying seed to clipboard:', error);
      });
  };

  const generateNewSeed = () => {
    if (process.env.NEXT_PUBLIC_BACKEND_BASE_URL) {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/generate-new-seed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'access_token': accessToken!
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.seed) {
            setSeed(data.seed);
            fetchProfileData(accessToken!);
          }
        })
        .catch(error => {
          console.error('Error generating new seed:', error);
        });
    }
  };

  return (
    <CenterWrapper>
      <div className="profile">
        <div className="profile-header">Profile</div>
        <section>
          <div className="section-header">
            <h2>Name</h2>
          </div>
          <div className="section-content">
            <p>{fullName}</p>
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Username</h2>
          </div>
          <div className="section-content">
            <p>{userName}</p>
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Current nim-seed</h2>
          </div>
          <div className="seed">
            <p
              onClick={copySeedToClipboard}
              onMouseEnter={() => setCopyText('Click to Copy')}
              onMouseLeave={() => setCopyText('')}
            >
              {seed}
              <span className="copy-suggestion">{copyText}</span>
            </p>
            <a href="#" onClick={generateNewSeed}>generate new?</a>
          </div>
        </section>
      </div>
    </CenterWrapper>
  );
};

export default ProfilePage;
