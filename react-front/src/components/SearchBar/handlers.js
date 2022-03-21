// import API from "../../util/API";

// // Call the api for search results
// export const handleSearchAPIRequest = async (query, setResults) => {

//     const resultsFromQuery = await API.getResults(query);
//     setResults(resultsFromQuery);
// };

// Search Request handler
export const handleSearchQuery = (e, query, setQuery) => {

    const {name, value} = e.target;
    setQuery({...query, [name]: value});
};