import './card-item.styles.scss';
import { Link } from 'react-router-dom'

const CardItem = ({ title, subtitle, imageUrl, size, path}) => (
    <Link className={`card-item ${size === 'large'? 'card-bg': 'card-md'} link-without-styles`} to={path}>  
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className='card-details'>
            <h1 className="title">
                { title }
            </h1>
            <span className="subtitle">
                { subtitle }
            </span>
        </div>  
    </Link>
)

export default CardItem;