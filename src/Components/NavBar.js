import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
	return (
		<div>
			<Link to={"/"}>Home</Link> <Link to={"/blog-form"}>New Blog</Link>
		</div>
	);
};

export default NavBar;
