import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
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
    const [currColor, setColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <label
                    key={color}
                    style={{ display: "inline-block", marginRight: "8px" }}
                >
                    <input
                        type="radio"
                        name="color-options"
                        value={color}
                        checked={currColor === color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    {color}
                </label>
            ))}
            <div
                style={{
                    backgroundColor: currColor,
                    padding: "8px",
                    marginTop: "8px",
                    textAlign: "center",
                    width: "120px"
                }}
                data-testid="colored-box"
            >
                {currColor}
            </div>
        </div>
    );
}
