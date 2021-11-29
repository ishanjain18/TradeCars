import React from "react";
import { make_data, model_data } from "../static/car_data";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";

class Postform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      make_name: 1,
      car_name: "",
      seller_name: "",
      seller_email: "",
      purchase_year: 2021,
      min_price: 10.0,
      max_price: 20.0,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    // revert back to default
    this.setState({
      make_name: 1,
      car_name: "",
      seller_name: "",
      seller_email: "",
      purchase_year: 2021,
      min_price: 10.0,
      max_price: 20.0,
    });
  };

  render() {
    return (
      <div>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Email address">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Works with selects"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>

        <h2 style={{ paddingBottom: "10px" }}>Add a listing</h2>

        <form onSubmit={this.handleSubmit}>
          <select name="make_name" onChange={(e) => this.handleChange(e)}>
            {Object.keys(make_data).map((make) => (
              <option value={make}>{make_data[make]}</option>
            ))}
          </select>

          <select name="car_name" onChange={(e) => this.handleChange(e)}>
            {Object.keys(model_data)
              .filter(
                (value) =>
                  model_data[value][0] === parseInt(this.state.make_name)
              )
              .map((car) => (
                <option value={car}>{car}</option>
              ))}
          </select>
          <br></br>

          {/* Seller Details */}

          <input
            placeholder="Seller name"
            type="text"
            name="seller_name"
            value={this.state.seller_name}
            onChange={(e) => this.handleChange(e)}
            required
          ></input>

          {/* Seller Email */}

          <input
            placeholder="Seller Email-Id"
            type="email"
            name="seller_email"
            value={this.state.seller_email}
            onChange={(e) => this.handleChange(e)}
            required
          ></input>

          <select name="purchase_year" onChange={(e) => this.handleChange(e)}>
            {Array(100)
              .fill()
              .map((_, index) => index + 1922)
              .reverse()
              .map((year) => (
                <option value={year}>{year}</option>
              ))}
          </select>
          <br></br>
          <input
            type="number"
            required
            name="min_price"
            min="0"
            value={this.state.min_price}
            step="0.1"
            onChange={(e) => this.handleChange(e)}
          ></input>

          <input
            type="number"
            required
            name="max_price"
            min={0}
            value={this.state.max_price}
            step={0.1}
            onChange={(e) => this.handleChange(e)}
          ></input>

          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
