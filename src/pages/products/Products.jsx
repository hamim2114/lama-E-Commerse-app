import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import List from '../../components/list/List'
import './products.scss'

const Products = () => {
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState(null);
	console.log(sort)
	const catId = useParams().id;

	useEffect(() => {
		window.scrollTo(0,0)
	},[])

  return (
    <div className='products'>
		<div className="left">
			<div className="filterItem">
				<h2>Products Categories</h2>
				<div className="inputItem">
					<input type="checkbox" id='1' value={1} />
					<label htmlFor="1">Shoes</label>
				</div>
				<div className="inputItem">
					<input type="checkbox" id='1' value={1} />
					<label htmlFor="1">Coats</label>
				</div>
				<div className="inputItem">
					<input type="checkbox" id='1' value={1} />
					<label htmlFor="1">Skirts</label>
				</div>
			</div>
			<div className="filterItem">
				<h2>Filter by price</h2>
				<div className="range">
					<span>0</span>
					<input type="range" min={0} max={1000} onChange={e => setMaxPrice(e.target.value)} />
					<span>{maxPrice}</span>
				</div>
			</div>
			<div className="filterItem">
				<h2>Sort by</h2>
				<div className="inputItem">
					<input type="radio" name="price" id="asc" onChange={() => setSort('asc')} />
					<label htmlFor="asc">Price (Lowest first)</label>
				</div>
				<div className="inputItem">
					<input type="radio" name="price" id="desc" onChange={() => setSort('desc')} />
					<label htmlFor="desc">Price (Highest first)</label>
				</div>
			</div>
		</div>
		<div className="right">
			<img className='topImg' src="https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
			<List catId={catId} maxPrice={maxPrice} sort={sort} />
		</div>
    </div>
  )
}

export default Products