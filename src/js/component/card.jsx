import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function MyCard() {
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://ichef.bbci.co.uk/news/800/cpsprodpb/51F3/production/_106997902_gettyimages-611696954.jpg.webp"
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</>
	);
}
