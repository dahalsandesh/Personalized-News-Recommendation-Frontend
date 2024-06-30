import React from 'react';

export default function AddPosts() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">Add Post</h1>
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              className="w-full px-3 py-2 border rounded-lg focus:border-blue-500 focus:outline-none" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea 
              id="description" 
              name="description" 
              className="w-full px-3 py-2 border rounded-lg focus:border-blue-500 focus:outline-none" 
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image Post</label>
            <input 
              type="file" 
              id="image" 
              name="image" 
              className="w-full px-3 py-2 border rounded-lg focus:border-blue-500 focus:outline-none" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
            <select 
              id="category" 
              name="category" 
              className="w-full px-3 py-2 border rounded-lg focus:border-blue-500 focus:outline-none"
            >
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="health">Health</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea 
              id="summary" 
              name="summary" 
              className="w-full px-3 py-2 border rounded-lg focus:border-blue-500 focus:outline-none" 
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input 
                type="checkbox" 
                name="featured" 
                className="form-checkbox focus:border-blue-500 focus:outline-none" 
              />
            </label>
          </div>
          <div>
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
