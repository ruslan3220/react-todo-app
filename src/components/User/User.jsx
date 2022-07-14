
import "./User.scss"
export const User = ({img, name, age}) =>{
    return(
        <li className="user">
            <img src={img} alt="User img" />
            <h3>{name}</h3>
            <p>{age} yosh</p>
        </li>
    )
} 