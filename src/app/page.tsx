"use client";
import React, { useState, useEffect } from 'react';

import Tag from './tag/page'
import Home from './home/page'

const Page = () => {
  const [componentToRender, setComponentToRender] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    setComponentToRender("Home");
  }, []);

  const changeComponent = (component: string) => setComponentToRender(component);

  return (
    <>
      {componentToRender === 'Tag' && <Tag changeComponent={changeComponent} data={data} />}
      {componentToRender === 'Home' && <Home changeComponent={changeComponent} data={setData} />}
    </>
  );
};

export default Page;
