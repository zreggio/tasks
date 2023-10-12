import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);
    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        if (`${Number(value)}` === `${parseInt(value)}`) {
            setRequest(parseInt(value));
        }
    }
    function use(): void {
        setAttempts(attempts - 1);
    }
    function gain(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts:</Form.Label>
                <span>{" " + attempts}</span>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                />
            </Form.Group>
            <Button onClick={use} disabled={!attempts}>
                use
            </Button>
            <Button onClick={gain}>gain</Button>
            <h3>Give Attempts</h3>
        </div>
    );
}
/*
import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    return (
        <div>
            <h3>Give Attempts</h3>
        </div>
    );
}
*/
