import style from './style.module.css'
import Crad from '../../componets/card'
import { useEffect, useState } from 'react'

export default function Home() {
    const [info, setData] = useState();


    useEffect(() => {
        const get = fetch('https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=8138', {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c75e894eb2mshfa1634c0d88bc24p133d3ajsn36a8889e17c6',
                'x-rapidapi-host': 'tasty.p.rapidapi.com',
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data.results)
                setData(data.results)
            })
            .catch(erro => {
                console.log(erro);
            })


    }, [])


    return (
        <div className={style.body}>

            <div className={style.containerCrad}>
                {info && info.slice(0,12).map((info, index) => (
                    <div className={style.grid} key={index}>
                        <Crad name={info.name} descrip={info.description} image={info.thumbnail_url} />
                    </div>
 
                ))}


            </div>
        </div>
    )
}