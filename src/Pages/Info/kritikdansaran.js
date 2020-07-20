import React from 'react';

class Kritik extends React.Component {
    constructor() {
        super()
        this.state = {
            pesankritik: '',
            nama :''
        }
    }
    
    onNamaChange = (event) => {
        this.setState({ nama: event.target.value })
      }

      onPesanChange = (event) => {
        this.setState({ pesankritik: event.target.value })
      }

      onsubmitpesan = () => {
        fetch('https://pkbm-hanuba-api.herokuapp.com/transitpesanmasuk', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nama: this.state.nama,
            pesankritik: this.state.pesankritik
          })
        })
          .then(response => response.json())
          .then(alert('Pesan sudah dikirim. '))
      }



    render() {
        return (
            <form className="tc pa4 black-80">
                <div className='tc'> 
                    <label for="comment" className="f6 b db mb2">Kritik dan Saran <span className="normal black-60"></span></label>
                     <text>Nama :</text> <input type='text' onChange={this.onNamaChange} /><br/>
                       <textarea onChange={this.onPesanChange} id="comment" name="comment" className="center db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" ></textarea>
                    <p onClick={this.onsubmitpesan} className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green" href="#0">Kirim</p>
                    
                </div>
            </form>
        );
    }
}

export default Kritik;