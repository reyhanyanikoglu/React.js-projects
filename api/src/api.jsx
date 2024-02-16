import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID xMBHA0X3qAlb_FDgLLZMjt57kviqQua5aOFnQPPiU6s",
      },
      params:{
        query:term
      }
    });
    debugger;
    return response.data.results;
  };

  export default searchImages;