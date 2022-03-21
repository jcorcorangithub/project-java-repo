import API from "../../util/API";


// Call the api for search results
export const handleSearchAPIRequest = async (query = null, setResults) => {
    console.log(query);

    try {
        if (!query || query === "") {
            const resultsFromQuery = await API.getResults(query);
            setResults(resultsFromQuery.data);
        } else {
            const resultsFromQuery = await API.getResults(query[""]);
            console.log(resultsFromQuery);
            setResults(resultsFromQuery.data);
        };
    } catch (e) {
        console.log(e);
    };
};
