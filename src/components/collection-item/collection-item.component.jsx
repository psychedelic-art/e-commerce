import ShopItem from '../shop-item/shop-item.component';
import './collection-item.styles.scss'


function createShoppingItems(shoopingItems) { 
    return shoopingItems.map(shoopingItem => <ShopItem {...shoopingItem } /> )
}

const CollectionItem = ({collection}) => {
    return (<div className="collection-item">
        <div className="collection-name">
            { collection?.title }
        </div>
        <div className="shopping-list">
            { 
                collection?.items ?
                createShoppingItems(collection.items) :
                <></>
            }
        </div>
    </div>)
}

export default CollectionItem;
