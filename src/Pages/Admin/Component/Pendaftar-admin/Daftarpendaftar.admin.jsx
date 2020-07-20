import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftarpendaftar = ()=>{

    const collection="pendaftar";
    const title = "Kritik & Pesan";
   const  columns= [
    { title: 'Nama', field: 'displayName' },
    { title: 'Tanggal Lahir', field: 'lahir' },
    { title: 'Alamat', field: 'alamat' },
    { title: 'Pekerjaan', field: 'pekerjaan' }]

    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftarpendaftar;