import { useEffect, useState } from "react"
import { getGift } from "../helpers/GetGifs"

export const useFetchGifts = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() =>{
        getGift( category )
            .then( imgs => {
                setTimeout( () => {
                    console.log(imgs)
                    setstate({
                        data: imgs,
                        loading: false
                    })
                }, 3000 )
            })
    }, [category])

    return state

}