import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const BlogForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [author, setAuthor] = useState("");

	const { handleNewBlog, setShouldRefresh } = useOutletContext();
	const navigate = useNavigate();

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setShouldRefresh(true);
		const newBlog = {
			title,
			content,
			author,
		};
		handleNewBlog(newBlog);
		navigate("/");
	};

	return (
		<div>
			<h1> New Post:</h1>
			<form onSubmit={handleOnSubmit}>
				<label htmlFor="title">Title: </label>
				<input value={title} onChange={(e) => setTitle(e.target.value)} />
				<label htmlFor="content">Content: </label>
				<input value={content} onChange={(e) => setContent(e.target.value)} />
				<label htmlFor="author">Author: </label>
				<input value={author} onChange={(e) => setAuthor(e.target.value)} />
				<button>Post</button>
			</form>
		</div>
	);
};

export default BlogForm;
