import React, { Component } from 'react';
import CardAlumni from './CardAlumni';
import firebase, {adddata, firestore} from '../Admin/firebase/firebase.utils';


const Alumni= ()=>{
  const [data, setdata] = React.useState([]);
  const [nama, setnama] = React.useState([]);
  const [pekerjaan, setpekerjaan] = React.useState([]);
  const [tahun, settahun] = React.useState([]);
  const [cover, setcover] = React.useState([]);
  const [coverurl, setcoverurl] = React.useState([]);

  const onsubmitalumni =async (e)=>{
    const storageRef = firebase.storage().ref(`images/${cover.name}`)
    await storageRef.put(cover)
    const data =  await storageRef.getDownloadURL()
   adddata('alumni',{nama,pekerjaan,tahun,coverurl : data})
   alert('data berhasil ditambahkan')
}

React.useEffect(() => {
  firestore.collection('alumni')
  .onSnapshot((snapshot)=>{
    const data = snapshot.docs.map((doc)=>({
      id: doc.id,
      ...doc.data()
    }))
    setdata(data)
  })
}, [])

  return (
    <div className='tc pv5'>
        <p className="f3 bold">ALUMNI YAYASAN PKBM HANUBA</p>

        <article className="bg-light-green br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">

                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">ALUMNI</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Nama</label>
                        <input onChange={(e)=>setnama(e.target.value)} className="pa2 input-reset ba bg-transparent   w-100"

                            type="text" name="nama" id="nama" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Pekerjaan</label>
                        <input onChange={(e)=>setpekerjaan(e.target.value)} className="pa2 input-reset ba bg-transparent  w-100"

                            type="text" name="pekerjaan" id="pekerjaan" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Tahun Ajaran</label>
                        <input onChange={(e)=>settahun(e.target.value)} className="b pa2 input-reset ba bg-transparent   w-100"

                            type="text" name="tahunajaran" id="tahunajaran" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Foto</label>
                        <input onChange={(e)=>setcover(e.target.files[0])} className="b pa2 input-reset ba bg-transparent   w-100"

                            type="file" name="tahunajaran" id="foto" />
                    </div>
                </fieldset>
                <div className="">
                    <input onClick={onsubmitalumni} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                </div>
            </main>
        </article>
        
        {data.map((user, i) => {
            return (
                <CardAlumni
                    key={i}
                    nama={data[i].nama}
                    coverurl={data[i].coverurl}
                    pekerjaan={data[i].pekerjaan}
                    tahun ={data[i].tahun}
                />
            );
        })}

    </div>
);
}

export default Alumni;