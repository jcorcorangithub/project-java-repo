import React, { useState } from "react";
import { ListGroup, ListGroupItem, Form, FormGroup, FormLabel } from "react-bootstrap";
import CreateArchiveButton from "../CreateArchiveButton";
import Archive from "../Archive";
import styles from "../../styles/home.module.css";


const Archives = ({ archives, setArchives }) => {
    const [name, setName] = useState("");

    console.log(archives);

    if (archives.length === 0) {
        return (
            <div id="archives-list">
                {/* Map archives from db to list */}
                <h1 className={styles.signup_title}>Archives</h1>
                <Form>
                    <FormGroup className="mb-3" controlId="formBasicArchive">
                        <FormLabel>Create A New Archive</FormLabel>
                        <Form.Control
                            type="text"
                            placeholder="Archive name..."
                            onChange={async (e) => setName(e.target.value)}
                        />
                    </FormGroup>
                </Form>
                <CreateArchiveButton name={name} />
            </div>
        );
    } else {
        return (
            <div id="archives-list">
                {/* Map archives from db to list */}
                <h1 className={styles.signup_title}>Archives</h1>
                <Form>
                    <FormGroup className="mb-3" controlId="formBasicArchive">
                        <FormLabel>Create A New Archive</FormLabel>
                        <Form.Control
                            type="text"
                            placeholder="Archive name..."
                            onChange={async (e) => setName(e.target.value)}
                        />
                    </FormGroup>
                </Form>
                <CreateArchiveButton name={name} />
                <ListGroup>
                    {
                        archives.length > 0 ? archives.map(archive => {
                            return (
                                <ListGroupItem key={archives.indexOf(archive)} archive={archive.archiveName}>
                                    <Archive data={archive} />
                                </ListGroupItem>
                            );
                        })
                        :
                        null
                    }

                </ListGroup>
            </div>
        )
    }
};

export default Archives;