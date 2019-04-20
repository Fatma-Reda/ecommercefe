import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class ProductDetails extends Component {
  render() {
    let product = null;
    console.log("details prop", this.props.product);
    if (this.props.product && this.props.product._id) {
      product = (
        <Fragment>
          <div className="product-details container">
            <section className="product-details__main">
              <div className="slider">
                <div className="slider__items">
                  <div
                    className="slider__item active"
                    style={{
                      backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/EOS70D_18-135STM.jpg/300px-EOS70D_18-135STM.jpg)"
                    }}
                  />
                  <div
                    className="slider__item"
                    style={{
                      backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/EOS70D_18-135STM.jpg/300px-EOS70D_18-135STM.jpg)"
                    }}
                  />
                  <div
                    className="slider__item"
                    style={{
                      backgroundImage:
                        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/EOS70D_18-135STM.jpg/300px-EOS70D_18-135STM.jpg)"
                    }}
                  />
                </div>
                <div className="slider__indicators">
                  <span className="slider__indicator active" />
                  <span className="slider__indicator" />
                  <span className="slider__indicator" />
                </div>
              </div>
              <div className="product-details__info">
                <h1>{this.props.product.productname}</h1>
                <div className="rating">
                  <div className="rating__stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                  </div>
                  <div className="rating__data">2 reviews</div>
                </div>
                <div className="product-details__amount">
                  ${this.props.product.price}
                </div>
                <p className="product-details__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.
                </p>
                <div className="product-details__add">
                  <div className="increment-control">
                    <a href="#" className="increment-control__action">
                      -
                    </a>
                    <input
                      type="text"
                      className="form-control"
                      title="Qty"
                      value="1"
                    />
                    <a href="#" className="increment-control__action">
                      +
                    </a>
                  </div>
                  <button href="#" className="btn btn--primary">
                    Add to cart
                  </button>
                </div>
                <div className="product-details__meta">
                  Categories:{this.props.product.category}
                  <a rel="tag" href="#">
                    {this.props.product.category}
                  </a>
                  ,{" "}
                </div>
              </div>
            </section>
          </div>
        </Fragment>
      );
    }
    return <>{product}</>;
  }
}

const mapStateToProps = state => {
  return {
    product: state.selectedProduct
  };
};

export default connect(mapStateToProps)(ProductDetails);
