import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'Home',
    key: '/',
  },
  {
    label: 'Research',
    key: 'Research',
  },
  {
    label: 'Members',
    key: 'Members',
  },
  {
    label: 'News',
    key: 'News',
  },
  {
    label: 'Publications',
    key: 'Publications',
  },
  {
    label: 'Courses',
    key: 'Courses',
  },
  {
    label: 'Join the Lab',
    key: 'Join the Lab',
  },
];
const NavBar = () => {
  const [current, setCurrent] = useState('/');
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    navigate(`${e.key}`)
  };
  return <Menu className='flex-center' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default NavBar;