import { Outlet } from 'react-router-dom';
import { FC } from "react";
import { Header } from '../components';

const MainLayout:FC = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
