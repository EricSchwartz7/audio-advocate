import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Table, Loader, Card, Icon, Dropdown } from 'semantic-ui-react'
import { fetchData, sortPrice, sortPriceHigh, sortRating, sortNumReviews, filterConnection } from '../actions'
import ProductRow from './ProductRow'
import ProductCard from './ProductCard'
import '../css/ProductList.css';

class ProductList extends Component {

  constructor() {
    super()

    this.state = {sorted: ""}
  }

  componentWillMount() {
    this.props.fetchData();
  }

  sortRating() {
    this.props.sortRating();
    this.setState({sorted: "rating"});
  }

  sortNumReviews() {
    this.props.sortNumReviews();
    this.setState({sorted: "numReviews"});
  }

  sortPrice() {
    this.props.sortPrice();
    this.setState({sorted: "price"});
  }

  sortPriceHigh() {
    this.props.sortPriceHigh();
    this.setState({sorted: "priceHigh"});
  }

  checkSelected(sorter) {
    return (sorter === this.state.sorted) ? "sorter-link selected" : "sorter-link"
  }

  filterConnection(event) {
    if (event) {
      console.log(event.target.textContent)
      this.props.filterConnection(event.target.textContent);
    }
  }

  render() {

    var connectionOptions = [
      {text:'Thunderbolt', value:'Thunderbolt'},
      {text:'FireWire', value:'FireWire'},
      {text:'USB', value:'USB'},
      {text:'PCI', value:'PCI'}
    ]

    if (this.props.products.length > 0) {
      return(

        <div className="product-list">
          <div id="sorter">
            <h3>
              <span className="sorter-text">Sort by:</span>
              <a onClick={this.sortRating.bind(this)} className={this.checkSelected("rating")}>Average Rating</a>
              <a onClick={this.sortNumReviews.bind(this)} className={this.checkSelected("numReviews")}>Number of Reviews</a>
              <a onClick={this.sortPrice.bind(this)} className={this.checkSelected("price")}>Price - Low to High <Icon name='sort content ascending' /></a>
              <a onClick={this.sortPriceHigh.bind(this)} className={this.checkSelected("priceHigh")}>Price - High to Low <Icon name='sort content descending' /></a>
            </h3>
            <Dropdown className='filter' selection options={connectionOptions} placeholder='Filter: Connection Type' onClose={this.filterConnection.bind(this)} />
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
    ratings: state.ratings,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchData, sortPrice, sortPriceHigh, sortRating, sortNumReviews, filterConnection}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductList)
