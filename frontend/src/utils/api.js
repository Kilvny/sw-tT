// The api.js file in the utils folder can contain logic related to making API requests from your React components to the PHP backend. It serves as a central place to encapsulate and manage API communication. Here are some examples of the logic that can be implemented inside the api.js file:

import getTestProducts from "../data";

const WEBSITE = `http://localhost:{PORT}`;
const BASE_URL = `${WEBSITE}/api`;
const PRODUCT_ENDPOINT = `${BASE_URL}/products`;
const ADD_PRODUCT_ENDPOINT = `${BASE_URL}/products/add`;
const TEST_DATA_ENDPOINT = () => getTestProducts()


/**
 * @GET Products
 * Perform a GET request on test data and return
 */

async function getProducts() {
    const response = TEST_DATA_ENDPOINT()
    const data = await response;
    return data
}


export { getProducts }
