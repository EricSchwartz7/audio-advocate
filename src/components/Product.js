import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchReviews, fetchProduct } from '../actions'
import '../css/review.css';
import Review from './Review';

class Product extends Component{

  componentWillMount(){
    const id = this.props.match.params.id;
    this.props.fetchProduct(id);
    this.props.fetchReviews(id);
  }

  render(){

    let reviews = []

    if (this.props.reviews.length > 0){
      reviews = this.props.reviews;
    }


    return (
      <div>
        <h1>{this.props.products.name}</h1>
        {reviews.map( (review, i) =>
          // <Review key={i} rating={review.rating} author={review.author} subject={review.subject} content={review.content} />
          <Review key={i} review={review} />
        )}
      </div>
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
