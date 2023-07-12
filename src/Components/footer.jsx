import '../Styles/footer.css'
const Footer = () => {
    return ( 
       <div className="mainfooter">
         <div className="footer">
            <div className="fimage">
                <img src="https://www.starbucks.in/assets/icon/logo.png" alt="" />
            </div>
            <div className="container1">
                <h1>About Us</h1>
                <li>Our Heritage</li>
                <li>Our Company</li>
                <li>Coffeehouse</li>
            </div>
            <div className="container2">
                <h1>Responsibility</h1>
                <li>Comunity</li>
                <li>Ethical Sourcing</li>
                <li>Environment</li>
                <li>Diversity</li>
            </div>
            <div className="container3">
                <h1>Quick Links</h1>
                <li>Careers</li>
                <li>Season's Gifting</li>
                <li>FAQs</li>
                <li>Customer Service</li>
                <li>Delivery</li>
            </div>
            <div className="fimages">
                <img src="https://www.starbucks.in/assets/images/appstoreiOS.png" alt="" />
                <img src="https://www.starbucks.in/assets/images/appstoreAndroid.png" alt="" />
            </div>
        </div>
        <hr />
        <p>2023 Starbucks Coffee Company.All Rights Reserved</p>
       </div>
     );
}
 
export default Footer;