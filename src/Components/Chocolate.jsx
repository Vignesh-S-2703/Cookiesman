import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/store';

const Chocolate = () => {
  const dispatch = useDispatch();
   const Chocolates = [
    {
        "id" :1,
        "name" : "Choco Dipped Almond Fingers",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/1front_1080x.jpg?v=1686211536",
        "price" :"149.00"
    },
    {
        "id" :2,
        "name" : "Choco Coated Almond",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/almondfront_1080x.jpg?v=1686567135",
        "price" :"130.00"
    },
    {
        "id" :3,
        "name" : "Choco Coated Cranberry",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/cranberryfront_1080x.jpg?v=1686653113",
        "price" :"139.00"
    },
    {
        "id" :4,
        "name" : "Choco Coated Hazelnut",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/hazelnutfront_1080x.jpg?v=1686652272",
        "price" :"135.00"
    },
    {
        "id" :5,
        "name" : "Luxury Handcrafted Chocolate Box",
        "image" : "https://www.cookiemanindia.com/cdn/shop/files/lifestyle3_1080x.jpg?v=1694594657",
        "price" :"450.00"
    },
    {
        "id" :6,
        "name" : "Love Premium Chocolate Box",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/12pcswihlovechocolatebox_1080x.jpg?v=1677676569",
        "price" :"360.00"
    },
    {
        "id" :7,
        "name" : "Congratulations Premium Chocolate",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/12pcscongratschocolatebox_1080x.jpg?v=1677676485",
        "price" :"360.00"
    },
    {
        "id" :8,
        "name" : "Best Wishes Premium Chocolate",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/bestwishes12pcschocolatebox_1080x.jpg?v=1677676565",
        "price" :"360.00"
    },
    {
        "id" :9,
        "name" : "Premium Chocolate Gift Box",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/8pcschocolate_1080x.jpg?v=1677676559",
        "price" :"240.00"
    },
    {
        "id" :10,
        "name" : "Birthday Premium Chocolate Box",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/Birthday12pcschocolate_1080x.jpg?v=1677676553",
        "price" :"350.00"
    },
    {
        "id" :11,
        "name" : "Celebrations Chocolate Gift Box",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/15pcschocolatebox_1080x.jpg?v=1677676573",
        "price" :"450.00"
    },
    {
        "id" :12,
        "name" : "Premium Chocolates Gift Box",
        "image" : "https://www.cookiemanindia.com/cdn/shop/products/COCOBITES_1080x.jpg?v=1663414819",
        "price" :"350.00"
    }
];

  return (
    <div>
      <section className='product'>
        {
          Chocolates.map( Chocolate => (
            <Card key={Chocolate.id}  style={{ width: '22rem',height: '32rem', margin: '1rem', boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);' }}>
            <Card.Img style={{height: '19rem', marginLeft: '1.5rem'}} variant="top" src={Chocolate.image} />
            <Card.Body>
              <Card.Title style={{marginLeft: '60px', fontSize: '20px', marginTop: '15px'}}>{Chocolate.name}</Card.Title>
              <Card.Text style={{marginLeft: '6.5rem', fontSize: '20px', marginTop: '15px'}}> MRP:Rs.  {Chocolate.price}</Card.Text>
                       <button type="button" class="button" onClick={() => dispatch(addToCart(Chocolate))}>
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

export default Chocolate