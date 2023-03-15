import './contact.scss'
import { FaFacebook, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <div className="title">
                <h3>BE IN TOUCH WITH US:</h3>
            </div>
            <div className="input">
                <input type="text" placeholder='Enter your E-mail' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaGoogle/>
                <FaPinterest/>
            </div>
        </div>
    </div>
  )
}

export default Contact