import React from "react";
import NavBar from "../component/navbar.jsx";
import Jumbotron from "../component/jumbotron.jsx";
import Container from "react-bootstrap/Container";
import CardContainer from "../component/card-container.jsx";
import Footer from "../component/footer.jsx";

const Home = () => {
	return (
		<>
			<NavBar />
			<Container>
				<Jumbotron />
				<CardContainer />
			</Container>
			<Footer />
		</>
	);
};

export default Home;
