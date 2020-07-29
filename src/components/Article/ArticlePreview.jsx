import React from 'react';
import {firestore} from '../../Pages/Admin/firebase/firebase.utils';
import Cardarticle from './Cardarticle';

const Article = () => {
	const [data, setdata] = React.useState([]);

	React.useEffect(() => {
		firestore.collection('article')
			.onSnapshot((snapshot) => {
				const data = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				}))
				setdata(data)
			})
	}, [])

	return (
		<section id="artikel" class="about section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Artikel</h2>
                    <h3>Artikel di <span>PKBM Hanuba</span></h3>
                    {data
                    .map((user, i) => {
                        if(i > (data.length -3 ) ){
                            return (
                                <Cardarticle
                                    key={i}
                                    title={data[i].title}
                                    desc={data[i].desc}
                                    coverurl={data[i].coverurl}
                                />
                            );
                        }
                        else{
                            return ;
                        }
                
            })}
                </div>

                

            </div>
    </section>
	);
}

export default Article;