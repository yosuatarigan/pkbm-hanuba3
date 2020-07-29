import React, { Component } from 'react';
import CardTutor from './CardTutor';
import {firestore} from '../Admin/firebase/firebase.utils';


const Tutor = ()=>{
    const [data, setdata] = React.useState([]);

    React.useEffect(() => {
        firestore.collection('tutor')
        .onSnapshot((snapshot)=>{
          const data = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
          }))
          setdata(data)
        })
      }, [])

    return (
        <div className="tc pv5 black bg-lightest-blue">
            <p className="f1">Tutor Yayasan PKBM Hanuba</p>
            {data.map((user, i) => {
                return (
                    
                    <CardTutor
                        key={i}
                        nama={data[i].nama}
                        bidang = {data[i].bidang}
                        coverurl = {data[i].coverurl}
                    />
                   
                );
            })}
        </div>
    );
}
    


export default Tutor;