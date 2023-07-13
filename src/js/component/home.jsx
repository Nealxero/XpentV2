import React from "react";
import BudgetCard from "./BudgetCard";
import { Stack } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto"> Budgets </h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense </Button>
      </Stack>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
		
		<BudgetCard name="Ocio"  amount={600} max={1000}> </BudgetCard>
	</div>
    </Container>
  );
};

export default Home;
