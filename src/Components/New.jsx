import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/store';

const New = () => {
  const dispatch = useDispatch();
  const News = [
    {
        "id" : 1,
        "name" : "Osmania Cookies Biscuits",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/lifestyle1_dc6c3a81-1576-4e21-9810-bec2912a87fb_1080x.jpg?v=1695377072",
        "price" : "399.00"
    },
    {
        "id" : 2,
        "name" : "Happiness Red Mini Gift Tin",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/celebratinghappiness2_1080x.jpg?v=1696855983",
        "price" : "399.00"
    },
    {
        "id" : 3,
        "name" : "Sugar Free Cashew Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/8_ba1791cb-d2a3-4b0c-8e9b-94f8412704bd_1080x.jpg?v=1720769249",
        "price" : "350.00"
    },
    {
        "id" : 4,
        "name" : "Sugar Free Oats & Almond Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/9_3b09f0c3-e054-4524-b27b-65ae8c4dfcae_1080x.jpg?v=1720770089",
        "price" : "350.00"
    },
    {
        "id" : 5,
        "name" : "Candlelight Hamper with Cookies and Coffee",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/1IMAGE_ae94b66b-5c43-416b-8de4-941804dd8897_1080x.jpg?v=1721141800",
        "price" : "999.00"
    },
    {
        "id" : 6,
        "name" : "Cookie Coffee Break Hamper",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/1IMAGE_0f7a4e13-6142-49cb-ae20-70dfaa51dbb1_1080x.jpg?v=1721141979",
        "price" : "650.00"
    },
    {
        "id" : 7,
        "name" : "Healthy Surprise Hamper",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/1IMAGE_89dc2c3d-a81d-41f6-8598-c1bc4e9de748_1080x.jpg?v=1721141338",
        "price" : "1290.00"
    },
    {
        "id" : 8,
        "name" : "10 Delights Collection",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/1IMAGE_a034b085-9951-45dd-b8db-dc979e3745c2_1080x.jpg?v=1721141893",
        "price" : "1119.00"
    },
    {
        "id" : 9,
        "name" : "8 Flavor Assorted Trial Pack",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/6_77f81f4b-3371-4bdd-8e6e-daffdd703fbf_1080x.jpg?v=1720778794",
        "price" : "899.00"
    },
    {
        "id" : 10,
        "name" : "Assorted Healthy Gourmet Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/Copyof1_8dff9f4d-785b-4480-9dc9-4469aeed3942_1080x.jpg?v=1732702180",
        "price" : "399.00"
    },
    {
        "id" : 11,
        "name" : "World of Sweet Treats Gift Basket",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/1_e548b75f-fc17-431d-ab68-28e327022e75_1080x.jpg?v=1721140719",
        "price" : "1799.00"
    },
    {
        "id" : 12,
        "name" : "European Dream Gift Basket",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/1_3d3f8d2e-bbb9-4efd-90e2-217c99c8f3dd_1080x.jpg?v=1721141216",
        "price" : "1699.00"
    }
]; 
  return (
    <div>
      <section className='product'>
        {
          News.map( New => (
            <Card key={New.id} style={{ width: '22rem',height: '32rem', margin: '1rem', boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);' }}>
            <Card.Img style={{height: '19rem',marginLeft: '1.5rem'}} variant="top" src={New.image} />
            <Card.Body>
              <Card.Title style={{marginLeft: '60px', fontSize: '20px', marginTop: '15px',width: '80%'}}>{New.name}</Card.Title>
              <Card.Text style={{marginLeft: '6.5rem', fontSize: '20px', marginTop: '15px'}}> MRP:Rs.  {New.price}</Card.Text>
              <button type="button" class="button" onClick={() => dispatch(addToCart(New))}>
                         <span class="button__text">Add Item</span>
                         <span class="button__icon" onClick={() => alert('Add to Cart')}><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                       </button>
            </Card.Body>
          </Card>
          ))
        }
      </section>
      <Footer />
    </div>
  )
}

export default New