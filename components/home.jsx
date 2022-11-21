import { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faSearch, faUser, faCreditCard, faTruck, faGift, faAngleLeft, faAngleRight, faBars } from "@fortawesome/free-solid-svg-icons"
import img1 from '../images/logo.png';
import img2 from '../images/image8.jpg';
import img3 from '../images/image00.jpg'
import img4 from '../images/image1.jpg'
import img5 from '../images/image2.jpg'
import img6 from '../images/image3.jpg'
import img7 from '../images/image100.jpg'
import img8 from '../images/image99.jpg'
import img9 from '../images/image98.jpg'
import img10 from '../images/image97.jpg'
import img11 from '../images/image96.jpg'
import img12 from '../images/image95.jpg'
import img13 from '../images/image94.jpg'
import img14 from '../images/image93.jpg'
import img15 from '../images/image92.jpg'
import img16 from '../images/image91.jpg'
import img17 from '../images/image90.jpg'
import img18 from '../images/image89.jpg'
import img19 from '../images/image87.jpg'
import img20 from '../images/image86.jpg'
import img21 from '../images/image85.jpg'
import img22 from '../images/image7.jpg'
import img23 from '../images/tree1.jpg';
import img24 from '../images/tree2.jpg';
import img25 from '../images/tree3.jpg';
import img26 from '../images/tree4.jpg';
import img27 from '../images/tree5.jpg';
import img28 from '../images/tree6.jpg';
import img29 from '../images/tree7.jpg';
import img30 from '../images/tree8.jpg';
import Slider from 'react-slick'
import './home.css';

export default class FirstComponent  extends Component{
    render(){
      return(
        <div>
          <SecondComponent/>
          <Navbar/>
            <Router>            
                  <Routes>
                  <Route path="/" exact element={<ThirdComponent/>}/>
                  <Route path="account" element={<AccountComponent/>}/>
                  <Route path="/login" element={<LoginComponent/>}/>
                  <Route path="shop" element={<ShopComponent/>}/>
                  </Routes>
            </Router>
            <FourthComponent/>
        </div>
      )
    }
}

class SecondComponent extends Component{
    render(){
        return(
              <header>
                <div className="logo">
                    <img src={img1} width={'200px'} />
                </div>
                <div className="box">
                <input className="srch" type="text"  name="" placeholder="Search"/>
                <button className="ship"><FontAwesomeIcon className="lad" icon={faSearch}></FontAwesomeIcon></button>
                </div>
                <div className="acct">
                       <a href="/account">My Account<FontAwesomeIcon icon={faUser}></FontAwesomeIcon></a> 
                </div>
              </header>
        )
    }
}


function Navbar() {
  return(
    <div className="nav">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </label>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
        </nav>
      </div>
    
  )
}

class AccountComponent extends Component{
  render(){
    return(
      <div className="not">
      <div className="bad">
        <h1>Sign Up Here</h1>
        <form>
            <label>First Name</label>
            <input type="text" placeholder=""/>
            <label>Last Name</label>
            <input type="text" placeholder="" />
            <label>Email</label>
            <input type="text" placeholder="" /> 
            <label>Password</label>
            <input type="password" placeholder="" />  
            <label>Confirm Password</label>
            <input type="password" placeholder="" /> 
            <button><a href="">Submit</a></button>
        </form>
        <p>By clicking the sign up button, you agree to our <br /> <a href="">Terms and Conditions</a></p>
        <div className="end">
        <FontAwesomeIcon className="ban" icon={faFacebook}></FontAwesomeIcon>
        <FontAwesomeIcon className="ban" icon={faInstagram}></FontAwesomeIcon>
        <FontAwesomeIcon className="ban" icon={faTwitter}></FontAwesomeIcon>
        </div>
        </div> 
        <h6>Already have an account <a href="/login">Login here</a></h6>
      </div>
        
    )
  }
}

class LoginComponent extends Component{
  render(){
    return(
      <div className="fled">
        <div className="can">
        <h1>Login Here</h1>
        <form>
            <label>Email</label>
            <input type="text" placeholder="" /> 
            <label>Password</label>
            <input type="password" placeholder="" />  
            <button><a href="">Submit</a></button>
        </form>
        </div>
        <h6>Don't have an account? <a href="/account">Sign Up</a> here</h6>
      </div>
    )
  }
}

class ShopComponent extends Component{
  render(){
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="product">
        <h2 className="chef"> Indoor plants </h2>
        <Slider {...settings}>
          <div className="product-container">
             <img src={img7} className="product-thumb" />
            <h3 className="brand">Chinese Evergreen</h3>
            <p className="description">Foliage plant for cleansing room.......</p>
            <h6>₦65,000</h6>
            <button className="btn">Add to Cart </button>
          </div>

          <div  className="product-container">
          <img src={img8} className="product-thumb" />
            <h3 className="brand">Peace Lily</h3>
            <p className="description">This plant periodically produce.......</p>
            <h6>₦50,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img9} className="product-thumb" />
            <h3 className="brand">Jade</h3>
            <p className="description">Jade plants features thick woody.......</p>
            <h6>₦80,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img10} className="product-thumb" />
            <h3 className="brand">Boston Fern</h3>
            <p className="description">The pale to meduim-green fronds can.......</p>
            <h6>₦65,000</h6>
          <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img11} className="product-thumb" />
            <h3 className="brand">Snake Plant</h3>
            <p className="description">Evergreen perenials that can grow.......</p>
            <h6>₦40,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img12} className="product-thumb" />
            <h3 className="brand">Zanzibar Gem</h3>
            <p className="description">An ornamental rhizomatous perennial......</p>
           <h6>₦55,000</h6>
           <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img13} className="product-thumb" />
            <h3 className="brand">Monstera</h3>
            <p className="description">The holes in a monstera are better.......</p>
            <h6>₦65,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img14} className="product-thumb" />
            <h3 className="brand">Sago palm</h3>
            <p className="description">Foliage plant for cleansing room.......</p>
            <h6>₦75,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
        </Slider>



        <h2 className="chef"> outdoor plants </h2>
        <Slider {...settings}>
          <div className="product-container">
             <img src={img15} className="product-thumb" />
            <h3 className="brand">Chinese Evergreen</h3>
            <p className="description">Foliage plant for cleansing room.......</p>
            <h6>₦65,000</h6>
            <button className="btn">Add to Cart </button>
          </div>

          <div  className="product-container">
          <img src={img16} className="product-thumb" />
            <h3 className="brand">Peace Lily</h3>
            <p className="description">This plant periodically produce.......</p>
            <h6>₦50,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img17} className="product-thumb" />
            <h3 className="brand">Jade</h3>
            <p className="description">Jade plants features thick woody.......</p>
            <h6>₦80,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img18} className="product-thumb" />
            <h3 className="brand">Boston Fern</h3>
            <p className="description">The pale to meduim-green fronds can.......</p>
            <h6>₦65,000</h6>
          <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img19} className="product-thumb" />
            <h3 className="brand">Snake Plant</h3>
            <p className="description">Evergreen perenials that can grow.......</p>
            <h6>₦40,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img20} className="product-thumb" />
            <h3 className="brand">Zanzibar Gem</h3>
            <p className="description">An ornamental rhizomatous perennial......</p>
           <h6>₦55,000</h6>
           <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img21} className="product-thumb" />
            <h3 className="brand">Monstera</h3>
            <p className="description">The holes in a monstera are better.......</p>
            <h6>₦65,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img22} className="product-thumb" />
            <h3 className="brand">Sago palm</h3>
            <p className="description">Foliage plant for cleansing room.......</p>
            <h6>₦75,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
        </Slider>



        <h2 className="chef"> Trees</h2>
        <Slider {...settings}>
          <div className="product-container">
             <img src={img23} className="product-thumb" />
            <h3 className="brand">Chinese Evergreen</h3>
            <p className="description">Foliage plant for cleansing room.......</p>
            <h6>₦65,000</h6>
            <button className="btn">Add to Cart </button>
          </div>

          <div  className="product-container">
          <img src={img24} className="product-thumb" />
            <h3 className="brand">Peace Lily</h3>
            <p className="description">This plant periodically produce.......</p>
            <h6>₦50,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img25} className="product-thumb" />
            <h3 className="brand">Jade</h3>
            <p className="description">Jade plants features thick woody.......</p>
            <h6>₦80,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img26} className="product-thumb" />
            <h3 className="brand">Boston Fern</h3>
            <p className="description">The pale to meduim-green fronds can.......</p>
            <h6>₦65,000</h6>
          <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img27} className="product-thumb" />
            <h3 className="brand">Snake Plant</h3>
            <p className="description">Evergreen perenials that can grow.......</p>
            <h6>₦40,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img28} className="product-thumb" />
            <h3 className="brand">Zanzibar Gem</h3>
            <p className="description">An ornamental rhizomatous perennial......</p>
           <h6>₦55,000</h6>
           <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img29} className="product-thumb" />
            <h3 className="brand">Monstera</h3>
            <p className="description">The holes in a monstera are better.......</p>
            <h6>₦65,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
          <div  className="product-container">
          <img src={img30} className="product-thumb" />
            <h3 className="brand">Sago palm</h3>
            <p className="description">Foliage plant for cleansing room.......</p>
            <h6>₦75,000</h6>
            <button className="btn">Add to Cart </button>
          </div>
        </Slider>
      </div>

        
      
    );
  }
}
class ThirdComponent extends Component{
  render(){
    return(
      <div className="container">
        <main>
          <div className="push">
           <div className="row">
              <h5>New Arrival 2021</h5>
              <h1>New Perfect <span>Plant </span> <br/> Collections</h1>
              <button><a href="/shop">Shop Now</a></button>
              </div>
              <div className="card">
              <img src={img2}/>
            </div>
            </div>
      </main>
      <div id="features" className="features">
          <div>
              <h5><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>24 * 7 Free Support</h5>
              <p>247 online support</p>
          </div>
          <div>
              <h5><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>Money Back Guarntee</h5>
              <p>100% strong payment</p>
          </div>
          <div>
              <h5><FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>Free Nation Shipping</h5>
              <p>On orders above ₦100,000</p>
          </div>
          <div>
              <h5><FontAwesomeIcon icon={faGift}></FontAwesomeIcon> Special Gift Cards</h5>
              <p>Give the best gift</p>
          </div>
      </div>

      
      <div className="cry">
        <div>
            <img src={img4}/>
        </div>
        <div>
            <img src={img5}/>
        </div>
        <div>
            <img src={img6}/>
        </div>

        <div className="big">
          <h6>New Collection 2022</h6>
          <h3>House Shape <span>Plants</span></h3>
          <p>These plants help to give your home a beautiful shape and <br /> we are here to maintain them  and make your home beautiful</p>
          <a href="/shop"> Shop Now</a>
        </div>
      </div>
     

      <div className="balm">
        <div className="card2">
        <img src={img3}/>
        </div>
        <div id="about" className="about">
          <h1>About Us</h1>
          <p><span> Plants </span>are the beauty of our lives... <br />  In Astrantia <span>Gardens, </span>we take care of your <span>Pants.</span> <br />We render services from planting and maintaining of <br /> indoor and outdoor flowers and trees. we also sell  <br /> all kinds of flowers and we deliver at your door step. </p>
        </div>
      </div>
          </div>
    )
  }
}

class FourthComponent extends Component{
  render(){
    return(
      <footer>
         <div className="jam">
          <p>Copyright 2022 Onyinye Patrick Freelance Graphic designer, web design and Developer</p>
          <hr />
          <div className="end">
        <FontAwesomeIcon className="ban" icon={faFacebook}></FontAwesomeIcon>
        <FontAwesomeIcon  className="ban" icon={faInstagram}></FontAwesomeIcon>
        <FontAwesomeIcon  className="ban"  icon={faTwitter}></FontAwesomeIcon>
        </div>
         </div>
      </footer>
    )
  }
}


