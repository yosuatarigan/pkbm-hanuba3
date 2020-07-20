import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftaralumni = ()=>{

    const collection="alumni";
    const title = "Alumni";
   const  columns= [
        { title: 'Nama', field: 'nama' },
        { title: 'Pekerjaan', field: 'pekerjaan' },
        { title: 'Tahun Ajaran', field: 'tahun' },
        { title: 'Foto', field: 'cover' },
    ]

    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftaralumni;