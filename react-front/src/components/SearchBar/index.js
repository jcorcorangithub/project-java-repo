import React, { useState, useEffect } from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
import SearchButton from "../SearchButton";
import { handleSearchQuery } from "./handlers";

const SearchBar = ({ results, setResults, count, setCount }) => {
    const [query, setQuery] = useState("");

    return (
        <section id="search">
            <Form>
                <FormGroup className="mb-3" controlId="formBasicSearchBar">
                    <FormLabel>Search Gutenberg API</FormLabel>
                    <Form.Control
                        type="text"
                        placeholder="Search for books..."
                        onChange={async (e) => handleSearchQuery(e, query, setQuery)}
                    />
                </FormGroup>
            </Form>
            <SearchButton query={query} setResults={setResults} results={results} count={count} setCount={setCount}/>
        </section>
    );
};

export default SearchBar;