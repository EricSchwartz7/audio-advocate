import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ProductCard = function (props){

  const price = props.price;
  var formattedPrice = '$' + (price / 100).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

  return (
    <Card className="card" href={'/product/'+props.id}>
      <Image className="product-image" src={props.img} size="small"/>
      <Card.Content>
        <Card.Header size="small">
          {props.brand} {props.name}
        </Card.Header>
        <Card.Meta>
          <span>
            Connection: {props.connection}<br/>
            Preamps: {props.preamps}
          </span>
        </Card.Meta>
        <Card.Description>
          <h3>{formattedPrice}</h3>
        </Card.Description>
      </Card.Content>


      <Card.Content extra>
        <span className="rating">{props.rating} </span><span className="review-num">({props.numOfReviews})</span>
      </Card.Content>
    </Card>
  )

}

export default ProductCard
