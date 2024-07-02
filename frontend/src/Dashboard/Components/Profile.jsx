import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-4xl flex">
        <div className="flex-shrink-0">
          <img
            className="rounded-lg w-48 h-48 object-cover"
            src={`${process.env.PUBLIC_URL}/luffy.jpg`}
            alt="User"
          />
          <h2 className="mt-4 text-xl font-semibold">Monkey D Luffy</h2>
        </div>
        <div className="ml-6 flex-1">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400">Username</label>
              <input
                type="text"
                className="mt-1 p-2 w-full bg-gray-700 rounded border border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
                defaultValue="Monkey D Luffy Updated"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                className="mt-1 p-2 w-full bg-gray-700 rounded border border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
                defaultValue="luffy@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Password</label>
              <input
                type="password"
                className="mt-1 p-2 w-full bg-gray-700 rounded border border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Phone</label>
              <input
                type="text"
                className="mt-1 p-2 w-full bg-gray-700 rounded border border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
                defaultValue="9243566"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Address</label>
              <input
                type="text"
                className="mt-1 p-2 w-full bg-gray-700 rounded border border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
                defaultValue=" Foosha Village,Dawn Island,East Blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Is Admin?</label>
              <select
                className="mt-1 p-2 w-full bg-gray-700 rounded border border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
                defaultValue="No"
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Is Active?</label>
              <select
                className="mt-1 p-2 w-full bg-gray-700 rounded border border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
                defaultValue="Yes"
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-green-950 text-white font-semibold py-2 px-4 rounded"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
