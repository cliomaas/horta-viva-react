import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


function Example(props) {
    var items = [
        {
            name: "Imagem de carrossel 1",
            src: "Carrossel1"
        },
        {
            name: "Imagem de carrossel 2",
            src: "Carrossel2"
        },
        {
            name: "Imagem de carrossel 3",
            src: "Carrossel3"
        },

    ]

    return (
        <Carousel autoPlay={false}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <img src={require(`../../Images/${props.item.src}.png`)} alt={props.item.name} />
    )
}

export default Example;