import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
      <div className="footer-1 footer">
        <img src="./img/logo.png" alt="" />
        <br /><br />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae molestias eaque a nisi dolor voluptate!</p>
        <br />
        <div className="footer-social">
          <span><i className="fa-brands fa-linkedin" title='linkedin'></i></span>
          <span><i className="fa-brands fa-facebook" title='facebook'></i></span>
          <span><i className="fa-brands fa-twitter" title='twitter'></i></span>
          <span><i className="fa-brands fa-square-instagram" title='instagram'></i></span>
          <span><i className="fa-brands fa-youtube" title='youtube'></i></span>
        </div>
      </div>
      <div className="footer-2 footer">
        <h5>ABOUT</h5>
        <br />
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Information</li>
            <li>Stories</li>
          </ul>
        </div>
      <div className="footer-3 footer">
        <h5>POLICY</h5>
        <br />
        <ul>
          <li>Term of use</li>
          <li>Security</li>
          <li>privacy</li>
          <li>sitemap</li>
        </ul>
      </div>
      <div className="footer-4 footer">
        <h5>ADDRESS</h5><br />
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, mollitia.</p>
      </div>
     
    </div>
   
    </>
  )
}

export default Footer
