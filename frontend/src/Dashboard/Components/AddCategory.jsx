import React, { useState } from 'react';
import axios from 'axios';

export default function AddCategory() {
  const [categoryname, setCategoryname] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const url = 'http://127.0.0.1:8000/api/admin_panel/category/create/';

    try {
      const response = await axios.post(
        url,
        { name: categoryname },
        {
          headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        setSuccess('Category added successfully!');
        setCategoryname(''); 
      } else {
        setError('Failed to add category.');
      }
    } catch (err) {
      setError('Error adding category: ' + err.message);
    }
  };

  return (
    <>
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryname">
            Category Name
          </label>
          <input
            id="categoryname"
            type="text"
            placeholder="Category Name"
            value={categoryname}
            onChange={(e) => setCategoryname(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        {success && <div className="text-green-500 text-sm mb-4">{success}</div>}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

