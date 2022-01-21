import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const UseFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(imgs => { 
            setTimeout( () => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
        });
    }, [category]);

    return state;

}