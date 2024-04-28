const axios = require("axios");


class ProductService {
  constructor(url) {
    this.url = url;
  }

  async fetchProducts() {
    try {
      // [HK] Since the url provided is a google drive link, I might have problems to fetch this json
      // since we're getting the entire page response for that link
      // for now I'll throw an error and yield the default mock.
      throw new Error();
      // In case we had the actual endpoint, I would do this instead
      // // const response = await axios.get(this.url);
      // // return response.data
    } catch (error) {
      try {
        // [HK] Took the liberty of adding Ids to the products response
        // If the lack of Ids was intended, i would add them manually on the provider with an uuid 
        const mockResponse = await axios.get("/mockProducts.json");
        return mockResponse.data;
      } catch (mockError) {
        console.error("Error fetching mock products:", mockError);
        throw mockError;
      }
    }
  }
}

export default ProductService;
