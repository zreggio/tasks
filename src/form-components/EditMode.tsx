import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [student, setStudent] = useState<boolean>(true);
    const [canEdit, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    function setisStudent(entered: React.ChangeEvent<HTMLInputElement>) {
        setStudent(entered.target.checked);
    }
    function setStudentName(entered: React.ChangeEvent<HTMLInputElement>) {
        setName(entered.target.value);
    }
    function setCanEdit(entered: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(entered.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Check
                    id="CanEdit"
                    type="switch"
                    checked={canEdit}
                    onChange={setCanEdit}
                />
                {canEdit && (
                    <>
                        <Form.Control
                            value={name}
                            onChange={setStudentName}
                            disabled={!canEdit}
                        />
                        <Form.Label htmlFor="isStudent">student</Form.Label>
                        <Form.Check
                            name="student"
                            id="isStudent"
                            type="checkbox"
                            disabled={!canEdit}
                            checked={student}
                            onChange={setisStudent}
                        />
                    </>
                )}
            </Form.Group>
            <p>
                {name} is {student ? "" : "not"} a student
            </p>
        </div>
    );
}
