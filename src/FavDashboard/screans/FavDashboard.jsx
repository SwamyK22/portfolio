import React from 'react'
import { useSelector } from 'react-redux'
import ProductTitle from '../components/ProductTitle'

function FavDashboard() {
    const { favData, data } = useSelector((state) => state)
    return (
        <>
            {favData.length > 0 ? (<div>{
                favData.map(x => {
                    const item = data.find(d => d.id === x);
                    return (
                        <ProductTitle key={x} title={item.name} id={x} />
                    )
                })
            }</div>) : (<h4 style={{ textAlign: 'center' }}>No Favourites</h4>)}

        </>
    )
}

export default FavDashboard