import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import moment from 'moment';
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    //get Blogs
    const getAllBlogs = async () => {
        try {
            const { data } = await axios.get('/api/v1/blog/all-blog')
            if (data?.success) { // data && data.sucess
                setBlogs(data?.blogs)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllBlogs();
    }, []);
    return <div>{blogs && blogs.map((blog) => <BlogCard
        id={blog._id}
        isUser={localStorage.getItem("userId") === blog?.user?._id} // This is done to verify the user for deleting and editing functionalities
        title={blog?.title}
        description={blog?.description}
        image={blog?.image}
        username={blog?.user?.username}

        time={moment(blog.createdAt).format('Do MMMM YYYY, h:mm a')}



    />)} </div>;

};

export default Blogs