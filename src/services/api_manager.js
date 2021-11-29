import axios from "axios";

export const getApiData = async (companies = "", models = "", years = "") => {
  let data;

  // companies = 1;
  // models = 3;
  // years = 3;
  console.log(
    "http://127.0.0.1:8000/listings?companies=" +
      companies +
      "&model=" +
      models +
      "&year=" +
      years
  );

  await axios
    .get(
      "http://127.0.0.1:8000/listings?companies=" +
        companies +
        "&model=" +
        models +
        "&year=" +
        years
    )
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const postApiData = async (post_data) => {
  await axios
    .post("http://127.0.0.1:8000/listings/add", post_data)
    .then((response) => {
      console.log(response.data);
    });
};
