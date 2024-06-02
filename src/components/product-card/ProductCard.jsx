import React from 'react'
import "./ProductCard.scss"

import { FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ data }) => {
    let product = data?.map(el => (
        <div key={el.id} className="card">
            <div className="card__frame">
                <img className='card__image' src={el.images[0]} alt="" />
                <p className="card__category">Yozgi savdo</p>
            </div>
            <div className="card__content">
                <p className="card__description">{el.description}</p>
                <div className="card__rating__wrapper">
                    <FaStar />
                    <p className="card__rating">{el.rating}</p>
                    <p className="card__rating__quantity">({el.minimumOrderQuantity} sharhlar)</p>
                </div>
                <p className="card__month__payment">
                    ${Math.round((el.price / 12) * 100) / 100} dollar/oyiga
                </p>
                <div className="card__bottom">
                    <div className="card__price__wrapper">
                        <del className="card__old__price">{el.price * 2} dollar</del>
                        <p className="card__price">{el.price} dollar</p>
                    </div>
                    <button className="card__cart__btn">
                        <IoCartOutline />
                    </button>
                </div>
            </div>
        </div>
    ))
    return product
}

export default ProductCard