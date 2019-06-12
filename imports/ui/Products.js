import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import ProductList from './ProductList';
import { STATIC_DATA } from './StaticData';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = { prods: [] }
  }

  componentWillMount() {
    this.setState({
      prods: STATIC_DATA
    });
  }

  render() {
    return (
      <div>
        <SiteHeader title="LSM" />
        <div className="container">
          <div className="row pt-4">
              <h1>Products</h1>
              <span className="col-12">
                Here is just a handfull of an almost endless selection of products
                to choose from for your business. Available from numerous reputable
                brands listed below,<Link to="/contact"> give us a call </Link>
                and we'll get started.
            </span>
          </div>
          <ProductList allprods={this.state.prods} />
          <div className="row pt-4">
            <h1>Brand Partners</h1>
          </div>
          {/* putting in UL instead of divs for better responsiveness/able to take more brands */}
          <div className="brands-container">
            <ul className="brands-list">
              <li className="brands-item my-auto">
                <a href="https://ccmhockey.com">
                  <img className="brand-image" src="/images/brands/ccmhockey.png" />
                </a>              
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.bauer.com">
                  <img className="brand-image" src="/images/brands/bauer.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="http://www.trimarksportswear.com/cgi-bin/triweb/site.w?location=mcopy.w&mcopy=st_roots_footer&frames=no&target=main&sponsor=000100">
                  <img className="brand-image" src="/images/brands/roots73.svg" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="http://www.trimarksportswear.com/cgi-bin/triweb/site.w?location=mcopy.w&mcopy=st_puma_footer&frames=no&target=main&sponsor=000100">
                  <img className="brand-image" src="/images/brands/puma.svg" />
                </a>             
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.technosport.com/catalog/Brands/Nike/">
                  <img className="brand-image" src="/images/brands/nike.png" />
                </a>          
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/new-era-reg.html">
                  <img className="brand-image" src="/images/brands/newera.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.technosport.com/catalog/Brands/American-Apparel/">
                  <img className="brand-image" src="/images/brands/americanapparel.png" />
                </a>             
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.technosport.com/catalog/Brands/New-Balance/">
                  <img className="brand-image" src="/images/brands/newbalance.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/dryframe-174.html">
                  <img className="brand-image" src="/images/brands/dryframe.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/coal-harbour-reg.html">
                  <img className="brand-image" src="/images/brands/ch.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/atc-153.html">
                  <img className="brand-image" src="/images/brands/atc.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/es-active-reg.html">
                  <img className="brand-image" src="/images/brands/esactive.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/everyday-reg-collection.html">
                  <img className="brand-image" src="/images/brands/everyday.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/eurospun.html">
                  <img className="brand-image" src="/images/brands/eurospun.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/koi-174.html">
                  <img className="brand-image" src="/images/brands/koi.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/the-north-face-reg.html">
                  <img className="brand-image" src="/images/brands/thenorthface.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/atc-153-by-flexfit-174.html">
                  <img className="brand-image" src="/images/brands/flexfit.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/yupoong-174.html">
                  <img className="brand-image" src="/images/brands/yupoong.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/ogio-174.html">
                  <img className="brand-image" src="/images/brands/ogio.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/callaway-174.html">
                  <img className="brand-image" src="/images/brands/callaway.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/eddie-bauer.html">
                  <img className="brand-image" src="/images/brands/eb.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/gildan-reg.html">
                  <img className="brand-image" src="/images/brands/gildan.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/fruit-of-the-loom-174.html">
                  <img className="brand-image" src="/images/brands/fol.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/red-kap-174.html">
                  <img className="brand-image" src="/images/brands/redkap.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/realtree-174.html">
                  <img className="brand-image" src="/images/brands/realtree.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:All%20Sport">
                  <img className="brand-image" src="/images/brands/allsport.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Alstyle">
                  <img className="brand-image" src="/images/brands/alstyle.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Alternative">
                  <img className="brand-image" src="/images/brands/alternative.jpg" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Ash%20City">
                  <img className="brand-image" src="/images/brands/ashcity.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Ash%20City%20-%20Il%20Migliore">
                  <img className="brand-image" src="/images/brands/ashcityim.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Bella%20%2B%20Canvas">
                  <img className="brand-image" src="/images/brands/bellacanvas.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.technosport.com/catalog/Brands/Champion/">
                  <img className="brand-image" src="/images/brands/champion.jpg" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Code%20Five">
                  <img className="brand-image" src="/images/brands/codefive.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Columbia">
                  <img className="brand-image" src="/images/brands/columbia.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Dickies">
                  <img className="brand-image" src="/images/brands/dickies.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Dickies%20Drop%20Ship">
                  <img className="brand-image" src="/images/brands/dropship.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Dri%20Duck">
                  <img className="brand-image" src="/images/brands/driduck.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Flexfit">
                  <img className="brand-image" src="/images/brands/flexfit.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Gemline">
                  <img className="brand-image" src="/images/brands/gemline.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Jerzees">
                  <img className="brand-image" src="/images/brands/jerzees.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Marmot">
                  <img className="brand-image" src="/images/brands/marmot.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Next%20Level">
                  <img className="brand-image" src="/images/brands/nextlevel.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Rabbit%20Skins">
                  <img className="brand-image" src="/images/brands/rabbitskins.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Spyder">
                  <img className="brand-image" src="/images/brands/spyder.jpg" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Threadfast">
                  <img className="brand-image" src="/images/brands/threadfast.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.alphabroder.ca/cgi-bin/online/webshr/search-result.w?ref=Mill_Name:Tie-Dye">
                  <img className="brand-image" src="/images/brands/tiedye.webp" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="http://www.trimarksportswear.com/cgi-bin/triweb/site.w?location=mcopy.w&mcopy=st_elevate_footer&frames=no&target=main&sponsor=000100">
                  <img className="brand-image" src="/images/brands/elevate.svg" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="http://www.trimarksportswear.com/cgi-bin/triweb/site.w?location=mcopy.w&mcopy=st_HighSierra_footer&frames=no&target=main&sponsor=000100">
                  <img className="brand-image" src="/images/brands/highsierra.svg" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.technosport.com/catalog/Brands/Lacoste/">
                  <img className="brand-image" src="/images/brands/lacoste.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.technosport.com/catalog/Brands/Oakley/">
                  <img className="brand-image" src="/images/brands/oakley.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://ca.levelwear.com/">
                  <img className="brand-image" src="/images/brands/levelwear.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                {/* check correct link? */ }
                <a href="https://ca.levelwearteam.com/">
                  <img className="brand-image" src="/images/brands/kewl.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.underarmour.com/en-ca?cid=PS%7cCA%7cBR%7cggl%7call%7cunderarmour+website%7call%7capp%7call%7cexact%7cdg%7cp38473539106&gclid=Cj0KCQjwxYLoBRCxARIsAEf16-uKlZXOJHYLC793SzmKAlJcfo0EbJdwI2Oa_aE8iM4Q2-CR5NNw9R0aAmZuEALw_wcB&gclsrc=aw.ds">
                  <img className="brand-image" src="/images/brands/underarmour.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://cutterbuck.com/">
                  <img className="brand-image" src="/images/brands/cutter&buck.webp" />
                </a>            
              </li>
    {/*
              <li className="brands-item my-auto">
                <a href="">
                  <img className="brand-image" src="/images/brands/" />
                </a>            
              </li>
    */}
            </ul>
          </div>


        </div>
        <SiteFooter/>
      </div>

    );
  }
}


export default withRouter(Products);

//need to pass plist through this component,
// change render states in child component
//change to class based component, pass through state
//THIS WORKS!!! BUILD UPON IT!!!

/*
Categories:


Apparel

Headwear

Bags

Drinkware

Office/Technology

Writing

 
Brand partners:

 
Under Armour

CCM Hockey

Bauer

Roots

Puma

Nike

New Era

American Apparel

New Balance

 

See sample below:

https://nrgactiveapparel.com/brands/
*/