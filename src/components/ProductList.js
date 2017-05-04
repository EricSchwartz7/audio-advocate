import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { fetchData, fetchRatings, sortPrice, sortPriceHigh, sortRating } from '../actions'
import ProductRow from './ProductRow'
import '../css/ProductList.css';

class ProductList extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     brand: 'UAD',
  //     name: 'Apollo Twin Duo',
  //     inputs: 2,
  //     connection: 'Thunderbolt',
  //     rating: 4,
  //     numOfRatings: 12
  //   }
  // }

  componentWillMount() {
    this.props.fetchData();
    this.props.fetchRatings();
  }

  sortRating(products) {

    // NEED TO ATTACH CALCULATED RATING TO PRODUCT. MAYBE THERE'S A WAY TO DO THIS ON THE BACK END

    var sortedProducts = products.sort(function compare(a, b) {
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    })
    this.props.sortRating(sortedProducts);
  }

  sortPrice() {
    this.props.sortPrice();
  }

  sortPriceHigh() {
    this.props.sortPriceHigh();
  }

  render() {

    // if (this.props.products.length > 0 && this.props.ratings.length > 0){
    //   var that = this;
    //   var products = this.props.products.map((product, i) =>{
    //     const avgRating = Object.keys(that.props.ratings[i])[0];
    //     const numOfReviews = that.props.ratings[avgRating];
    //     return {
    //       id: product.id,
    //       brand: product.brand,
    //       name: product.name,
    //       img: product.img,
    //       price: product.price,
    //       rating: avgRating,
    //       numOfReviews: numOfReviews
    //     };
    //   })
    // };
    console.log("rendering")
    if (this.props.products.length > 0 && this.props.ratings.length > 0) {
      return(
        <div>
          <div id="sorter">
            <h3>
              <span className="sorter-text">Sort by:</span>
              <a onClick={this.sortRating.bind(this, this.props.products)} className="sorter-link">Average Rating</a>
              <a onClick={this.sortPrice.bind(this)} className="sorter-link">Price - Low to High</a>
              <a onClick={this.sortPriceHigh.bind(this)} className="sorter-link">Price - High to Low</a>
            </h3>
          </div>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Brand</Table.HeaderCell>
                <Table.HeaderCell>Interface</Table.HeaderCell>
                <Table.HeaderCell>Retail Price</Table.HeaderCell>
                <Table.HeaderCell>Number of Inputs</Table.HeaderCell>
                <Table.HeaderCell>Connection</Table.HeaderCell>
                <Table.HeaderCell>Rating</Table.HeaderCell>
                <Table.HeaderCell>Number of Ratings</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.props.products.map( (product, i) =>
                <ProductRow
                  key={i}
                  id={product.id}
                  brand={product.brand}
                  name={product.name}
                  price={product.price}
                  img={product.img}
                  rating={Object.keys(this.props.ratings[i])[0]}
                  numOfReviews={Object.values(this.props.ratings[i])[0]}/>
              )}
            </Table.Body>
          </Table>
        </div>
      )
    }
    return (<p>Loading...</p>)
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    ratings: state.ratings
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchData, fetchRatings, sortPrice, sortPriceHigh, sortRating}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductList)
