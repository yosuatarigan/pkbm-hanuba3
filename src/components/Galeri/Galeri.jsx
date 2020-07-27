import React from 'react';
import Cardgaleri from './Cardgaleri';
import {firestore} from '../../Pages/Admin/firebase/firebase.utils';


const Galeri = () => {
	const [data, setdata] = React.useState([]);

	React.useEffect(() => {
		firestore.collection('galeri')
			.onSnapshot((snapshot) => {
				const data = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				}))
				setdata(data)
			})
	}, [])

	return (
		<div >
			<article className='center pv5'>
				<header className="tc b--black-70 pv4">
					<h3 className="f2 fw7 ttu tracked lh-title mt0 mb2 avenir">Galeri</h3>
					{/* <h4 class="f3 fw4 i lh-title mt0">Siem Reap, Cambodia</h4> */}
				</header>

				<article>
					<div class="cf pa2">
					{data.map((user, i) => {
                return (
                    <Cardgaleri
                        key={i}
                        title={data[i].title}
						desc={data[i].desc}
						coverurl={data[i].coverurl}
                    />
                );
            })}
					</div>
				</article>
			</article>
		</div>
	);
}

export default Galeri;