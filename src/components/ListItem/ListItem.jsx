export const ListItem = ({text, id}) =>{
    return(
      
        <li>
            <input type="checkbox"/>
            <h3>{text}</h3>
            <h4>{id}</h4>
            <button className="btn btn-success">Edit</button>
            <button className="btn btn-danger ms-2">Del</button>
        </li>
       
       
    )
}