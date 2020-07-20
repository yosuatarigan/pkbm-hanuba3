import React from 'react';
import Materialtable from '../../Component/Materialtable-admin/Materialtable.admin';

const Daftartutor = ()=>{

    const collection="tutor";
    const title = "Tutor";
   const  columns= [
    { title: 'Nama', field: 'nama' },
    { title: 'Bidang', field: 'bidang' },
    { title: 'Gambar', field: 'cover' },
  ]

    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftartutor;