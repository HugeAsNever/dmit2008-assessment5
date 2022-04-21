import React from 'react';
import Image from 'next/image';
import {productCard, price, name, description} from './styles.module.scss';

function ProductCard ({children, product, ...props})  {
  const {uid, productName, productPrice, productDesc, imageUrl} = {...product};
  return (
    <aside className={productCard}>
      <header>
        <Image 
          src={imageUrl}
          alt={productName} 
          width={409} 
          height={240}
        />
      </header>

      <h3 className={name}>{productName}</h3>
      <h3 className={price}>CAD {productPrice}</h3>
      <p className={description}> {productDesc}</p>

      <footer>
        <form action="/api/checkout" method="POST">
          <input type="hidden" name="uid" value={uid} />
          <button type="submit">Buy Now</button>
        </form>
      </footer>
    </aside>
  )
}

export default ProductCard