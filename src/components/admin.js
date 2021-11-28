import React from "react";
import { getApiData, postApiData } from "../services/api_manager";
import Form from "./form";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    getApiData().then((response) => {
      this.setState({
        listings: response,
      });
      console.log(response);
    });
  }

  onSubmit = async (fields) => {
    // fields contains state lifted up from form.js, state contains all values required for a POST request
    await postApiData(fields);
    getApiData().then((response) => {
      this.setState({
        listings: response,
      });
      console.log(response);
    });
  };

  render() {
    const { listings } = this.state;
    return (
      <>
        <header>
          <h1>Admin Page</h1>
        </header>
        <div>
          <Form onSubmit={(fields) => this.onSubmit(fields)} />
        </div>
        <ul>
          {listings.map((listing) => (
            <li key={listing.id}>
              {listing.car_name}
              {listing.make_name}
              {listing.max_price}
              {listing.min_price}
              {listing.purchase_year}
              {listing.seller_email}
              {listing.seller_name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Admin;
