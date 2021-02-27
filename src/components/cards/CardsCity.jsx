import React from 'react';

import CardItem from './CardItem';

import './CardsCity.css';

function CardsCity() {
  return (
    <div className='cards'>
      <h1>Explore Ukraine</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItem class='fixed-size-block-two'
              src='https://lh3.googleusercontent.com/proxy/usgKiEmtMbKMqAjmY9OBxriE-s9aq_wrYMXzODe8o-T_pagTxJt9U6A6AADyV2ejF64JnElyj9O3ODyOmsmq4l5EpQcOhJKS3J7EJTZTNPMBHH_XbYJTVFMhlyUsqPFH_jpAJyoUyv3Mgi4rTrOSE5rlEuQ'
              label='Bukovel'
              path=''
            />
            <CardItem class='fixed-size-block-two'
              src='https://pravdatutlviv.com/wp-content/uploads/2020/11/kovz1.jpeg'
              label='Lviv'
              path=''
            />
          </ul>
          <ul className='cards-items'>
            <CardItem class='fixed-size-block-three'
              src='https://pilgrimage.in.ua/wp-content/uploads/2015/04/sophia4.jpg'
              label='Kyiv'
              path=''
            />
            <CardItem class='fixed-size-block-three'
              src='https://vlasne.ua/storage/source/odessa.jpg'
              label='Odessa'
              path=''
            />
            <CardItem class='fixed-size-block-three'
              src='https://streebogblog.files.wordpress.com/2018/06/1924973_800x600_0_105d05_7fbb259b_orig.jpg?w=800'
              label='Kharkiv'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsCity;