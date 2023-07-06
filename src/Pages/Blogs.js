import React from "react";
import { useOutletContext } from "react-router-dom";

const Blogs = () => {
	const { blogs } = useOutletContext();
	console.log(blogs);
	const { data } = blogs;
	return (
		<div>
			Blogs
			{blogs.success && (
				<div>
					{data.map((blog) => {
						return <p>{blog.title}</p>;
					})}
				</div>
			)}
		</div>
	);
};

// Create a BlogCard component that shows title, author, date (which the blog was create), and content
// The BlogCard will be reused in this Blogs.js Page component.
export default Blogs;
