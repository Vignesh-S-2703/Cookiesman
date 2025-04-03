import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/store';
import store from '../store/store'; // Importing store.js

const Desserts = () => {
  const dispatch = useDispatch();
    const Dessert = [
      {
      "id" : 1,
      "name" : "Choco Chip Brownie",
      "image" : "https://www.cookiemanindia.com/cdn/shop/files/3_829caad7-9a86-4464-b58c-f563ac5fca75_1080x.jpg?v=1738067780",
      "price" :"198.00"
      },
      {
          "id" : 2,
          "name" : "Choco Chip Muffin",
          "image" : "https://www.cookiemanindia.com/cdn/shop/files/1_46377cf2-40e9-4b39-aa00-f49709a1c61f_1080x.jpg?v=1738135567",
          "price" :"198.00"
      },
      {
          "id" : 3,
          "name" : "Soft and Chewy Cookies",
          "image" : "https://www.cookiemanindia.com/cdn/shop/files/assorted_1080x.jpg?v=1715343264",
          "price" :"425.00"
      },  
      {
          "id" : 4,
          "name" : "Double Choc Chip Cookies",
          "image" : "https://www.cookiemanindia.com/cdn/shop/files/3_a0829081-3184-4164-a473-ef8e3eeb5862_1080x.jpg?v=1715341707",
          "price" :"425.00"
      },
      {
          "id" : 5,
          "name" : "Choc chunk Cookies",
          "image" : "https://www.cookiemanindia.com/cdn/shop/files/3_82b34234-bfce-4713-9a89-4785525b0b5f_1080x.jpg?v=1715340057",
          "price" :"425.00"
      },
      {
          "id" : 8,
          "name" : "Oatmeal Raisin Cookies",
          "image" : "https://www.cookiemanindia.com/cdn/shop/files/2_1d79f609-8314-43d9-9d9d-8fe022693c30_1080x.jpg?v=1715342181",
          "price" :"425.00"
      },
      {
          "id" : 6,
          "name" : "Double Choc Chip Cookies",
          "image" : "https://www.cookiemanindia.com/cdn/shop/files/5_4d9c42d3-4852-4a04-9092-cf616648e9e6_1080x.jpg?v=1715341720",
          "price" :"250.00"
      },
      {
          "id" : 7,
          "name" : "Choc Chunk Cookies- Chaco",
          "image" : "https://www.cookiemanindia.com/cdn/shop/products/ChocoChunk_2430bd9e-1937-472e-94a3-6bb7bc207c5c_1080x.jpg?v=1676622128",
          "price" :"250.00"
      },
      {
          "id" : 9,
          "name" : "Assorted Soft and Chewy Cookies",
          "image" : "https://www.cookiemanindia.com/cdn/shop/files/assorted5_1080x.jpg?v=1715343264",
          "price" :"359.00"
      },
  ];

  return (
    <div>
      <section className='product'>
        {
          Dessert.map( Desserts => (
            <Card key={Desserts.id} style={{ width: '22rem',height: '32rem', margin: '1rem', boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);' }}>
            <Card.Img style={{height: '19rem',marginLeft: '1.5rem'}} variant="top" src={Desserts.image} />
            <Card.Body>
              <Card.Title style={{marginLeft: '80px', fontSize: '20px', marginTop: '15px'}}>{Desserts.name}</Card.Title>
              <Card.Text style={{marginLeft: '6.5rem', fontSize: '20px', marginTop: '15px'}}> MRP:Rs.  {Desserts.price}</Card.Text>
              <button type="button" class="button" onClick={() => dispatch(addToCart(Desserts))}>
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

export default Desserts