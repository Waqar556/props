import React, { useState } from 'react';
import './CalStyle.css';

const Cal = () => {

const [input, setInput]= useState("");
  let preValue=input;
  let lc=preValue.length-1;
  let preVaInd=preValue.charAt(lc);
  let fc=input.charAt(0);
  
  function addarr(){
    let substr=input.substring(0,lc);
    let arr_in=substr.split(",");
    let arr_l=arr_in.length;
    let sum=0;
    // for (let i = 0; i < arr_l; i++) {
    //     sum= sum+arr_in[i];
    //             }
    //    setInput( input=sum.toString());
                               }

  return (
    <>
    <div className="main_container">
    <div className="calculator_container">
    <div className="result_container">
      <input className="result" id="out_scr" type="text" value={input} readOnly/>
    </div>
    <div className="button_container">
      <input type="button" value="[" onClick={(e) => setInput(input + e.target.value)}/>
      <input type="button" value="]" onClick={(e) => setInput(input + e.target.value)}/>
      <input type="button" value="C" onClick={() => setInput("")} />
      <input className="operator" type="button" value="/" onClick={(e) => setInput((preVaInd==='/' || preVaInd==='+' || preVaInd==='*' || preVaInd==='-' || preVaInd===',') ? input:input + e.target.value)}/>
      <input type="button" value="7" onClick={(e) => setInput(input + e.target.value)} />
      <input type="button" value="8" onClick={(e) => setInput(input + e.target.value)} />
      <input type="button" value="9" onClick={(e) => setInput(input + e.target.value)}/>
      <input className="operator" type="button" value="*" onClick={(e) => setInput((preVaInd==='/' || preVaInd==='+' || preVaInd==='*' || preVaInd==='-' || preVaInd===',') ? input:input + e.target.value)}/>
      <input type="button" value="4" onClick={(e) => setInput(input + e.target.value)} />
      <input type="button" value="5" onClick={(e) => setInput(input + e.target.value)} />
      <input type="button" value="6" onClick={(e) => setInput(input + e.target.value)} />
      <input className="operator" type="button" value="-" onClick={(e) => setInput((preVaInd==='/' || preVaInd==='+' || preVaInd==='*' || preVaInd==='-' || preVaInd===',') ? input:input + e.target.value)}/>
      <input type="button" value="1" onClick={(e) => setInput(input + e.target.value)} />
      <input type="button" value="2" onClick={(e) => setInput(input + e.target.value)} />
      <input type="button" value="3" onClick={(e) => setInput(input + e.target.value)} />
      <input className="operator" type="button" value="+" onClick={(e) => setInput((preVaInd==='/' || preVaInd==='+' || preVaInd==='*' || preVaInd==='-' || preVaInd===',') ? input:input + e.target.value)}/>
      <input type="button" value="0" onClick={(e) => setInput(input + e.target.value)} />
      <input type="button" value="," onClick={(e) => setInput((preVaInd==='/' || preVaInd==='+' || preVaInd==='*' || preVaInd==='-' || preVaInd===',') ? input:input + e.target.value)} />
      <input type="button" value="log"/>
      <input className="equal" type="button" value="=" onClick={()=>{
        try{
          (fc==="[" && preVaInd==="]")?addarr():setInput(String(eval(input)))
        }
      catch(err){
            setInput(input="invalid input");
      }
      }
     } />
    </div>
    </div>
    </div>
    </>
  )
}

export default Cal