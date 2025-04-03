import React from 'react'
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/store';

const Buy = () => {
  const dispatch = useDispatch();
  const Buys = [
    {
        "id" : 1,
        "name" : "Sugar Free Ragi Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/7_77b7a9dd-75b4-49c2-ba02-69d5eaf7042c_1080x.jpg?v=1720770409",
        "price" : "349.00"
    },
    {
        "id" : 2,
        "name" : "Sugar Free Cashew Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/8_ba1791cb-d2a3-4b0c-8e9b-94f8412704bd_1080x.jpg?v=1720769249",
        "price" : "349.00"
    },
    {
        "id" : 3,
        "name" : "Multi Grain Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/CookieMan_Sugar_Free_Multigrain_protein_cookies_1080x.png?v=1722573884",
        "price" : "359.00"
    },
    {
        "id" : 4, 
        "name" : "Millet Jaggery Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/1_2_1080x.jpg?v=1677140901",
        "price" : "359.00"
    },
    {
        "id" : 5,
        "name" : "Anniversary Assorted Cookies & Chocolates Gift Hamper",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/4_59a0056c-8955-4e82-8d5d-8f5d5193ccce_1080x.jpg?v=1683179495",
        "price" : "799.00"
    },
    {
        "id" : 6,
        "name" : "Birthday Assorted Cookies & Chocolates Gift Hamper",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/5_3f054495-f088-4777-81e5-63053745469a_1080x.jpg?v=1683179246",
        "price" : "799.00"
    },
    {
        "id" : 7,
        "name" : "Congratulations Assorted Cookies & Chocolates Gift Hamper",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/4_5b809ab8-360a-44f7-b834-25812705f038_1080x.jpg?v=1683180253",
        "price" : "799.00"
    },
    {
        "id" : 8,
        "name" : "With Love Assorted Cookies & Chocolates Gift Hamper",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/4_284039af-009a-4a01-a279-1d11be8c6831_1080x.jpg?v=1683179807",
        "price" : "799.00"
    },
    {
        "id" : 9,
        "name" : "Buy 1kg Get 200g Free - Brandy Snap Cookies Tub",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/BN1KG3_540x.jpg?v=1683403994",
        "price" : "860.00"
    },
    {
        "id" : 10,
        "name" : "Buy 1kg Get 200g Free - Assorted Cookies Tub",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/assorted1kg_540x.jpg?v=1683403845",
        "price" : "860.00"
    },
    {
        "id" : 11,
        "name" : "Buy 1kg Get 200g Free - Choc Chip Cookies Tub",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/ch1kg_540x.jpg?v=1683403881",
        "price" : "860.00"
    },
    {
        "id" : 12,
        "name" : "Buy 1kg Get 200g Free - Almond Cookies Tub",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/almond1kg_540x.jpg?v=1683403890",
        "price" : "860.00"
    }
];

  return (
    <div>
      <section className='product'>
        {
          Buys.map( Buy => (
            <Card key={Buy.id} style={{ width: '22rem',height: '32rem', margin: '1rem', boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);', border : '1px soild black', backgroundColor : 'snow' }}>
            <Card.Img style={{height: '19rem', marginLeft: '1.5rem', marginTop : '1rem'}} variant="top" src={Buy.image} />
            <Card.Body>
              <Card.Title style={{marginLeft: '60px', fontSize: '20px', marginTop: '15px'}}>{Buy.name}</Card.Title>
              <Card.Text style={{marginLeft: '6.5rem', fontSize: '20px', marginTop: '15px'}}> MRP:Rs.  {Buy.price}</Card.Text>
              <button type="button" class="button" onClick={() => dispatch(addToCart(Buy))}>
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

export default Buy