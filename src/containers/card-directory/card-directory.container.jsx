import React from 'react'
import CardItem from '../../components/card-item/card-item.component'
import './card-directory.styles.scss'

class CardDirectory extends React.Component {

    constructor(){
        super();
        this.state = {
            cardItems : [
                {title: 'HATS', subtitle: 'SHOP NOW', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', path: 'hats'},
                {title: 'JACKETS', subtitle: 'SHOP NOW', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'},
                {title: 'SNEAKERS', subtitle: 'SHOP NOW', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'},
                {title: 'WOMENS', subtitle: 'SHOP NOW', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png', size: 'large'},
                {title: 'MENS', subtitle: 'SHOP NOW', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', size: 'large'},
            ]
        }
    }

    render() {
        return (
            <div className="card-directory">
                { this.state.cardItems.map((cardItemProps, key) => (<CardItem key={key} {...cardItemProps} />))}
            </div>
        )
    }
}

export default CardDirectory;