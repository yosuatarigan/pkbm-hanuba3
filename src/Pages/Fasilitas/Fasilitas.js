import React from 'react';
import CardFasilitas from './CardFasilitas';
import {firestore} from '../Admin/firebase/firebase.utils';



const Fasilitas = () => {

  const [data, setdata] = React.useState([]);

    React.useEffect(() => {
        firestore.collection('fasilitas')
        .onSnapshot((snapshot)=>{
          const data = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
          }))
          setdata(data)
        })
      }, [])


  return (
    <div className="pv2 black bg-washed-green">
      <p className=" tc f2"> Fasilitas</p>
      
      


      <section className="mw7 center avenir">
        
      {data.map((user, i) => {
                return (
                    
                    <CardFasilitas
                        key={i}
                        namafasilitas={data[i].namafasilitas}
                        desc = {data[i].desc}
                        coverurl = {data[i].coverurl}
                    />
                   
                );
            })}




       
      </section>
    </div>
  );
}

export default Fasilitas;