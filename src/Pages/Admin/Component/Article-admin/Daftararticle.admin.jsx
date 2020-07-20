import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftararticle = ()=>{

    const collection="article";
    const title = "Article";
   const  columns= [
    { title: 'Judul', field: 'title' },
    { title: 'Deskripsi', field: 'desc' },
    { title: 'Gambar', field: 'cover' },
    { title: 'Kategory', field: 'category' },
    { title: 'Tanggal Pembuatan', field: 'createdAt' },
  ]

    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftararticle;