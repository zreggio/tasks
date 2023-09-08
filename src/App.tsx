import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    UD CISC275 with React Hooks and TypeScript. This is header
                    text.
                </h1>
            </header>
            <img
                src={process.env.PUBLIC_URL + "/IMG_0508.jpg"}
                alt="This is a picture I took of a friend on vacation."
            />
            <ul>
                <li>1. This is my friend Jake</li>
                <li>2. That is a donkey</li>
                <li>3. It is not a horse</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Zachary Reggio. Hello World.
            </p>
            <div className="Red-box">
                <Container>
                    <Row>
                        <Col>First Column</Col>
                        <Col>Second Column</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
