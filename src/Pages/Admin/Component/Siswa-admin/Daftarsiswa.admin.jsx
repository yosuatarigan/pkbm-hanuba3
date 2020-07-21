import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftarsiswa = ()=>{

    const collection="siswa";
    const title = "SISWA";
   const  columns= [
    { title: 'Name', field: 'nama' },
    { title: 'Umur', field: 'umur' }]

    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftarsiswa;