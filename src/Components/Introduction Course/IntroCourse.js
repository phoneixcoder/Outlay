import React,{useEffect} from 'react'
import "./IntroCourse.css"

const IntroCourse = () => {
    // {
    //     "_id": "618fec4672d3aa4603c22cd0",
    //     "user": "618f764bef4aff9f336cfee8",
    //     "goalName": "House",
    //     "goalTime": 15,
    //     "goalMInvest": 10000,
    //     "goalReturns": 10000000,
    //     "courses": [],
    //     "__v": 0
    //   }
    const url="http://1c414795-c31c-4890-a288-ac7312393901.k8s.civo.com"

    const getCourse=async()=>{
        const res = await fetch(`${url}/api/v1/goal/getgoal`, {
            method : "GET",
            headers: {
                "Content-Type": "application/json",
                "authToken":localStorage.getItem('token')
            }
        })
        let json = await res.json()
        console.log(json[0]._id)
        let body={
            "cName": "Complete Guide to Stock Market investment from scratch",
            "cPercent": "50"
        }
        const nextres = await fetch(`${url}/api/v1/goal/getgoal/${json[0]._id}`, {
            method : "POST",
            headers: {
                "Content-Type": "application/json",
                "authToken":localStorage.getItem('token')
            },
            body:JSON.stringify(body)
        })
        json = await nextres.json()
        console.log(json)

    }

    useEffect(() => {
        getCourse()
    }, [])


    // api/v1/goal/getgoal
    return (
        <>
            <div className="introcourse-main--container">
                <div className="introcourse-main--block"></div>
                <div className="introcourse-main-heading--container">
                    <h1 className="introcourse-main--heading">Introduction to the course</h1>
                </div>
                <div className="introcourse-main-para--container1">
                    <p className="introcourse-main--para">A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange, as well as stock that is only traded privately, such as shares of private companies which are sold to investors through equity crowdfunding platforms. Investment in the stock market is most often done via stockbrokerages and electronic trading platforms. Investment is usually made with an investment strategy in mind. A stock is a financial instrument that represents ownership in a company or corporation and represents a proportionate claim on its assets (what it owns) and earnings (what it generates in profits). Stocks are also called shares or a company's equity</p>
                </div>
                <div className="introcourse-main-para--container2">
                    <p className="introcourse-main--para">Changes in stock prices are mostly caused by external factors such as socioeconomic conditions, inflation, exchange rates. Intellectual capital does not affect a company stock's current earnings. Intellectual capital contributes to a stock's return growth.
                        The efficient-market hypothesis (EMH) is a hypothesis in financial economics that states that asset prices reflect all available information at the current time.
                        The 'hard' efficient-market hypothesis does not explain the cause of events such as the crash in 1987, when the Dow Jones Industrial Average plummeted 22.6 percent—the largest-ever one-day fall in the United States.</p>
                </div>
                <div className="introcourse-main--button">
                    <a href="/login/dashboard" className="introcourse-main--link">Home</a>
                    <a href="/course-1-pg2" className="introcourse-main--link">Next Lecture</a>
                </div>
            </div>
        </>
    )
}

export default IntroCourse
