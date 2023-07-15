import React, { FC, useEffect, useState } from 'react';
import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import Wrapper from '@/components/common/Wrapper';


interface ProfileData {
  full_name: string;
  user_name: string;
  seed:string;
}

const ProfilePage: FC = () => {


  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const defaultProfileData: ProfileData = {
    full_name: 'N/A',
    user_name: 'N/A',
    seed:'N/A'
  };
  console.log(profileData+"Hi-----------")
  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
        window.location.href = '/login';
    }
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/self-profile`,{
      headers: {
        'access_token': `${access_token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setProfileData(data.json() || defaultProfileData);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
        setProfileData(defaultProfileData);
      });
  }, []);

  return (

    <CenterWrapper>
      <div className="profile">
        <section>
          <div className="section-header">
            <h2>Name</h2>
          </div>
          <div className="section-content">
            <p>{profileData?.full_name}</p>
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Username</h2>
          </div>
          <div className="section-content">
            <p>{profileData?.user_name}</p>
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Current nim-seed</h2>
          </div>
          <div className="seed">
            <p>{profileData?.seed}</p>
            <a href="#">generate new?</a>
          </div>
        </section>

      </div>
    </CenterWrapper>
  );
}

export default ProfilePage;
