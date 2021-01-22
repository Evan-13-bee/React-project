import React from 'react';
import s from './Post.module.css';

const Post = (props: any) => {

  return (
    <div className={s.item}>
      <img src='https://cdn.shopify.com/s/files/1/0067/2140/5043/products/product-image-654981097_1200x1200.jpg?v=1571960904' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;