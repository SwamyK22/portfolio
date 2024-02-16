import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { addFavData, removeFav } from '../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as Star } from '@fortawesome/free-regular-svg-icons'

function ProductDetails() {
    const { state: selectedId } = useLocation()
    const dispatch = useDispatch();

    const { product, favData } = useSelector((state) => ({ product: state.data.find(x => x.id === selectedId), favData: state.favData }))
    // console.log(product);
    const { id, name, price } = product;
    return (
        <div className="product-card">
            <FontAwesomeIcon icon={faArrowCircleLeft} /><br />
            <img src={""} alt={name} className="product-image" />
            <div className="product-details">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><h2 className="product-title">{name}</h2>
                    <FontAwesomeIcon onClick={() => favData.includes(id) ? dispatch(removeFav(id)) : dispatch(addFavData(id))} icon={favData.includes(id) ? faStar : Star} size='lg' style={{ margin: '0 30px' }} color="gold" />

                </div>
                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis nostrum nisi laboriosam, quis, eligendi mollitia exercitationem dicta vitae optio sunt nam esse quam animi ut illum cupiditate amet quidem!</p>
                <span className="product-price">${price.toFixed(2)}</span>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails