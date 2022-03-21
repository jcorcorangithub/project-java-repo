import React, { useState, useEffect } from "react";
import { Dropdown,  } from "react-bootstrap";
// import { handleSearchAPIRequest } from "./handlers";
import API from "../../util/API";


const SaveToArchiveButton = ({article, archives}) => {

    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Save to Archive
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
            {
                archives.length > 0 ?
                archives.map(archive => {
                    return  (
                    <Dropdown.Item
                        key={archives.indexOf(archive)} 
                        href={"#archive"}
                        onClick={async () => await API.saveToArchive(article, archive)}
                        >
                            {archive.archiveName}
                
                    </Dropdown.Item>
                    )
                })
                :
                null
            }
        </Dropdown.Menu>
      </Dropdown>
    );
};

export default SaveToArchiveButton;