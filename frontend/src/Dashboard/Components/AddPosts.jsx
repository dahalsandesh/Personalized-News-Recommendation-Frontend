import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';
import Alert from '../../components/Alert/Alert';

export default function PostManager() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [postDetails, setPostDetails] = useState({ title: '', description: '', category_id: '' });
  const [image, setImage] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [alert, setAlert] = useState({ message: '', type: '' });

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  const fetchPosts = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get('http://127.0.0.1:8000/api/admin_panel/ListPosts/', {
        headers: {
          'Accept': 'application/json',
          'Authorization': `token ${token}`,
        },
      });
      setPosts(response.data);
    } catch (err) {
      setAlert({ message: 'Error fetching posts: ' + err.message, type: 'error' });
    }
  };

  const fetchCategories = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get('http://127.0.0.1:8000/api/admin_panel/category/', {
        headers: {
          'Accept': 'application/json',
          'Authorization': `token ${token}`,
        },
      });
      setCategories(response.data);
    } catch (err) {
      setAlert({ message: 'Error fetching categories: ' + err.message, type: 'error' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', postDetails.title);
    formData.append('description', postDetails.description);
    formData.append('category_id', postDetails.category_id);
    if (image) {
      formData.append('image', image);
    }

    try {
      if (editingPost) {
        // Update post
        const response = await axios.put(
          `http://127.0.0.1:8000/api/admin_panel/posts/update/?id=${editingPost.id}`,
          formData,
          {
            headers: {
              'Accept': 'application/json',
              'Authorization': `token ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        if (response.status === 200) {
          setAlert({ message: 'Post updated successfully!', type: 'success' });
          setEditingPost(null);
        } else {
          setAlert({ message: 'Failed to update post.', type: 'error' });
        }
      } else {
        // Create new post
        const response = await axios.post(
          'http://127.0.0.1:8000/api/admin_panel/posts/create/',
          formData,
          {
            headers: {
              'Accept': 'application/json',
              'Authorization': `token ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        if (response.status === 201) {
          setAlert({ message: 'Post created successfully!', type: 'success' });
          setPosts([...posts, response.data]);
        } else {
          setAlert({ message: 'Failed to create post.', type: 'error' });
        }
      }

      // Reset form
      setPostDetails({ title: '', description: '', category_id: '' });
      setImage(null);
      fetchPosts();
    } catch (err) {
      setAlert({ message: 'Error: ' + err.message, type: 'error' });
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setPostDetails({ title: post.title, description: post.description, category_id: post.category_id });
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/admin_panel/posts/delete/`,
        {
          headers: {
            'Accept': 'application/json',
            'Authorization': `token ${token}`,
          },
          params: {
            id: id,
          },
        }
      );

      if (response.status === 204) {
        setAlert({ message: 'Post deleted successfully!', type: 'success' });
        fetchPosts();
      } else {
        setAlert({ message: 'Failed to delete post.', type: 'error' });
      }
    } catch (err) {
      setAlert({ message: 'Error: ' + err.message, type: 'error' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-20 p-6 bg-white rounded shadow-md">
      {alert.message && <Alert message={alert.message} type={alert.type} onClose={() => setAlert({ message: '', type: '' })} />}
      <h2 className="text-xl text-center font-bold mb-4">Post Manager</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={postDetails.title}
            onChange={(e) => setPostDetails({ ...postDetails, title: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Description"
            value={postDetails.description}
            onChange={(e) => setPostDetails({ ...postDetails, description: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category_id">
            Category
          </label>
          <select
            id="category_id"
            value={postDetails.category_id}
            onChange={(e) => setPostDetails({ ...postDetails, category_id: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            id="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {editingPost ? <FontAwesomeIcon icon={faSave} /> : <FontAwesomeIcon icon={faPlus} />} {editingPost ? 'Update Post' : 'Create Post'}
          </button>
          {editingPost && (
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                setEditingPost(null);
                setPostDetails({ title: '', description: '', category_id: '' });
                setImage(null);
              }}
            >
              <FontAwesomeIcon icon={faTimes} /> Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="text-lg font-semibold mb-4 mt-8">Posts List</h3>
      <ul className="list-disc list-inside">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between mb-2">
            {post.title}
            <div className="flex items-center">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={() => handleEdit(post)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleDelete(post.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
