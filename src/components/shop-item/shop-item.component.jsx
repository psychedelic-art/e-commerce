import './shop-item.styles.scss'

const ShopItem = ({ imageUrl, path, name, price}) => {
    return (<div className="shopping-item">
                <div className="shopping-cover">
                  <div className="shopping-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
                  <button className="btn btn-gray btn-hide">ADD TO CART</button>
                </div>
                <div className="shopping-info">
                  <h3 className="shooping-item-name">{ name }</h3>
                  <span className="shopping-item-price">{ price }</span>
                </div>
              </div>)
}


export default ShopItem;
