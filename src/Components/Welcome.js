import { useEffect, useState } from "react"


export default function Welcome(props) {


    return (
        <div className="container">
            <div>
                <h1>Welcome to OddsMakers</h1>
            </div>
            <h3>Choose a sport:</h3>
            <div className="welcomeSports">
                <div>American Football</div>
                <div>Aussie Rules</div>
                <div>Baseball</div>
                <div>BasketBall</div>
                <div>Cricket</div>
                <div>Golf</div>
                <div>Soccer</div>
            </div>


        </div>


    )
}