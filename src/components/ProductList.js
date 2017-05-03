import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Header, Table } from 'semantic-ui-react'
import { fetchData, fetchRatings } from '../actions'
import ProductRow from './ProductRow'

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

  componentWillMount(){
    this.props.fetchData()
    this.props.fetchRatings()
  }

  componentWillReceiveProps(nextProps){
    // debugger
  }

  render() {

    var products = [];

    if (this.props.products.length > 0){
      this.props.products.map((product) =>{
        products.push({
          brand: product.brand,
          name: product.name
        })
      })
    }
    console.log(products)

    return(
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Brand</Table.HeaderCell>
              <Table.HeaderCell>Interface</Table.HeaderCell>
              <Table.HeaderCell>Number of Inputs</Table.HeaderCell>
              <Table.HeaderCell>Connection</Table.HeaderCell>
              <Table.HeaderCell>Rating</Table.HeaderCell>
              <Table.HeaderCell>Number of Ratings</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {products.map( (product, i) =>
              <ProductRow key={i} brand={product.brand} name={product.name} />
            )}
          </Table.Body>
        </Table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchData, fetchRatings}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductList)
