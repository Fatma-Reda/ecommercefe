import React, { Component } from "react";
//import product from "../../assets/img/products/product-grey-7.jpg";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      description: "",
      price: "",
      discount: "",
      category: "",
      isOnSale: false,
      userid: null
    };
  }

  saleChanged = event => {
    if (event.target.value === "isOnSale") {
      this.setState({
        ...this.state,
        isOnSale: true
      });
    } else {
      this.setState({
        ...this.state,
        isOnSale: false
      });
    }
  };

  render() {
    let options = (
      <>
        {this.props.categories.map((category, index) => {
          return (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          );
        })}
      </>
    );
    let productData = {
      productname: this.state.productname,
      description: this.state.description,
      price: this.state.price,
      discount: this.state.discount,
      category: this.state.category,
      isonsale: this.state.isOnSale,
      userid: localStorage.getItem("userid")
    };
    return (
      <div className="add-product container">
        <form action=" ">
          <div className="add-product__data">
            <div className="form-controls">
              <section className="tabs">
                <div className="tabs__headers">
                  <div className="tabs__header active">English</div>
                  <div className="tabs__header">Arabic</div>
                </div>
                <div className="tabs__bodies">
                  <div className="tabs__body active">
                    <div className="form-group invalid">
                      <label>Name</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={event =>
                          this.setState({ productname: event.target.value })
                        }
                        name="productname"
                        id=""
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        onChange={event =>
                          this.setState({ description: event.target.value })
                        }
                        name="description"
                        id=""
                        cols="30"
                        rows="4"
                      />
                    </div>
                  </div>
                  <div className="tabs__body ">
                    <div className="form-group invalid">
                      <label>Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className="form-group">
                <label>Price</label>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  id=""
                  onChange={event =>
                    this.setState({ price: event.target.value })
                  }
                />
              </div>
              <div className="add-product__discount">
                <div className="form-group">
                  <label>Satus</label>
                  <div className="form-group__radios">
                    <div className="form-group__radio">
                      <input
                        type="radio"
                        name="toggleDiscountOptions"
                        value="isOnSale"
                        onChange={this.saleChanged}
                        checked={this.state.isOnSale}
                      />
                      <span>On Sale</span>
                    </div>
                    <div className="form-group__radio">
                      <input
                        type="radio"
                        name="toggleDiscountOptions"
                        value="isNotOnSale"
                        onChange={this.saleChanged}
                        checked={!this.state.isOnSale}
                      />
                      <span>Not On Sale</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Discount</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    disabled={!this.state.isOnSale}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  className="form-control"
                  onChange={event =>
                    this.setState({ category: event.target.value })
                  }
                >
                  {options}
                </select>
              </div>
              <div className="add-product__actions">
                <button href="#" className="btn btn--gray">
                  Cancel
                </button>
                <button
                  href="#"
                  className="btn btn--primary"
                  onClick={event => {
                    event.preventDefault();
                    this.props.add(productData);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: productData => dispatch(actionTypes.addProduct(productData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
