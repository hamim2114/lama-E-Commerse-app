import { useEffect, useState } from 'react'
import './product.scss'
import { FaBalanceScale, FaCartPlus, FaHeart, FaHeartbeat, FaRegHeart } from 'react-icons/fa'

const images = [
	"https://images.pexels.com/photos/1484800/pexels-photo-1484800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/2096476/pexels-photo-2096476.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
]

const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1)
	useEffect(() => {
		window.scrollTo(0, 0);
	  }, []);
  return (
    <div className='product'>
		<div className="left">
			<div className="images">
				<img className={selectedImg == 0 ? "active" : " "} src={images[0]} alt="" onClick={() => setSelectedImg('0')} />
				<img className={selectedImg == 1 ? "active" : " "} src={images[1]} alt="" onClick={() => setSelectedImg('1')} />
			</div>
			<div className="mainImg">
				<img src={images[selectedImg]} alt="" />
			</div>
		</div>
		<div className="right">
			<h1>Long Sleeve Graphic T-shirt</h1>
			<p>$23</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, vero placeat, nemo quod iure dolorem, alias aspernatur assumenda eius recusandae sed. Reiciendis nulla maiores asperiores obcaecati amet repellat nihil temporibus.</p>
			<div className="quantity">
				<button onClick={() => setQuantity(p => quantity === 1 ? 1 : p - 1)}>-</button>
				<span>{quantity}</span>
				<button onClick={() => setQuantity(p => p + 1)}>+</button>
			</div>
			<button className="add"><FaCartPlus className='icon'/> ADD TO CART</button>
			<div className="link">
				<div className="item"><FaRegHeart className='icon'/>ADD TO WISHLIST</div>
				<div className="item"><FaBalanceScale className='icon'/> ADD TO COMPARE</div>
			</div>
			<div className="desc">
				<div className="item">
					<span><b>Vendor:</b>  Polo</span>
					<span><b>Product Type:</b>   T-shirt</span>
					<span><b>Tag:</b>  T-shirt, Men, Top</span>
				</div>
				
				<span>DESCRIPTION</span>
				<hr />
				<span>ADDITIONAL INFORMATION</span>
				<hr />
				<span>FAQ</span>
			</div>
		</div>
	</div>
  )
}

export default Product