import axios from "axios";

jest.mock('axios');

it('makes a request to the react website', async () => {

    expect( await axios.get("https://reactjs.org/"))
        .not.toBeNull();
});