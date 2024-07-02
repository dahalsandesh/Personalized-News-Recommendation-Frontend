import React, { useState, useEffect } from 'react';
import { IoPeople, IoFileTrayStackedOutline } from 'react-icons/io5';
import { GrUserAdmin } from "react-icons/gr";
import { TiUploadOutline } from "react-icons/ti";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import axios from 'axios';

export default function DashboardStatsGrid() {
  const [stats, setStats] = useState({
    totalCategory: 0,
    admins: 0,
    totalUsers: 0,
    totalPosts: 0,
    totalStaff: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem('token');
      try {
        const [categoriesResponse, adminsResponse, usersResponse, postsResponse, staffResponse] = await Promise.all([
          axios.get('http://127.0.0.1:8000/api/admin_panel/count/category', {
            headers: { 'Authorization': `token ${token}` }
          }),
          axios.get('http://127.0.0.1:8000/api/admin_panel/count/admin', {
            headers: { 'Authorization': `token ${token}` }
          }),
          axios.get('http://127.0.0.1:8000/api/admin_panel/count/user', {
            headers: { 'Authorization': `token ${token}` }
          }),
          axios.get('http://127.0.0.1:8000/api/admin_panel/count/post', {
            headers: { 'Authorization': `token ${token}` }
          }),
          axios.get('http://127.0.0.1:8000/api/admin_panel/count/staff', {
            headers: { 'Authorization': `token ${token}` }
          }),
        ]);

        setStats({
          totalCategory: categoriesResponse.data.count,
          admins: adminsResponse.data.count,
          totalUsers: usersResponse.data.count,
          totalPosts: postsResponse.data.count,
          totalStaff: staffResponse.data.count,
        });
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoFileTrayStackedOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-semibold">Total Category</span>
          <div className="flex items-center">
            <strong className="text-4xl text-gray-700 font-semibold">{stats.totalCategory}</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <GrUserAdmin className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-semibold">Admins</span>
          <div className="flex items-center">
            <strong className="text-4xl text-gray-700 font-semibold">{stats.admins}</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-semibold">Total Users</span>
          <div className="flex items-center">
            <strong className="text-4xl text-gray-700 font-semibold">{stats.totalUsers}</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <TiUploadOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-semibold">Total Posts</span>
          <div className="flex items-center">
            <strong className="text-4xl text-gray-700 font-semibold">{stats.totalPosts}</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-purple-500">
          <MdOutlineSupervisorAccount className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-semibold">Total Staff</span>
          <div className="flex items-center">
            <strong className="text-4xl text-gray-700 font-semibold">{stats.totalStaff}</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-lg p-4 w-48 h-48 border border-gray-200 shadow-lg flex items-center">
      {children}
    </div>
  );
}
