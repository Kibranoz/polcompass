import { useState } from 'react'
import { useEffect } from 'react'

import CONFIG from '../parameters.js'

import ListItem from './ListItem.jsx'
import "./List.css"

export default function List() {
    const [page, setPage] = useState(1)
    const [listElements, setListElements] = useState([])
    const [pagesLinks, setPagesLinks] = useState([])
    function setNewPage(newPage) {
        if (page !== newPage) {
            setListElements([])
            setPagesLinks([])
            setPage(newPage)
        }
    }
    useEffect(() => {
        let isMounted = true
        async function fetchData() {
            fetch(CONFIG.URL + "/summary?perPage=10&page=" + page, { method: "GET" })
                .then(res => res.json())
                .then((data) => {
                    if (isMounted) {
                        data.Summaries.forEach((item, idx) => {
                            setListElements((prevListItem) => [...prevListItem, <ListItem key={idx} item={item}></ListItem>])
                        })
                        for (let i = 1; i <= data.numberOfPages; i++) {
                            console.log("setPageLinks")
                            setPagesLinks((prevPageLinks) => [...prevPageLinks, <div className={'pageLink' + (i == page ? " selected": "")} id={"pageLink" + i} key={i} onClick={() => { setNewPage(i) }}>{i}</div>])
                        }
                    }
                })
        }
        fetchData()
        return () => {
            isMounted = false
        }
    }, [page])

    return (
        <>
            {listElements}
            <div className='pageLinks'>{pagesLinks}</div>
        </>
    )
}
