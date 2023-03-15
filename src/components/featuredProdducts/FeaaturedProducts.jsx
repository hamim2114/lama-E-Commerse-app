import FeaturedCard from '../featuredCard/FeaturedCard'
import './featuredProducts.scss'

const featuredData = [
    {
        img: 'https://images.pexels.com/photos/15436335/pexels-photo-15436335.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Jacket',
        oldPrice: 20,
        price: 15,
        isNew: true
    },
    {
        img: 'https://images.pexels.com/photos/14791891/pexels-photo-14791891.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Skirt',
        oldPrice: 23,
        price: 16,
        isNew: true
    },
    {
        img: 'https://images.pexels.com/photos/15792209/pexels-photo-15792209.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Shows',
        oldPrice: 10,
        price: 8
    },
    {
        img: 'https://images.pexels.com/photos/12809812/pexels-photo-12809812.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Shirt',
        oldPrice: 21,
        price: 18
    },
    {
        img: 'https://images.pexels.com/photos/15436335/pexels-photo-15436335.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Jacket',
        oldPrice: 20,
        price: 15,
        isNew: true
    },
    {
        img: 'https://images.pexels.com/photos/14791891/pexels-photo-14791891.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Skirt',
        oldPrice: 23,
        price: 16,
        isNew: true
    },
]

const FeaaturedProducts = ({type}) => {
  return (
    <div className="featured mx-w">
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia itaque ut doloribus repellendus aliquam, earum exercitationem perferendis illo dolores fugiat voluptatibus recusandae temporibus fuga omnis eligendi natus minima, molestias ipsa.Mollitia itaque ut doloribus repellendus aliquam, earum exercitationem perferendis illo dolores fugiat voluptatibus recusandae temporibus fuga</p>
        </div>
        <div className="bottom">
            {
                featuredData.map((item, index) => (
                    <FeaturedCard item={item} id={index} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default FeaaturedProducts