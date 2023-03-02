import React from "react";
import {FaEdit,FaTrash,FaTimes} from "react-icons/fa";
import {productData} from "../../pages/Products/index"; 

const Table = () => {
  return (
    <>

      <table className="table">
        <thead >
            <tr style={{textAlign: "center"}}>
              <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CONFIRMED</th>
                <th>ADMIN</th>
                <th>ACTION</th>
              </tr>

            </thead>
            {
                productData.map((item)=>{
                    return(
                        <>

            <tbody style={{textAlign: "center"}}>
                <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><FaTimes/></td>
                <td><FaTimes/></td>
                <td> <button className='cart-btn'> <FaEdit/> </button>
                <button className='cart-btn'> <FaTrash/> </button> 
                </td>
                </tr>
            </tbody>
                        
                        </>
                    )
                })
            }
      </table>
    </>
  );
};

export default Table;
