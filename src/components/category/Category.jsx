import './categoty.scss'
import {Link} from 'react-router-dom'

const Category = () => {
  return (
    <div className="category">
        <div className="col fst">
            <div className="row">
                <img src="https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button className="btn"><Link to='/products/1'>SALE</Link></button>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <button className="btn"><Link to='/products/1'>WOMEN</Link></button>
            </div>
        </div>
        <div className="col sec">
            <div className="row">
                <img src="https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button className="btn"><Link to='/products/1'>NEW SEASON</Link></button>
            </div>
        </div>
        <div className="col-lg">
            <div className="row-l">
                <div className="row">
                    <img src="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button className="btn"><Link to='/products/1'>MEN</Link></button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/999303/pexels-photo-999303.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button className="btn"><Link to='/products/1'>ACCESSORIES</Link></button>
                </div>
            </div>
            <div className="row lg">
                <img src="https://images.pexels.com/photos/373924/pexels-photo-373924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <button className="btn"><Link to='/products/1'>SHOES</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Category