import React,{useState, useEffect} from 'react'
import {Row, Col} from 'antd'
import moment, { Moment } from 'moment'

interface Props {
    startDate: string
}


const Countdown: React.FC<Props> = ({startDate}) => {
    const start = moment(startDate, 'DD/MM/YYYY HH:mm:ss')
    const [now, setNow] = useState<Moment>()
    const different = now && start && moment.duration(now.diff(start))._data
    const section = ["days", "hours", "minutes", "seconds"]

    const renderCountdown = different && section.map((item, id) => {
        return(
            <Col key={id} span={4} className="Countdown-Number">
                {formatResult(different[item])}
                <p>{item}</p>
            </Col>
        )
    })

    useEffect(() => {
        const changeHandler = setInterval(()=>{
            setNow(moment())
        }, 1000)
        return () => {
            clearInterval(changeHandler)
        };
    },[])

    
    return (
        <Row className="Countdown">
            <p>time it takes me to land a second software developer job</p>
            <Row justify='center'>
                {renderCountdown}
            </Row>
        </Row>
    )
}
const formatResult = (result:number) => {
    let resultToArray = result.toString().split('')
    if(result < 10){
        resultToArray.unshift('0')
    }
    return resultToArray.map((item, id) => <span key={id}>{item}</span>)
}
export default Countdown
