import React, { useState } from 'react'
import {AddCategory} from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Dragon Ball'] )

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr />

            <AddCategory setCategories={ setCategories } />

            <ul>
                {
                    categories.map( category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ul>
        </>
    )
}

export default GifExpertApp;
