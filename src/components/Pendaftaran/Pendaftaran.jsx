import React from 'react';
import  firebase, { adddata} from '../../Pages/Admin/firebase/firebase.utils';

const Register = () => {

    const [namalengkap, setnamalengkap] = React.useState("");
    const [tempatdantanggallahir, settempatdantanggallahir] = React.useState("");
    const [nik, setnik] = React.useState("");
    const [nisn, setnisn] = React.useState("");
    const [jeniskelamin, setjeniskelamin] = React.useState("");
    const [agama, setagama ] = React.useState("");
    const [alamat, setalamat] = React.useState("");
    const [kelurahan, setkelurahan] = React.useState("");
    const [kecamatan,setkecamatan ] = React.useState("");
    const [kota,setkota ] = React.useState("");
    const [provinsi,setprovinsi ] = React.useState("");
    const [kodepos,setkodepos ] = React.useState("");
    const [noijazah, setnoijazah ] = React.useState("");
    const [noskhu, setnoskhu] = React.useState("");
    const [tahuntamat, settahuntamat] = React.useState("");
    const [rencanaprogram, setrencanaprogram ] = React.useState("");
    const [email, setemail ] = React.useState("");
    const [nohppribadi, setnohppribadi] = React.useState("");
    const [namaayah, setnamaayah] = React.useState("");
    const [tahunlahirayah,settahunlahirayah ] = React.useState("");
    const [pekerjaanayah,setpekerjaanayah ] = React.useState("");
    const [pendidikanterakhirayah,setpendidikanterakhirayah ] = React.useState("");
    const [nohpayah,setnohpayah ] = React.useState("");
    const [namaibu,setnamaibu ] = React.useState("");
    const [tahunlahiribu, settahunlahiribu ] = React.useState("");
    const [pekerjaanibu,setpekerjaanibu  ] = React.useState("");
    const [pendidikanterakhiribu, setpendidikanterakhiribu ] = React.useState("");
    const [nohpibu,setnohpibu ] = React.useState("");
    const [namawali, setnamawali ] = React.useState("");
    const [tahunlahirwali, settahunlahirwali ] = React.useState("");
    const [pekerjaanwali, setpekerjaanwali ] = React.useState("");
    const [pendidikanterakhirwali, setpendidikanterakhirwali ] = React.useState("");
    const [nohpwali, setnohpwali ] = React.useState("");



  
    const handleupload =async (e)=>{
        // const storageRef = firebase.storage().ref(`images/${cover.name}`)
        // await storageRef.put(cover)
        // const data =  await storageRef.getDownloadURL()
        if(namalengkap,tempatdantanggallahir,nik,jeniskelamin,agama,alamat,kelurahan,kecamatan,provinsi,noijazah,noskhu,tahuntamat,rencanaprogram,nohppribadi,namaayah,tahunlahirayah,pekerjaanayah,pendidikanterakhirayah,nohpayah,namaibu,tahunlahiribu,pekerjaanibu,pendidikanterakhiribu,nohpibu,namawali,tahunlahirwali,pekerjaanwali,pendidikanterakhirwali && nohpwali !== ""){
            adddata('pendaftar',{namalengkap,tempatdantanggallahir,nik,nisn,jeniskelamin,agama,alamat,kelurahan,kecamatan,kota,provinsi,kodepos,noijazah,noskhu,tahuntamat,rencanaprogram,email,nohppribadi,namaayah,tahunlahirayah,pekerjaanayah,pendidikanterakhirayah,nohpayah,namaibu,tahunlahiribu,pekerjaanibu,pendidikanterakhiribu,nohpibu,namawali,tahunlahirwali,pekerjaanwali,pendidikanterakhirwali,nohpwali})
            alert('data sudah ditambah')
            
         }
         else{
            
            alert("data belum lengkap")
         }
        }

    


    return (<div className="black bg-lightest-blue">
        <article className=" pv5 br3 ba bg-light-green b--black-10  w-100 pb3 w-50-m w-25-l mw6 shadow-5 center">
           
            <main className="pa4 black-80">

                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Form Pendaftaran</legend>
                    <legend className="f3 fw6 ph0 mh0">Data Pribadi</legend>
                    <div >
                        <label className="db fw6 lh-copy f6 " >Nama Lengkap</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setnamalengkap(e.target.value)}
                            type="text" name="nama" id="nama" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Tempat/tgl lahir</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>settempatdantanggallahir(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >NIK</label>
                        <input className="pa1 input-reset required ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setnik(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >NISN</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setnisn(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Jenis Kelamin</label>
                        <select id="category" name="category" onChange={(e)=>setjeniskelamin(e.target.value)}>
                        <option value="">...</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Agama</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setagama(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Alamat</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setalamat(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Kelurahan</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setkelurahan(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Kecamatan</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setkecamatan(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Kota</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setkota(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Provinsi</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setprovinsi(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Kode Pos</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setkodepos(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >No Ijazah</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setnoijazah(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >No SKHU</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setnoskhu(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Tahun tamat</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>settahuntamat(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Rencana Program</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setrencanaprogram(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Email</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setemail(e.target.value)}
                            type="email" name="bidang" id="bidang" />
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">No Hp</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnohppribadi(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <legend className="f3 fw6 ph0 mh0">Data Orang tua</legend>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Nama Ayah</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnamaayah(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Tahun Lahir</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>settahunlahirayah(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pekerjaan</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpekerjaanayah(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pendidikan terakhir</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpendidikanterakhirayah(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                     <div className="mv3">
                        <label className="db fw6 lh-copy f6">No. Hp</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnohpayah(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Nama Ibu</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnamaibu(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Tahun lahir</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>settahunlahiribu(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pekerjaan</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpekerjaanibu(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pendidikan terakhir</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpendidikanterakhiribu(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">No. Hp</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnohpibu(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                   
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Nama Wali</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnamawali(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Tahun lahir</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>settahunlahirwali(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pekerjaan</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpekerjaanwali(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pendidikan terakhir</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpendidikanterakhirwali(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">No. Hp</label>
                        <input className="b pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnohpwali(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>

                    

                </fieldset>
                <div className="">
                    <input  onClick={handleupload} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                </div>
            </main>
        </article>
        </div>)
}

export default Register;