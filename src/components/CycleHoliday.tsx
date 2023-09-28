import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "newYear"
        | "christmas"
        | "thanksgiving"
        | "gHogDay"
        | "halloween";
    const [holiday, setHoliday] = useState<Holiday>("newYear");

    const nextByAlphabetic: Record<Holiday, Holiday> = {
        christmas: "gHogDay",
        gHogDay: "halloween",
        halloween: "newYear",
        newYear: "thanksgiving",
        thanksgiving: "christmas"
    };
    const nextByYear: Record<Holiday, Holiday> = {
        newYear: "christmas",
        christmas: "gHogDay",
        gHogDay: "halloween",
        halloween: "thanksgiving",
        thanksgiving: "newYear"
    };
    const emojis: Record<Holiday, string> = {
        newYear: "🎉",
        gHogDay: "❄️",
        halloween: "🎃",
        christmas: "🎄",
        thanksgiving: "🦃"
    };
    return (
        <div>
            Cycle Holiday
            <span>Holiday: {emojis[holiday]}</span>
            <Button onClick={() => setHoliday(nextByAlphabetic[holiday])}>
                Cycle by Alphabet
            </Button>
            <Button onClick={() => setHoliday(nextByYear[holiday])}>
                Cycle by Year
            </Button>
        </div>
    );
}
