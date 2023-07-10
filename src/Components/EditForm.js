import React, { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const EditForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const url = process.env.REACT_APP_URL_ENDPOINT;
	const navigate = useNavigate();
	const { id } = useParams();
	const { blogs, setShouldRefresh } = useOutletContext();
	const allBlogs = blogs.data;

	useEffect(() => {
		if (allBlogs) {
			const foundBlog = allBlogs.find((blog) => blog._id === id);
			if (foundBlog) {
				setTitle(foundBlog.title);
				setContent(foundBlog.content);
			}
		}
	}, [id, blogs]);

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		setShouldRefresh(true);
		const body = {
			title,
			content,
		};
		const response = await fetch(`${url}/blogs/edit/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		const updatedBlog = await response.json();
		setShouldRefresh(false);
		navigate("/");
		console.log(updatedBlog);
	};
	const handleDelete = async () => {
		setShouldRefresh(true);
		const response = await fetch(`${url}/blogs/delete/${id}`, {
			method: "DELETE",
		});
		const deletedBlog = await response.json();
		navigate("/");
		console.log(deletedBlog);
		setShouldRefresh(false);
	};

	return (
		<div>
			<h1>Edit Post:</h1>
			<form onSubmit={handleOnSubmit}>
				<label htmlFor="title">Title: </label> <br />
				<input value={title} onChange={(e) => setTitle(e.target.value)} />
				<br />
				<label htmlFor="content">Content: </label>
				<br />
				<textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<br />
				<button>Edit</button>
			</form>
			<button onClick={handleDelete}>Delete</button>{" "}
			<button onClick={() => navigate("/")}>Cancel</button>
		</div>
	);
};

export default EditForm;
