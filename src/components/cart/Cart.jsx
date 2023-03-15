import './cart.scss'
import { FaTrashAlt } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
const data = [
    {
        img: 'https://images.pexels.com/photos/15436335/pexels-photo-15436335.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Long Jacket for men',
        oldPrice: 20,
        price: 15,
        isNew: true
    },
    {
        img: 'https://images.pexels.com/photos/14791891/pexels-photo-14791891.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Skirt for women',
        oldPrice: 23,
        price: 16,
        isNew: true
    },
    {
        img: 'https://images.pexels.com/photos/14791891/pexels-photo-14791891.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Skirt for women',
        oldPrice: 23,
        price: 16,
        isNew: true
    },
    {
        img: 'https://images.pexels.com/photos/14791891/pexels-photo-14791891.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Skirt for women',
        oldPrice: 23,
        price: 16,
        isNew: true
    },
    {
        img: 'https://images.pexels.com/photos/14791891/pexels-photo-14791891.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Skirt for women',
        oldPrice: 23,
        price: 16,
        isNew: true
    },
    {
        img: 'https://images.pexels.com/photos/14791891/pexels-photo-14791891.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Skirt for women',
        oldPrice: 23,
        price: 16,
        isNew: true
    },
    {
        img: 'https://images.pexels.com/photos/14791891/pexels-photo-14791891.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Skirt for women',
        oldPrice: 23,
        price: 16,
        isNew: true
    },
    {
        img: 'https://images.pexels.com/photos/14791891/pexels-photo-14791891.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Skirt for women',
        oldPrice: 23,
        price: 16,
        isNew: true
    },
]

const Cart = ({activeCart}) => {
  return (
    <div className={`cart ${activeCart && 'active'}`}>
        <h2>Selected Item</h2>
        {
            data?.map((item, i) => (
                <div className="item" key={i}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h4>{item.title}</h4>
                        <p>{item.desc?.substring(0,100)}</p>
                        <p className="price">1 * ${item.price}</p>
                    </div>
                    <FaTrashAlt className='delete' />
                </div>
            ))
        }
               
        <div className="bottom">
            {data.length > 3 && <IoIosArrowDown className='arrow'/>}
           <div className="wrapper">
                <div className="total">
                    <span><b>SUBTOTAL: </b></span>
                    <span>$123</span>
                </div>
                <button>PROCEED TO CHECKOUT</button>
                <span className="reset">Reset Cart</span>
           </div>
        </div>
    </div>
  )
}

export default Cart