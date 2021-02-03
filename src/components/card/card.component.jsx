import Reat from 'react'

import '../card/card-styles.css'

export const Card = (props) =>{
    return (
        <div className="card-container">
            <img src= {`https://robohash.org/R${props.monster.id}.png?set=set1&size=180x180`}  alt="monster"/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}