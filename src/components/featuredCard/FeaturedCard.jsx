import './featuredCard.scss';
import { Link } from 'react-router-dom';

const FeaturedCard = ({ item, id }) => {

    return (
        <Link to={`/product/${id}`}>
            <div  className='card'>
                {item.isNew && <span>New arived</span>}
                <div className="image">
                    <img src={item.img} alt="" />
                </div>
                <h3>{item.title}</h3>
                <div className="prices">
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
    );
};

export default FeaturedCard;
