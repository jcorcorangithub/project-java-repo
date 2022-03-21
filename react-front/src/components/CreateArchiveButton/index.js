import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
// import { handleSearchAPIRequest } from "./handlers";
import API from "../../util/API";


const CreateArchiveButton = ({ name }) => {

    return (
        <button
            type="submit"
            onClick={async () => await API.createArchive({ archiveName: name, articles: [] })}
        >
            Create Archive
        </button>
    );
};

export default CreateArchiveButton;