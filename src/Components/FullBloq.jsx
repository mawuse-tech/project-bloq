
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router'
import 'remixicon/fonts/remixicon.css';

const FullBloq = () => {
  const { blogId } = useParams();
  const { bloqs, API_URL } = useOutletContext();
  const [blogDetail, setBlogDetail] = useState({})

  useEffect(() => {
  async function fetchBlog() {
    try {
      const res = await axios.get(`${API_URL}/${blogId}`);
      console.log(res)
      setBlogDetail(res.data);
    } catch (error) {
      console.log("Error fetching blog:", error);
    }
  }

  fetchBlog();
}, [blogId]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="p-5 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <strong className="block text-xl font-semibold text-gray-700 mb-2">
          {blogDetail.title}
        </strong>
        <p className="text-gray-600 mb-4">{blogDetail.description}</p>
      </div>
    </div>
  );
}

export default FullBloq