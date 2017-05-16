import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchReviews, fetchProduct, fetchAmazon } from '../actions'
import { Loader, Icon } from 'semantic-ui-react'
import '../css/review.css';
import Review from './Review';

class Product extends Component{

  componentWillMount(){
    const id = this.props.match.params.id;
    this.props.fetchProduct(id);
    this.props.fetchReviews(id);
    this.props.fetchAmazon(id);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){

    if (this.props.reviews.length > 0){

      return (
        <div>
          <h1>{this.props.products.brand} {this.props.products.name}</h1>
          <div className='amazon-iframe'>
            <h5>{this.props.amazon[0] || <Icon loading name='spinner' className='small-loader' />}</h5>
            {this.props.amazon[1] ? <iframe src={this.props.amazon[1]} /> : ""}
          </div>
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
    reviews: state.reviews,
    amazon: state.amazon
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchReviews, fetchProduct, fetchAmazon}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Product)
