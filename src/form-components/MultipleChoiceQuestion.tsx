import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currChoice, setCurrChoice] = useState<string>(options[0]);
    function updateChoice(e: React.ChangeEvent<HTMLSelectElement>) {
        setCurrChoice(e.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userChoice">
                <Form.Label>Pick a choice</Form.Label>
                <Form.Select value={currChoice} onChange={updateChoice}>
                    {options.map((choice) => (
                        <option value={choice} key={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
                {currChoice === expectedAnswer ? (
                    <span>✔️</span>
                ) : (
                    <span>❌</span>
                )}
            </Form.Group>
        </div>
    );
}
