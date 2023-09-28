import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return Math.floor(Math.random() * 6) + 1;
}

export function TwoDice(): JSX.Element {
    const [dice1, setDice1] = useState<number>(0);
    const [dice2, setDice2] = useState<number>(1);
    return (
        <div>
            Two Dice - <span data-testid="left-die">{dice1}</span>
            <span data-testid="right-die">{dice2}</span>
            <Button onClick={() => setDice1(d6())}>Roll Left</Button>
            <Button onClick={() => setDice2(d6())}>Roll Right</Button>
            {dice1 === 1 && dice2 === 1 && <div>Lose</div>}
            {dice1 === dice2 && dice1 !== 1 && <div>Win</div>}
        </div>
    );
}
