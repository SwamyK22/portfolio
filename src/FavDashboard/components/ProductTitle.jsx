import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as Star } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { addFavData, removeFav } from '../redux/store';
import { useNavigate } from 'react-router';

function ProductTitle({ title, id }) {

    const { favData } = useSelector((state) => state);
    const dispatch = useDispatch();

    const nav = useNavigate();

    return (
        <div onClick={() => nav('product', { state: id })} className='productTitle'>
            <p>{title}</p>
            <FontAwesomeIcon onClick={() => favData.includes(id) ? dispatch(removeFav(id)) : dispatch(addFavData(id))} icon={favData.includes(id) ? faStar : Star} size='lg' style={{ margin: '0 30px' }} color="gold" />
        </div>
    )
}

export default ProductTitle