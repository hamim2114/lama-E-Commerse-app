import './list.scss'
import FeaturedCard from '../featuredCard/FeaturedCard'

const listData = [
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
]

const List = () => {
  return (
    <div className='list'>
        {
            listData.map((item, index) => (
                <FeaturedCard item={item} id={index} key={index}/>
            ))
        }
    </div>
  )
}

export default List