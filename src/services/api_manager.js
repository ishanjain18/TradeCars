import axios from "axios";

export const getApiData = async (companies = [], models = [], years = []) => {
  let data;

  // companies = [1, 5, 7];
  // models = [248];
  // years = [2021];
  await axios
    .get(
      "http://127.0.0.1:8000/listings?companies=" +
        companies.toString() +
        "&model=" +
        models.toString() +
        "&year=" +
        years.toString()
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

// {
//   companies: [1,3,4,5], models = [2,4], year=[2001, 2000]
// }
