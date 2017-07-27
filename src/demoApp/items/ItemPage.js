import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Item from './components//Item/Item';
import ExpiredInfo from './components/ExpiredInfo/ExpiredInfo';
import './ItemPage.css';

const ItemPage = inject('itemStore', 'routerStore')(observer(class ItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showExpiredInfo: false
        }
        this.pushToLogin = this.pushToLogin.bind(this);
    }
    
    componentDidMount() {
        let headers = {
            'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
        }

        fetch('http://recruits.siennsoft.com/api/products', { method: 'GET', headers }).then((response) => {
            response.status === 200 ? this.setState({ showExpiredInfo: false }) : this.setState({ showExpiredInfo: true });
            return response.json();
        }).then((data) => {
            console.log(data);
            this.props.itemStore.items = data;
        }).catch((err) => {
            console.log(err);
        });
    }

    pushToLogin() {
        this.props.routerStore.push('/');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                {!this.state.showExpiredInfo ?
                    <div>
                        <h1>Items</h1>
                        <div className="item-container">
                            {this.props.itemStore.items.map(item => {
                                return <Item key={item.productID} description={item.description} name={item.name} price={item.price} />
                            })}
                        </div>
                    </div> : <ExpiredInfo onExpiredInfoClick={this.pushToLogin}/>}
            </div>
        );
    }
}))

export default ItemPage;