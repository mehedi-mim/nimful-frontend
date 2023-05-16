import Wrapper from '@/components/common/Wrapper';
import React, { FC, useEffect, useState } from 'react';
const Home1: FC = () => {
  const [data,setData]=useState<any>()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setData(json)
        console.log(json)}
      
      )
  },[])
  return (
    <>
    <Wrapper>
    <div className="home">
      <h1>Welcome to the Home Page<br/> Title: {data?.title}</h1>
      <p>This is the content of the Home page !<br/> id: {data?.id}</p>
    </div>
    </Wrapper>
    </>
    
  );
}

export default Home1;
