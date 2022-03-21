import React from "react";
import { Card, ListGroup, ListGroupItem} from "react-bootstrap";
import SaveToArchiveButton from "../SaveToArchiveButton";

const Archive = ({ data }) => {

    return (
        <Card>
            <p>{data.archiveName}</p>
            <ListGroup>
                {
                    data.articles.length > 0 ?
                    data.articles.map(article => {
                        const newLink = article.snippet.replace('/r', '');
                        return (
                            <ListGroupItem 
                                key={data.articles.indexOf(article)}
                                className="d-flex flex-column justify-content-around"
                            >
                                <p>{article.title}</p>
                                <p>{article.summary}</p>
                                <a href={newLink} target="_blank">{'Read as HTML'}</a>
                                <a href={article.link} target="_blank">{'Visit on Gutenberg'}</a>
                            </ListGroupItem>
                                )
                    })
                    :
                    null
                }
            </ListGroup>
        </Card>
    );
};

export default Archive;