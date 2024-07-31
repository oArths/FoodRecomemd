import style from './style.module.css'
export default function Crad({ name, image, descrip }) {
    return (
        <div className={style.Main}>
            <div className={style.ConatinerImage}>
                <img src={image} alt="" className={style.imge} />
            </div>
            <div className={style.Cont}>
                <div className={style.ConatinerNmae}>
                    <div className={style.name}>
                        {name}
                    </div>
                </div>
                <div className={style.ConatinerDESCRI}>
                    <div className={style.descrip}>
                        {descrip}
                    </div>
                </div>
            </div>
        </div>
    )
}