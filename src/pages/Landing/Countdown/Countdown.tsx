import React from 'react'
import {Row, Col} from 'antd'

interface Props {
    
}

const Countdown: React.FC<Props> = () => {
    return (
        <Row className="Countdown">
            <p>time it takes me to land a second software developer job</p>
            <Row justify='center'>
                <Col span={4} className="Countdown-Number">
                    <span>0</span>
                    <span>1</span>
                    <p>days</p>
                </Col>:
                <Col span={4} className="Countdown-Number">
                    <span>0</span>
                    <span>1</span>
                    <p>hours</p>
                </Col>:
                <Col span={4} className="Countdown-Number">
                    <span>0</span>
                    <span>1</span>
                    <p>minutes</p>
                </Col>:
                <Col span={4} className="Countdown-Number">
                    <span>0</span>
                    <span>1</span>
                    <p>seconds</p>
                </Col>
            </Row>
        </Row>
    )
}

export default Countdown
