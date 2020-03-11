import React from 'react'
import {Row} from 'antd'

interface Props {
    count: number
}

const JobOffer: React.FC<Props> = ({count}) => {
    return (
        <Row className="JobOffer">
          <h1>TOTAL JOB OFFERS</h1>
          <h1>{count}</h1>
        </Row>
    )
}

export default JobOffer
