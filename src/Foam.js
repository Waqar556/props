import React from 'react';

const Foam = (props) => {
const {data}=props;

console.log(data)

  return (
    <form>
      {data.map((users)=>{
         return(
            <>
            <label>{users.name}</label>
            <input type={users.type}/><br/>
            </>
         )
      })
    }
    </form>
  )
}

export default Foam