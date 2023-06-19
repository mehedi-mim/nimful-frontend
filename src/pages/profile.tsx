import Wrapper from '@/components/common/Wrapper';
import React, { FC } from 'react';

const ProfilePage: FC = () => {
  return (
    <Wrapper hasLeftSidebar={false} hasRightWrapper={false}>
      <div className="profile">
        <section>
          <div className="section-header">
          </div>
          <div className="section-content">
            <img src="https://avatars.githubusercontent.com/mehedi-mim" alt="Profile" />
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Name</h2>
          </div>
          <div className="section-content">
            <p>Mehedi Hassan Mim</p>
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Username</h2>
          </div>
          <div className="section-content">
            <p>mehedi-mim</p>
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Bio</h2>
          </div>
          <div className="section-content">
            <p>Hello, my name is Mim and I work as a software engineer at Vivasoft Limited.</p>
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>Current nim-seed</h2>
          </div>
          <div className="seed">
            <p>22cf3262f3f54692ad1b96987463471c</p>
            <a href="#">generate new?</a>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

export default ProfilePage;
