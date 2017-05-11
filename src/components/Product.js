import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchReviews, fetchProduct } from '../actions'
import { Loader } from 'semantic-ui-react'
import '../css/review.css';
import Review from './Review';

class Product extends Component{

  componentWillMount(){
    const id = this.props.match.params.id;
    this.props.fetchProduct(id);
    this.props.fetchReviews(id);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){

    if (this.props.reviews.length > 0){

      return (
        <div>
          <h1>{this.props.products.brand}{this.props.products.name}</h1>
          {this.props.reviews.map( (review, i) =>
            // <Review key={i} rating={review.rating} author={review.author} subject={review.subject} content={review.content} />
            <Review key={i} review={review} />
          )}
        </div>
      )
    }
    return (
      <Loader active />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    products: state.products,
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchReviews, fetchProduct}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Product)
