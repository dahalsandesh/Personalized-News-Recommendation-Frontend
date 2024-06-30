import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewsPosts() {
  const productData = [
    { id: 21, name: 'optiyoz', email: 'optiyoz@gmail.com', emailStatus: 'Confirmed', role: 'User', status: 'Active', date: '2024-06-09 / 11:54' },
    { id: 20, name: 'Yuejin', email: 'eugene@dripfmonline.com', emailStatus: 'Unconfirmed', role: 'User', status: 'Active', date: '2024-06-08 / 15:59' },
    { id: 19, name: 'Chandru', email: 'chandru.2017@yahoo.com', emailStatus: 'Unconfirmed', role: 'User', status: 'Active', date: '2024-05-28 / 16:27' },
    { id: 18, name: 'test', email: 'test@gmail.com', emailStatus: 'Unconfirmed', role: 'User', status: 'Active', date: '2024-05-28 / 07:45' },
    { id: 17, name: 'Azab', email: 'remonjohn80@gmail.com', emailStatus: 'Confirmed', role: 'User', status: 'Active', date: '2024-05-23 / 08:08' },
    { id: 16, name: 'Punjabiman', email: 'kingofpunjabians@gmail.com', emailStatus: 'Unconfirmed', role: 'User', status: 'Active', date: '2024-05-23 / 01:45' },
    { id: 15, name: 'fuckyoo', email: 'fuckyou@gmail.com', emailStatus: 'Unconfirmed', role: 'User', status: 'Active', date: '2024-05-15 / 13:06' }
  ];

  const [products] = useState(productData);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleAddUser = () => {
    navigate('/addusers');
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Users</h2>
        <button className="bg-green-500 text-white p-2 rounded hover:bg-blue-700" onClick={handleAddUser}>
          + Add User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Id</th>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Options</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.id}</td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">
                  {product.email} <span className={product.emailStatus === 'Confirmed' ? 'text-green-600' : 'text-red-600'}>({product.emailStatus})</span>
                </td>
                <td className="py-2 px-4 border-b">{product.role}</td>
                <td className="py-2 px-4 border-b">
                  <span className={product.status === 'Active' ? 'bg-green-500 text-white px-2 py-1 rounded' : 'bg-gray-500 text-white px-2 py-1 rounded'}>{product.status}</span>
                </td>
                <td className="py-2 px-4 border-b">{product.date}</td>
                <td className="py-2 px-4 border-b">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className="bg-purple-500 text-white p-2 rounded hover:bg-purple-700"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={() => toggleDropdown(product.id)}
                      >
                        Select an option
                      </button>
                    </div>
                    {openDropdownId === product.id && (
                      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                          <button className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-0">Change User Role</button>
                          <button className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-3">Edit</button>
                          <button className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-4">Delete</button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
