import React,{useState, useEffect} from 'react'
import {Row, Col} from 'antd'
import moment from 'moment'
interface Props {
    startDate: string
}

const Countdown: React.FC<Props> = ({startDate}) => {
    const start = moment(startDate, 'DD/MM/YYYY HH:mm:ss')
    const now = moment()
    const duration = now.diff(start, 'seconds')
    const [diff, setDiff] = useState<number>(duration)
    const section = ["days", "hours", "minutes"]
    const [count, setCount]= useState(0)
    const renderCountdown = section.map(item => {
        return(
            <Col span={4} className="Countdown-Number">
                {renderNumber(item,diff )}
                <p>{item}</p>
            </Col>
        )
    })

    useEffect(() => {
        const changeHandler = setInterval(()=>{
            setDiff(prev => prev + 1)
        }, 1000)
        return () => {
            clearInterval(changeHandler)
        };
    },[])
    useEffect(() => {
     
        const changeHandler = setInterval(()=>{
            setCount(prev => prev + 1)
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
    console.log(result)
    if(result < 10){
        resultToArray.unshift('0')
    }
    return resultToArray.map(item => <span>{item}</span>)
}

const renderNumber = (type:string , diff:number) => {
    const day = diff/86400
    const hour = (day - Math.floor(day))*24
    const minute =  ((hour - Math.floor(hour))*60)
    if(type === "days"){
        const dayCount =  Math.floor(day)
        return formatResult(dayCount)
    }else if (type==="hours"){
        const hourCount =  Math.floor((day - Math.floor(day))*24)
        return formatResult(hourCount)
    }else if (type==="minutes"){
        const minuteCount =  Math.floor((hour - Math.floor(hour))*60)
        return formatResult(minuteCount)
    }
}

export default Countdown
