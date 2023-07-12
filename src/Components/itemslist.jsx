import { useState,useEffect } from "react";
import '../Styles/itemslist.css'
import { useLocation } from "react-router-dom";

const ItemsList = () => {
    let[items,setItems]=useState([])
    let location = useLocation()        

    useEffect(()=>{
        let fetchData = async () =>{
            let response = await fetch('http://localhost:4007/Items')
            let data = await response.json()
            setItems(data)
        }
        fetchData()
    },[])

    let handleremove = (id,name)=>{
        setItems(items.filter(x=> x.id !== id))
        alert(`${name} has been removed`)
    }
    return ( 
        <div className="itemslist">
            <div className="H">
                <h1>Items List:{items.length}</h1>
            </div>
            <div className="items_section">
                {items.map((data)=>(
                    <div className="items_card">
                        <div className="fl">
                        <div className="pic">
                            <img src={data.imageurl} alt="" />
                            </div>
                        <h1>{data.name}</h1>
                        <h5>{data.Quantity}</h5>
                        <h5>Price: {data.Price}</h5>
                        {location.pathname == '/manager/itemslist' && <button className="remov" onClick={()=>handleremove(data.id,data.name)}>Remove Item</button>}
                        {location.pathname == '/user/itemslist' && <button className="remov">Add Item</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default ItemsList;