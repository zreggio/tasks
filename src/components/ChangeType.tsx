import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [currQuestionType, setCurrQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionType(): void {
        currQuestionType === "multiple_choice_question"
            ? setCurrQuestionType("short_answer_question")
            : setCurrQuestionType("multiple_choice_question");
    }
    return (
        <div>
            {currQuestionType === "multiple_choice_question"
                ? "Multiple Choice - "
                : "Short Answer - "}
            <Button onClick={changeQuestionType}>
                <div>Change Type</div>
            </Button>
        </div>
    );
}
