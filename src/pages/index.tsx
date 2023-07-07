import Wrapper from '@/components/common/Wrapper';
import React, { FC, useEffect, useState } from 'react';
const Home: FC = () => {
  const [data, setData] = useState<any>()
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => {
  //       setData(json)
  //       console.log(json)
  //     }

  //     )
  // }, [])
  return (
    <>
      <Wrapper hasLeftSidebar={true} hasRightWrapper={false}>
        <div className="home">
          <div className="centered-container">
            <img src="https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/235967934_362793882036496_2177000655078621018_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeESSHXqzomNx9VgDX52x8a0mpDe1XFyBFGakN7VcXIEUYZ_1BxqlwxTe8wKU5nh8mg_FzmdBuF1Z7S-EkChKBRD&_nc_ohc=gxs3YSYOKXwAX8ned45&_nc_ht=scontent.fdac11-2.fna&oh=00_AfCdZqn-zz4V3jBuSanUMTWN0H94zzkjcg62QAvBMFEuuA&oe=6494E5FB" alt="Profile" className="profile-image" />
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
