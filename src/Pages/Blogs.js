import React from "react";
import BlogCard from "../Components/BlogCard";
import { useOutletContext } from "react-router-dom";

const Blogs = () => {
	const { blogs } = useOutletContext();
	console.log(blogs);
	const { data } = blogs;
	return (
		<div>
			{blogs.success && (
				<div>
					{data.map((blog) => {
						return <BlogCard key={blog._id} blog={blog} />;
					})}
				</div>
			)}
		</div>
	);
};

// Create a BlogCard component that shows title, author, date (which the blog was create), and content
// The BlogCard will be reused in this Blogs.js Page component.
export default Blogs;
