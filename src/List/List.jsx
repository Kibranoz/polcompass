import { useState } from 'react';
import { useEffect } from 'react';

import CONFIG from '../parameters.js';

import  ListItem  from './ListItem.jsx';

export default function List() {
    const [page, setPage] = useState(1)
    const [listElements, setListElements] = useState([])
    useEffect(() => {
        let isMounted = true
        async function fetchData() {
            fetch(CONFIG.URL+"/summary?perPage=10&page="+page, {method:  "GET"})
            .then(res=>res.json())
            .then((data)=> {
            if (isMounted) {
                data.forEach((item,idx) => {
                    setListElements((prevListItem)=> [...prevListItem, <ListItem key={idx} item={item}></ListItem>])
            })
        }
        })
        }
        fetchData()
        console.log("loaded")
        return () => {
            isMounted = false
        }
    }, [])

    return (
        <>
      {listElements}
      </>  
    )}
