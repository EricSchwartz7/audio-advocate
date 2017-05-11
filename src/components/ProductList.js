import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Table, Loader, Card } from 'semantic-ui-react'
import { fetchData, sortPrice, sortPriceHigh, sortRating } from '../actions'
import ProductRow from './ProductRow'
import ProductCard from './ProductCard'
import '../css/ProductList.css';

class ProductList extends Component {

  componentWillMount() {
    this.props.fetchData();
  }

  sortRating() {
    this.props.sortRating();
  }

  sortPrice() {
    this.props.sortPrice();
  }

  sortPriceHigh() {
    this.props.sortPriceHigh();
  }

  render() {

    if (this.props.products.length > 0) {
      return(
        // <div>
        //   <div id="sorter">
        //     <h3>
        //       <span className="sorter-text">Sort by:</span>
        //       <a onClick={this.sortRating.bind(this)} className="sorter-link">Average Rating</a>
        //       <a onClick={this.sortPrice.bind(this)} className="sorter-link">Price - Low to High</a>
        //       <a onClick={this.sortPriceHigh.bind(this)} className="sorter-link">Price - High to Low</a>
        //     </h3>
        //   </div>
        //   <Table celled padded>
        //     <Table.Header>
        //       <Table.Row>
        //         <Table.HeaderCell>Brand</Table.HeaderCell>
        //         <Table.HeaderCell>Interface</Table.HeaderCell>
        //         <Table.HeaderCell>Retail Price</Table.HeaderCell>
        //         <Table.HeaderCell>Number of Preamps</Table.HeaderCell>
        //         <Table.HeaderCell>Connection</Table.HeaderCell>
        //         <Table.HeaderCell>Rating</Table.HeaderCell>
        //         <Table.HeaderCell>Number of Ratings</Table.HeaderCell>
        //       </Table.Row>
        //     </Table.Header>
        //
        //     <Table.Body>
        //       {this.props.products.map( (product, i) =>
        //         <ProductRow
        //           key={i}
        //           id={product.id}
        //           brand={product.brand}
        //           name={product.name}
        //           price={product.price}
        //           connection={product.category}
        //           preamps={product.alt_category}
        //           img={product.img}
        //           rating={product.avg_rating}
        //           numOfReviews={product.num_ratings}/>
        //       )}
        //     </Table.Body>
        //   </Table>
        // </div>
        <div className="product-list">
          <div id="sorter">
            <h3>
              <span className="sorter-text">Sort by:</span>
              <a onClick={this.sortRating.bind(this)} className="sorter-link">Average Rating</a>
              <a onClick={this.sortPrice.bind(this)} className="sorter-link">Price - Low to High</a>
              <a onClick={this.sortPriceHigh.bind(this)} className="sorter-link">Price - High to Low</a>
            </h3>
          </div>
          <div className="cards">
            <Card.Group>
              {this.props.products.map( (product, i) =>
                <ProductCard
                  key={i}
                  id={product.id}
                  brand={product.brand}
                  name={product.name}
                  price={product.price}
                  connection={product.category}
                  preamps={product.alt_category}
                  img={product.img}
                  rating={product.avg_rating}
                  numOfReviews={product.num_ratings}/>
              )}
            </Card.Group>
          </div>
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
    ratings: state.ratings
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchData, sortPrice, sortPriceHigh, sortRating}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductList)
