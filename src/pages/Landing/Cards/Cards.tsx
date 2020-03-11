import React,{useState, useEffect} from 'react'
import {Row, Col} from 'antd'
import axios from 'axios'

interface Card{
    title:string,
    count:string
}
interface Props{
    data: Card[]
}

// Cards
const Cards: React.FC<Props | undefined> = ({data}) => {
    console.log(data);
    const renderCard = useRenderCard(data)
    return (
    <Row className="Cards" justify='space-around'>
        {renderCard}
    </Row>
    )
}

// Single Card
const Card: React.FC<Card> = ({title, count}) => {
    return(
        <Col className="Card" span={4}>
            <h4>{title}</h4>
            <p>{count}</p>
        </Col>
    )
}

//Render card to view
const useRenderCard = (data:Card[]) => {
    const renderCard = data && data.map(item => <Card title={item.title} count={item.count}/>)
    return renderCard
}

export default Cards
