import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptCount, setAttemptCount] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<string>("");

    const gainAttempt = () => {
        const reqNumber = parseInt(reqAttempts, 10);
        if (!isNaN(reqNumber)) {
            setAttemptCount((prev) => prev + reqNumber);
            setReqAttempts("");
        }
    };

    const useAttempt = () => {
        if (attemptCount > 0) {
            setAttemptCount((prev) => prev - 1);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptCount}</p>

            <input
                type="number"
                value={reqAttempts}
                onChange={(e) => setReqAttempts(e.target.value)}
                placeholder="Request more attempts"
            />

            <button onClick={gainAttempt}>Gain</button>
            <button onClick={useAttempt} disabled={attemptCount === 0}>
                Use
            </button>
        </div>
    );
}
