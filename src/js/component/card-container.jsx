import React from "react";
import Container from "react-bootstrap/Container";
import Card from "../component/card.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CardContainer() {
	return (
		<>
			<Container>
				<Row>
					<Col sm={12} md={3}>
						<Card></Card>
					</Col>
					<Col sm={12} md={3}>
						<Card></Card>
					</Col>{" "}
					<Col sm={12} md={3}>
						<Card></Card>
					</Col>{" "}
					<Col sm={12} md={3}>
						<Card></Card>
					</Col>
				</Row>
				<Row>
					<Col sm>sm=true</Col>
					<Col sm>sm=true</Col>
					<Col sm>sm=true</Col>
				</Row>
			</Container>
		</>
	);
}
