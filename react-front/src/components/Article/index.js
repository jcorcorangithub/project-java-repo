import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import SaveToArchiveButton from "../SaveToArchiveButton";

const Article = ({ data, archives }) => {

    return (
        <Card>
            <Card.Body className="d-flex flex-column justify-content-around">
                <p>{"Title: " + data.title}</p>
                <p>{"Authors: " + data.authors}</p>
                <p>{"Language: " + (data.langauge ? data.language : "N/A")}</p>
                <p>{"Issued: " + data.issued}</p>
                <p>{"Subjects: " + (data.subjects ? data.subjects : "N/A")}</p>
                <p>{"Bookshelves: " + (data.bookshelves ? data.bookshelves : "N/A")}</p>
                <p>{"LoCC" + data.locc}</p>
                <a href={data.url} target="_blank">Find {data.title} on Gutenberg Project</a>
                <a href={data.as_html} target="_blank">Read {data.title} as html</a>
            </Card.Body>
            <SaveToArchiveButton article={data} archives={archives} />
        </Card>
    );
};

export default Article;