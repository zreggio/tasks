import React, { useState } from "react";

import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    //const [color, setColor] = useState<string>("red");
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const [color, setColor] = useState<string>(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((item) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                    id={`color-${item}`}
                    label={item}
                    value={item}
                    checked={color === item}
                    style={{ backgroundColor: color }}
                />
            ))}
            <p>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
            </p>
        </div>
    );
}
