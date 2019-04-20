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
    // let pages = [];
    // for (let i=0; i < this.state.noOfPages; i++) {
    // 		pages.push(i+1);
    // }
    // let paging = pages.map((e)=> (e === this.state.currentPage) ? (<div onClick={this.pageChanged.bind(this, e)} key={e} class="paging__number active">{e}</div>) : (<div onClick={this.pageChanged.bind(this, e)} key={e} class="paging__number">{e}</div>));
    // if(!this.props.isOnSale){
    // 	this.priceAfter = this.props.price
    // }else{
    // 	this.priceAfter = this.props.price - this.props.discount
    // }
    // let currentProducts = this.props.prdcts.slice(this.state.indexOfFirst, this.state.indexOfLast + 1);
    // console.log(currentProducts, this.props.prdcts)

    let products = this.props.products.map(p => {
      return <Product key={p.id} product={p} />;
    });
    return (
      <section className="item-listing">
        <ListingTools />
        <div className="item-listing__items item-listing--3items" style={{width:"100%"}}>
          {products}
        </div>
        {/* <div class="paging">
                <div class="paging__arrow">
                    <i class="fas fa-angle-left"></i>
                </div>
				{paging}
                <div class="paging__arrow">
                    <i class="fas fa-angle-right"></i>
                </div>
                </div> */}
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
