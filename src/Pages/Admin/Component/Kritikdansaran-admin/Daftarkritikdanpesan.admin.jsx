import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftarkritikdanpesan = ()=>{

    const collection="kritikdanpesan";
    const title = "Kritik & Pesan";
   const  columns= [
    { title: 'Nama', field: 'displayName' },
    { title: 'Kritik & Pesan', field: 'kritikdanpesan' }]

    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftarkritikdanpesan;