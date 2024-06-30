import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FcBullish } from 'react-icons/fc';
import { HiOutlineLogout, HiOutlineUsers, HiOutlineUserAdd } from 'react-icons/hi';

const LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <FcBullish />,
  },
  {
    key: 'users',
    label: 'Users',
    path: '/dashboard/users',
    icon: <HiOutlineUsers />,
  },
  {
    key: 'addUser',
    label: 'Add User',
    path: '/dashboard/adduser',
    icon: <HiOutlineUserAdd />,
  },
  {
    key: 'addCategory',
    label: 'Add Category',
    path: '/dashboard/addcategory',
    icon: <HiOutlineUserAdd />,
  },
  {
    key: 'logout',
    label: 'Logout',
    path: '/dashboard/logout',
    icon: <HiOutlineLogout />,
  },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="bg-indigo-950 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-neutral-200 text-lg">AdminPannel</span>
      </div>
      <nav className="py-8 flex flex-1 flex-col gap-2">
        {LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} pathname={pathname} />
        ))}
      </nav>
    </div>
  );
}

function SidebarLink({ link, pathname }) {
  const isActive = pathname === link.path;

  return (
    <Link
      to={link.path}
      className={`flex items-center gap-2 px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm ${
        isActive ? 'bg-neutral-700 text-white' : 'text-neutral-400'
      }`}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
