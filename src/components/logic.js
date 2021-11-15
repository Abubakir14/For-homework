import React from "react";
import { useState, useEffect } from "react";
import classes from './logic.module.css'

function Fetch() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((data) => data.json())
        .then((data) => {
            setState([...data])
        }
        )
    }

    
    )
        return(
            <div className={classes.wrapper}>
                {state.map(item => {
                    return (
                        <div className={classes.div}>
                            <span className={classes.nav}>
                            <h3 className={classes.title}>{item.title}</h3>
                            <h1 className={classes.id}>{item.id}</h1>
                            </span>
                                <img className={classes.img} src={item.thumbnailUrl} />
                        </div>
                        )
                        
                    }
                    )
                }
                </div>
                )
}


export default Fetch