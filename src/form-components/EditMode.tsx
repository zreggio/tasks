import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Switch
                type="switch"
                id="edit-mode-check"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Is Student"
                    checked={student}
                    onChange={updateStudent}
                />
            )}
            <span>
                {editMode ? (
                    <Form.Control value={name} onChange={updateName} />
                ) : (
                    name
                )}{" "}
                {!editMode && <>is{!student ? " not" : ""} a student</>}
            </span>
            <h3>Edit Mode</h3>
        </div>
    );
}
