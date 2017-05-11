import React from 'react';
import { Header, Table, Rating, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function ProductRow(props) {

  var id = props.id.toString();

  var price = props.price;
  var formattedPrice = '$' + (price / 100).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

  return(

    <Table.Row>
      <Table.Cell>{props.brand}</Table.Cell>
      <Table.Cell className="title-cell">
        <Header>
          <Link to={'/product/'+id}>
            {props.name}
            <Header.Subheader>
              <Image src={props.img} size='small' className="product-img" />
            </Header.Subheader>
          </Link>
        </Header>
      </Table.Cell>
      <Table.Cell>{formattedPrice}</Table.Cell>
      <Table.Cell>{props.preamps}</Table.Cell>
      <Table.Cell>{props.connection}</Table.Cell>
      <Table.Cell><h4>{props.rating}</h4>
        {/* <Rating icon='star' rating={props.rating} maxRating={5} /> */}
      </Table.Cell>
      <Table.Cell>{props.numOfReviews}</Table.Cell>
    </Table.Row>

  )
}
