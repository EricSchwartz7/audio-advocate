import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Header, Table, Rating } from 'semantic-ui-react'
import { fetchData } from '../actions'

class ProductRow extends Component {

  render() {

    return(

      <Table.Row>
        <Table.Cell>{this.props.brand}</Table.Cell>
        <Table.HeaderCell>{this.props.name}</Table.HeaderCell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>Thunderbolt</Table.Cell>
        <Table.Cell textAlign='right'>
          <Rating icon='star' rating={4} maxRating={5} />
        </Table.Cell>
        <Table.Cell>11</Table.Cell>
      </Table.Row>

    )
  }
}

export default ProductRow
