import React from 'react';
import Link from 'next/link'; // Asumiendo que estás usando Next.js

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          // Agrega más enlaces según sea necesario
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;