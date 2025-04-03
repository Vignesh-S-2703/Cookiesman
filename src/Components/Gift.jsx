import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/store';

const Gift = () => {
  const dispatch = useDispatch();
  const Gifts = [
    {
        "id" : 1,
        "name" : "Birthday Assorted Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/1_3_1080x.jpg?v=1677142958",
        "price" :"395.00"
    },
    {
        "id" : 2,
        "name" : "With Love Assorted Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/4_2_1080x.jpg?v=1679483902",
        "price" :"395.00"
    },
    {
        "id" : 3,
        "name" : "Anniversary Assorted Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/1_1080x.png?v=1677063490",
        "price" :"395.00"
    },
    {
        "id" : 4,
        "name" : "Best Wishes Assorted Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/bestwisheslifestyle1_1080x.jpg?v=1667462652",
        "price" :"395.00"
    },
    {
        "id" : 5,
        "name" : "Its a Baby Girl Assorted Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/itsagirl1lifestyle1_1080x.jpg?v=1663364555",
        "price" :"395.00"
    },
    {
        "id" : 6,
        "name" : "It’s a Baby Boy Assorted Cookies",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/itsaboy1lifestyle1_1080x.jpg?v=1662790548",
        "price" :"395.00"
    },
    {
        "id" : 7,
        "name" : "10 Delights Collection",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/3IMAGE_ed4c5556-11c1-4322-aa55-8f06fad93ef1_1080x.jpg?v=1721141893",
        "price" :"1395.00"
    },
    {
        "id" : 8,
        "name" : "Healthy Surprise Hamper",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/3IMAGE_feccd791-04c7-4f33-95a0-d006ac24000e_1080x.jpg?v=1721141338",
        "price" :"1195.00"
    },
    {
        "id" : 9,
        "name" : "European Dream Gift Basket",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/2_5c2d0094-9664-4c37-96ea-e48241eda9a2_1080x.jpg?v=1721141216",
        "price" :"1995.00"
    },
    {
        "id" : 10,
        "name" : "Gift Basket for Chocoholics",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/1_5500314f-682a-423c-b64c-6ea0c2f0d37b_1080x.jpg?v=1721140900",
        "price" :"1795.00"
    },
    {
        "id" : 11,
        "name" : "World of Sweet Treats Gift Basket",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/1_e548b75f-fc17-431d-ab68-28e327022e75_1080x.jpg?v=1721140719",
        "price" :"1895.00"
    },
    {
        "id" : 12,
        "name" : "Sugar-free Indulgence  Gift Basket",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/1_fb024e79-23bb-43af-a39a-d3cd2f7fe4cf_1080x.jpg?v=1721140567",
        "price" :"1695.00"
    }
];
  return (
    <div>
      <section className='product'>
        {
          Gifts.map( Gift => (
            <Card key={Gift.id} style={{ width: '22rem',height: '32rem', margin: '1rem', boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'}}>
            <Card.Img style={{height: '19rem',marginLeft: '1.5rem'}} variant="top" src={Gift.image} />
            <Card.Body>
              <Card.Title style={{marginLeft: '60px', fontSize: '20px', marginTop: '15px'}}>{Gift.name}</Card.Title>
              <Card.Text style={{marginLeft: '6.5rem', fontSize: '20px', marginTop: '15px'}}> MRP:Rs.  {Gift.price}</Card.Text>
                       <button type="button" class="button" onClick={() => dispatch(addToCart(Gift))}>
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

export default Gift