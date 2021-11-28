import React from "react";
import { getApiData } from "../services/api_manager";

class Home extends React.Component {
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
    });
  }

  render() {
    const { listings } = this.state;
    return (
      <>
        <header>
          <h1>Home Page</h1>
        </header>
        <ul>
          {listings.map((listing) => (
            <li key={listing.id}>
              {listing.car_name}
              {"---"}
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

export default Home;
