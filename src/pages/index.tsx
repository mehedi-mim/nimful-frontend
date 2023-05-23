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
      <Wrapper hasLeftSidebar={true} hasRightWrapper={true}>
        <div className="home">
          <div className="centered-container">
            <img src="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/229479735_362793798703171_1492424794974034692_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG--978F3u2a5cq_O1JyuBsFHxdEIxK9OkUfF0QjEr06Y6r7JCTRCXWh67ohEyXWTa9xg0mPlZgXVWPXMmzVo6O&_nc_ohc=cqpTPiXsMb8AX9x_grB&_nc_ht=scontent.fdac138-2.fna&oh=00_AfCYoXRnawLB89DNSHZ6PbI7bpGRFAybzD6A3bI8KYBH2A&oe=646E4B1C" alt="Profile" className="profile-image" />
          </div>
          <h1>Welcome to nimful...! 🖤 </h1>
          <h1 >Want to see an exciting feature ? <a className='go' href='/webcloud'>click</a></h1>
          {/* <h1>Welcome to the Home Page<br/> Title: {data?.title}</h1> */}
          {/* <p>This is the content of the Home page !<br/> id: {data?.id}</p> */}
        </div>
      </Wrapper>
    </>

  );
}

export default Home;
