import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class Product extends Component {
  render() {
    let deletePro = null;
    console.log(this.props.product.id);
    console.log(localStorage.getItem("userid"));
    console.log(this.props.product.userid);

    if (this.props.product.userid === localStorage.getItem("userid")) {
      deletePro = (
        <a onClick={() => this.props.deleteProduct(this.props.product.id)}>
          <i className="fas fa-trash-alt" />
        </a>
      );
    }
    let price = (
      <div>
        <span className="lable">${this.props.product.price}</span>
      </div>
    );
    if (this.props.product.isOnSale) {
      price = (
        <div>
          <del>${this.props.product.price}</del>
          <span className="lable">
            $
            {parseInt(this.props.product.price) -
              parseInt(this.props.product.discount)}
          </span>
          <div className="item-medium-1__alert">Sale</div>
        </div>
      );
    }
    return (
      <div className="item-medium-1">
        <div
          className="item-medium-1__image image"
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/EOS70D_18-135STM.jpg/300px-EOS70D_18-135STM.jpg')"
          }}
        >
          <a href="#" className="item-medium-1__action">
            Add to Cart
          </a>
        </div>
        <a href="#">
          <h4>{this.props.product.productname}</h4>
          <div className="flex-row">{price}</div>
        </a>
        <div className="crud-actions">
          <NavLink
            to={`/products/${this.props.product.id}`}
            onClick={() => this.props.viewProductDetails(this.props.product.id)}
          >
            <i className="far fa-eye" />
          </NavLink>
          {deletePro}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: proId => dispatch(actionTypes.removeProduct(proId)),
    viewProductDetails: proId => dispatch(actionTypes.getProductByID(proId))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Product);
