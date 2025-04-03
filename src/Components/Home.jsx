import React from 'react' 
import Home1 from '../assets/Home1.webp'
import Home2 from '../assets/Home2.webp'
import Footer from './Footer'

const Home = () => {

  return (
    <div>
        <img className='img' src={Home1} alt="Home" />

        <div className='text'>
          <h1>🍪 Cookieman Stores in <span style={{marginLeft: '30%'}}>Coimbatore</span> </h1>
          <p>Below are list of Cookieman Stores in Coimbatore where the best <span style={{marginLeft: '1%'}}>cookies in Coimbatore are baked fresh with ❤️</span> </p>
        </div>

        <div className='container'>
          <img src={Home2} alt=""/>
        <div className='flexq'> 
          <h2>Cookieman Brookefields </h2>
          <p>Upper Ground Floor, Brookefield, Ground Floor , No 67-7 Krishnaswamy road, Coimbatore - 641001.</p>
          <p>Phone: 9786990883</p>
        </div>
        </div>

        <h2 className='h2'>What We Have On Store</h2>
        <div className='container1'>
          <div className='img1'>
            <img src="https://www.cookiemanindia.com/cdn/shop/collections/doublechocchiplifestyle_ba7f9e66-0959-43f9-b101-2b3f3c6313b7_720x_1_720x.webp?v=1679650123" alt=""/>
            <p>Chocolate Cookies</p>
          </div>

          <div className='img1'>
            <img src="https://www.cookiemanindia.com/cdn/shop/collections/birthdaylifestyle_720x_1_720x.webp?v=1692007626" alt=""/>
            <p>Gifting</p>
          </div>
          <div className='img1'>
            <img src="https://www.cookiemanindia.com/cdn/shop/collections/nuttycookielifestyle_720x_1_720x.webp?v=1679650433" alt=""/>
            <p>Healthy Cookies</p>
          </div>

          <div className='img1'>
            <img src="https://www.cookiemanindia.com/cdn/shop/collections/combolife2_720x_1_720x.webp?v=1679650743" alt=""/>
            <p>Combo Cookies</p>
          </div>
          <div className='img1'>
          <img src="https://www.cookiemanindia.com/cdn/shop/collections/almondfingerlifestyle_720x_1_720x.webp?v=1679650334" alt=""/>
          <p>Gourmet Cookies</p>
          </div>
      </div>
  
      <div className='container2'>
          <div className='img2'>
            <img style={{marginLeft: '25px'}} src="https://www.cookiemanindia.com/cdn/shop/files/Frame_17_720x.jpg?v=1668692780" alt=""/>
            <h1>Freshly Baked</h1>
            <p>Use this section to explain a set of product features, to link to a series of pages, or to answer common questions.</p>
          </div>

          <div className='img2'>
            <img style={{marginLeft: '25px'}} src="https://www.cookiemanindia.com/cdn/shop/files/Frame_20_720x.jpg?v=1668692788" alt=""/>
            <h1>Best in Taste</h1>
            <p>Use this section to explain a set of product features, to link to a series of pages, or to answer common questions.</p>
          </div>

          <div className='img2'>
            <img style={{marginLeft: '25px'}} src="https://www.cookiemanindia.com/cdn/shop/files/Frame_18_720x.jpg?v=1668692779" alt=""/>
            <h1>20+ Flavours of Cookies</h1>
            <p>Use this section to explain a set of product features, to link to a series of pages, or to answer common questions.</p>
          </div>
        </div>

        <div className='container3'>
          <div className='img2'>
            <img style={{marginLeft: '25px'}} src="https://www.cookiemanindia.com/cdn/shop/files/Frame_21_720x.jpg?v=1668692794" alt=""/>
            <h1>Cookieman Gifting</h1>
            <p>Use this section to explain a set of product features, to link to a series of pages, or to answer common questions.</p>
          </div>

          <div className='img2'>
            <img style={{marginLeft: '25px'}} src="https://www.cookiemanindia.com/cdn/shop/files/Frame_19_720x.jpg?v=1668692779" alt=""/>
            <h1>Bulk Orders</h1>
            <p>Use this section to explain a set of product features, to link to a series of pages, or to answer common questions.</p>
          </div>

          <div className='img2'>
            <img style={{marginLeft: '25px'}} src="https://www.cookiemanindia.com/cdn/shop/files/Frame_22_720x.jpg?v=1668692779" alt=""/>
            <h1>Premium Chocolates</h1>
            <p>Use this section to explain a set of product features, to link to a series of pages, or to answer common questions.</p>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Home