import React, { Component } from "react";
import Product from "../product/product";
import ListingTools from "../listingTool/listingtool";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    console.log(this.products);
  }
  componentDidMount() {
    this.props.getAll();
  }
  render() {
    let products = this.props.products.map(p => {
      return <Product key={p.id} product={p} />;
    });
    return (
      <section className="item-listing">
        <ListingTools />
        <div
          className="item-listing__items item-listing--3items"
          style={{ width: "100%" }}
        >
          {products}
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAll: () => dispatch(actionTypes.initproducts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
