import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
	console.log(blog);
	const navigate = useNavigate();
	return (
		<div style={{ border: "solid black 0.5px" }}>
			<h1>{blog.title}</h1>
			<h5>
				{blog.author}: {blog.createAt}
			</h5>
			<p>{blog.content}</p>
			<button onClick={() => navigate(`/edit/${blog._id}`)}>Edit Blog</button>
		</div>
	);
};

export default BlogCard;

//create a navbar where you can go see all the blogs and go to blog-form route
//redirect to see all the blogs after you submit a new blog
