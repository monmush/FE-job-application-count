import React,{useState, useEffect} from 'react'
import Countdown from './Countdown/Countdown'
import AnimationLeft from '../../assets/img/animation-left.svg'
import AnimationRight from '../../assets/img/animation-right.svg'
import Cards from './Cards/Cards'
import JobOffer from './JobOffer/JobOffer';
import Social from './Social/Social';
import axios from 'axios'

//Types 
interface Card{
    title:string,
    count:string
}
interface Statistic{
    id: number, 
    startDate: string, 
    statistics: Card[],
    jobOffer: number
}

//Main component
const Landing:React.FC = () => {

    const [data, setData] = useState<Statistic | undefined>()

        useEffect(() => {
            axios.get(process.env.REACT_APP_BASE_URL + 'statistics')
            .then(({data})=>{
                setData(data)
            })
            .catch(err => console.log(err))
        }, [])
    return (
        <div className="Landing">
            {/* Animation background */}
            <img src={AnimationLeft} alt="AnimationLeft" id="AnimationLeft" className="Landing-Animated-Background"/>
            <img src={AnimationRight} alt="AnimationRight" id="AnimationRight" className="Landing-Animated-Background"/>
            <Social/>
            {data && (
                <React.Fragment>
                    <Countdown startDate={data.startDate}/>
                    <JobOffer count={data.jobOffer}/>
                    <Cards data={data.statistics}/>}
                </React.Fragment>
            )}
        </div>
    )
}

export default Landing
