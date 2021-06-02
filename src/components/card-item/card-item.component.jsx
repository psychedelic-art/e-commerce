import './card-item.styles.scss';
import { withRouter } from 'react-router-dom'

const CardItem = ({ title, subtitle, imageUrl, size, history, path, match, location}) => (
    <div className={`card-item ${size === 'large'? 'card-bg': 'card-md'} link-without-styles`}
        onClick={() => history.push(`${match.url}${path}`)}>  
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className='card-details'>
            <h1 className="title">
                { title }
            </h1>
            <span className="subtitle">
                { subtitle }
            </span>
        </div>  
    </div>
)

export default withRouter(CardItem);