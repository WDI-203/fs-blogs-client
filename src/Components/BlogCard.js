import React from "react";

const BlogCard = ({ blog }) => {
	return (
		<div style={{ border: "solid black 0.5px" }}>
			<h1>{blog.title}</h1>
			<h5>
				{blog.author}: {blog.createAt}
			</h5>
			<p>{blog.content}</p>
		</div>
	);
};

export default BlogCard;

//create a navbar where you can go see all the blogs and go to blog-form route
//redirect to see all the blogs after you submit a new blog
