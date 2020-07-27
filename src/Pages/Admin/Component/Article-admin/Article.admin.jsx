import React from 'react';
import Daftararticle from './Daftararticle.admin';
import Addarticle from './AddArticle.admin';

const Article = ()=>{
    return(
        <div flex  items-start>
            <Addarticle/>
           <Daftararticle/>
        </div>
    )
}

export default Article;