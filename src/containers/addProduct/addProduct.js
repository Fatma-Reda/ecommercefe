import React, { Component } from 'react';
import product from '../../assets/img/products/product-grey-7.jpg'
class AddProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
				productName: '',
				description: '',
				price:'',
				discount:'',
				category:'',
				isOnSale: false,
				userid:null
		};
	  }
	
	  handleChange = (key,value) => {
			this.setState({[key]:value})
			// window.console.log(this.state, key, value);		
	  };

	//   change = (event) => {
	// 		let newState = {...this.state};
	// 		newState[event.target.name] = event.target.value;
	// 		this.setState({product: newState}); 
	//   }

	  saleChanged = (event) => {
		  if(event.target.value === "isOnSale")
		  {
			  this.setState({
				  ...this.state,
				  isOnSale: true
			  })
		  }
		  else
		  {
			this.setState({
				...this.state,
				isOnSale: false
			})
		  }
	  }

	  paymentChanged = (event) => {
		  let newArr = [...this.state.paymentTypes];
		  if(event.target.checked)
		  {
			  newArr.push(event.target.name);
		  }
		  else
		  {
				const index = newArr.findIndex(paymentType => paymentType === event.target.name)
				newArr.splice(index, 1);
		  }
			this.setState({
				...this.state,
				paymentTypes: newArr
			})
	  }

	//   handleSubmit(event) {
	// 	alert('A name was submitted: ' + this.state.value);
	// 	event.preventDefault();
	//   }

	
	render() {

		let options = (
            <>
                {
                    this.props.categories.map((category, index) => {
                        return <option key={index} value={category.name} >{category.name}</option>
                    })
                }
            </>
        );
		return(
			<div className="add-product container">
			<form action="" onSubmit ={this.handleSubmit}>
				<div className="add-product__images slider">
					<div className="add-product__image-actions">
						<div className="add-product__image-action">
							<a href="#"><i className="fas fa-plus-square"></i></a>
							<a href="#"><i className="fas fa-edit"></i></a>
							<a href="#"><i className="fas fa-trash-alt"></i></a>
						</div>
					</div>
					<div className="slider__items">
						<div className="slider__item active" style={{backgroundImage: `url(${product})`}}></div>
						<div className="slider__item" style={{backgroundImage: `url(${product})`}}></div>
						<div className="slider__item" style={{backgroundImage: `url(${product})`}}></div>
					</div>
					<div className="slider__indicators">
						<span className="slider__indicator active"></span>
						<span className="slider__indicator"></span>
						<span className="slider__indicator"></span>
					</div>
				</div>
				<div className="add-product__data">
					<div className="form-controls">
						<section className="tabs">
							<div className="tabs__headers">
								<div className="tabs__header active">
									English
								</div>
								<div className="tabs__header">
									Arabic
								</div>
							</div>
							<div className="tabs__bodies">
								<div className="tabs__body active">
									<div className="form-group invalid">
										<label for="">Name</label>
										<input className="form-control" type="text" 
										value={this.state.value}
										onChange={(event)=>this.handleChange(event.target.name,event.target.value)} name="productName" id=""/>
									</div>
									<div className="form-group">
										<label for="">Description</label>
										<textarea className="form-control" value={this.state.value} 
										onChange={(event)=>this.handleChange(event.target.name , event.target.value)} name="description" id="" cols="30" rows="4"></textarea>
									</div>
								</div>
								<div className="tabs__body ">
									<div className="form-group invalid">
										<label for="">Name</label>
										<input className="form-control" type="text" name="" id=""/>
									</div>
									<div className="form-group">
										<label for="">Description</label>
										<textarea className="form-control" name="" id="" cols="30" rows="4"></textarea>
									</div>
								</div>
							</div>
						</section>
	
						<div className="form-group">
							<label for="">Price</label>
							<input className="form-control" type="text" name="price" id=""
							value={this.state.value}
							onChange={(event)=>this.handleChange(event.target.name,event.target.value)} />
						</div>
						<div className="add-product__discount">
							<div className="form-group">
								<label for="">Satus</label>
								<div className="form-group__radios">
									<div className="form-group__radio"><input type="radio" name="toggleDiscountOptions" value="isOnSale" onChange={this.saleChanged} checked={this.state.isOnSale}/><span>On Sale</span></div>
									<div className="form-group__radio"><input type="radio" name="toggleDiscountOptions" value="isNotOnSale" onChange={this.saleChanged} checked={!this.state.isOnSale}/><span>Not On Sale</span></div>
								</div>
							</div>
							<div className="form-group">
								<label for="">Discount</label>
								<input className="form-control" type="text" name=""  disabled={!this.state.isOnSale}/>
							</div>
						</div>

						<div className="form-group">
							<label for="">Category</label>
							<select className="form-control" value={this.state.category} name="category" onChange={(event)=> {this.handleChange(event.target.name, event.target.value)}}>
								{options}
							</select>
						</div>
	
						<div className="taged-textbox form-group">
							<label className="taged-textbox__lable" for="">Tags</label>
							<div className="taged-textbox__data">
								<div className="taged-textbox__tags">
									<div className="taged-textbox__tag"><span>tag1</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag2</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag3</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag4</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag5</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag6</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag7</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag8</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag9</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag10</span><a className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
								</div>
								<div className="taged-textbox__clear">
									<a href="#"><i className="fas fa-times"></i></a>
								</div>
							</div>
							<input className="taged-textbox__textbox form-control" type="text" name="" id=""/>
						</div>
						<div className="add-product__actions">
							<button href="#" className="btn btn--gray">Cancel</button>
							<button href="#" className="btn btn--primary">Add</button>
							{/* <input type="submit" value="Submit"/> */}
						</div>
					</div>
				</div>
			</form>
		</div>
		)

	}
}
export default AddProduct;
