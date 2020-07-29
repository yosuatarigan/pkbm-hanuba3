import React from 'react';
import {adddata} from '../Admin/firebase/firebase.utils';

const Kritik = ()=>{

  const [displayName, setdisplayName] = React.useState('');
  const [kritikdanpesan, setkritikdanpesan] = React.useState('');

  const onsend = ()=>{
    adddata('kritikdanpesan',{displayName,kritikdanpesan})
  }    

  return (
    <div className="tc pa4 black-80 black bg-lightest-blue">
        <div className='tc'> 
            <label for="comment" className="f6 b db mb2">Kritik dan Saran <span className="normal black-60"></span></label>
             <text>Nama :</text> <input type='text' onChange={(e)=>setdisplayName(e.target.value)} />
             <br/>
               <textarea onChange={(e)=>setkritikdanpesan(e.target.value)} id="comment" name="comment" className="center db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" ></textarea>
            <input type='' onClick={onsend} className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green" href="#0" type="submit" value="Kirim"/ >
            
        </div>
    </div>
);
}

export default Kritik;