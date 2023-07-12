import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../Styles/additems.css'
const AddItem = () => {

    let [name, setName]=useState("")
    let [Quantity, setQuantity]=useState("")
    let [Price, setPrice]=useState("")
    let [imageurl, setImageurl]=useState("")

    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();
        let itemdata = {name,Quantity,Price,imageurl}

        fetch('http://localhost:4007/Items',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(itemdata)
         })
         alert(`Item Added Successfully`)
         navigate('/manager/itemslist')
    }
    return ( 
        <div className="container">
            <div className="H">
                <h1>Add New</h1>
            </div>
            <div className="frame">
            <div className="addItems">
            <h1>Add a New Item</h1>
            <div className="itemsform">
               <form action="" onSubmit={handleSubmit}>
               <div className="name">
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} required placeholder="Enter the Name" onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="quantity">
                    <label htmlFor="">Quantity</label>
                     <input type="number" value={Quantity} min='1'required placeholder="Enter the Quantity" onChange={(e)=>setQuantity(e.target.value)}/>
                </div>
                <div className="price">
                    <label htmlFor="">Price</label>
                     <input type="number" value={Price} required placeholder="Enter The Price" onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div className="photo">
                    <label htmlFor="">Image Url</label>
                     <input type="link" value={imageurl} minLength='10' maxLength='10' required placeholder="Enter the Image Url" onChange={(e)=>setImageurl(e.target.value)}/>
                </div>
                <button className="Additem">Add Item</button>
               </form>
            </div>
            
        </div>
        </div>
        </div>
     );
}
 
export default AddItem;