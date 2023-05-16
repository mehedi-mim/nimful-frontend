import Wrapper from '@/components/common/Wrapper';
import Sidebar from '@/components/SideBar/sidebar-comp';
import React, { FC, useEffect, useState } from 'react';
const Home: FC = () => {
  const [data, setData] = useState<any>()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setData(json)
        console.log(json)
      }

      )
  }, [])
  return (
    <>
      <Wrapper>
        <div className="home">
          <div className="centered-container">
            <img src="https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-6/217460943_344930350489516_8988950508133420915_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHIxB7_bphY4SGK3sO54mxF-LOs0POT6xv4s6zQ85PrG0jY9zP0ohdi6G107wLvw6c7v9CQaChCx8vNucnil1Ah&_nc_ohc=1JTdJHmr2pgAX9jubOj&_nc_zt=23&_nc_ht=scontent.fdac2-2.fna&oh=00_AfD8gLZMr4DqPHSxf8I_sSjnr7zl1eLcL6i_-Li_alcMtQ&oe=6467DC2E" alt="Profile" className="profile-image" />
          </div>
          <h1>Welcome to nimful...! 🖤</h1>
          {/* <h1>Welcome to the Home Page<br/> Title: {data?.title}</h1> */}
          {/* <p>This is the content of the Home page !<br/> id: {data?.id}</p> */}
        </div>
      </Wrapper>
    </>

  );
}

export default Home;
