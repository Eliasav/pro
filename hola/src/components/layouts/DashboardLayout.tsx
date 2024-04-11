import React, { FC, ReactNode } from 'react';
import Sidebar from '../layouts/Sidebar';

interface Props {
  children: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
