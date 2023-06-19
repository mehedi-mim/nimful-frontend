import Wrapper from '@/components/common/Wrapper';
import React, { FC, useState } from 'react';

const ProfilePage: FC = () => {
  const [editing, setEditing] = useState(false); // State to track editing mode
  const [firstName, setFirstName] = useState('Mehedi ');
  const [lastName, setLastName] = useState('Mim');
  const [about, setAbout] = useState("I am bla bla...............................");
  const [username, setUsername] = useState('torxebec');
  const [web_seed, setWebSeed] = useState('23423twet242323rwet232323');

  // Function to handle edit mode toggle
  const toggleEdit = () => {
    setEditing(!editing);
  };

  // Function to handle input change
  const handleInputChange = (event:any, setter:any) => {
    setter(event.target.value);
  };

  return (
    <Wrapper hasLeftSidebar={true} hasRightWrapper={false}>
      <div className="profile">
      <section>
          <div className="section-content">
            <img src="https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/336923457_221091087242211_1107605500335323964_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEm1uY3TouyFVXLQKSmq24Gw2GlIo4JY5DDYaUijgljkLO0cfA2KXdamqy4Fb-3OPNVP2v_H8uXYYuqLZ5MiGrr&_nc_ohc=BRRd8wCp__YAX82PfIv&_nc_ht=scontent.fdac11-1.fna&oh=00_AfBkTpDoZV3TcEb3EKf_bMvGBUENry4D2qLB8EmvLK9i_w&oe=649460F0" alt="Profile" />
          </div>
        </section>

        <section className='seed-section'>
          <div className="section-header">
            <h2>First Name</h2>
            <button className="edit-button" onClick={toggleEdit}>
              edit
            </button>
          </div>
          <div className="section-content">
            {editing ? (
              <input
                type="text"
                value={firstName}
                onChange={(event) => handleInputChange(event, setFirstName)}
              />
            ) : (
              <p>{firstName}</p>
            )}
          </div>
        </section>

        <section className='seed-section'>
          <div className="section-header">
            <h2>Last Name</h2>
            <button className="edit-button" onClick={toggleEdit}>
              edit
            </button>
          </div>
          <div className="section-content">
            {editing ? (
              <input
                type="text"
                value={lastName}
                onChange={(event) => handleInputChange(event, setLastName)}
              />
            ) : (
              <p>{lastName}</p>
            )}
          </div>
        </section>

        <section className='seed-section'>
          <div className="section-header">
            <h2>About</h2>
            <button className="edit-button" onClick={toggleEdit}>
              edit
            </button>
          </div>
          <div className="section-content">
            {editing ? (
              <input
                type="number"
                value={about}
                onChange={(event) => handleInputChange(event, setAbout)}
              />
            ) : (
              <p>{about}</p>
            )}
          </div>
        </section>

        <section className='seed-section'>
          <div className="section-header">
            <h2>Username </h2>
            <button className="edit-button" onClick={toggleEdit}>
              edit
            </button>
          </div>
          <div className="section-content">
            {editing ? (
              <input
                type="text"
                value={username}
                onChange={(event) => handleInputChange(event, setUsername)}
              />
            ) : (
              <p>{username}</p>
            )}
          </div>
        </section>

        <section className='seed-section'>
          <div className="section-header">
            <h2>Your current seed. </h2>
            <button className="edit-button" onClick={toggleEdit}>
              new
            </button>
          </div>
          <div className="section-content">
            {editing ? (
              <input
                type="text"
                value={web_seed}
                onChange={(event) => handleInputChange(event, setWebSeed)}
              />
            ) : (
              <p>{username}</p>
            )}
          </div>
        </section>
    </div>
    </Wrapper>
      );
    }
    
export default ProfilePage;