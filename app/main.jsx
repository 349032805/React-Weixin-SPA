import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Nav from './components/index/Nav.jsx'
import Home from './components/index/Home.jsx'
import CustomerOrder from './components/customer-order/CustomerOrder.jsx'
import My from './components/my/My.jsx'

//页面列表
import Template from './components/template/Template.jsx'
import ProductItem from './components/product-item/ProductItem.jsx'
import ProductDetail from './components/product-detail/ProductDetail.jsx'
import ProductIntro from './components/product-intro/ProductIntro.jsx'
import Params from './components/product-intro/Params.jsx'
import Supplier from './components/product-intro/Supplier.jsx'
import OrderConfirm from './components/order-confirm/OrderConfirm.jsx'

import MyOrder from './components/my-orders/MyOrder.jsx'
import SignContract1 from './components/sign-contract/SignContract1.jsx'

import NoAuthModal from './components/modal/NoAuthModal.jsx'
import TipBubble from './components/modal/TipBubble.jsx'

import Test from './components/template/Test.jsx'

render((
    <Router history={browserHistory}>
        <Route path="/" component={Nav}>
            <IndexRoute component={Home}/>
            <Route path="/productIntro" component={ProductIntro}/>
            <Route path="/order" component={MyOrder}/>
            <Route path="/my" component={My}/>
        </Route>

        <Route path="/template" component={Template}/>
        <Route path="/productItem" component={ProductItem}/>
        <Route path="/productDetail" component={ProductDetail}/>
        <Route path="/productIntro" component={ProductIntro}/>
        <Route path="/params" component={Params}/>
        <Route path="/supplier" component={Supplier}/>
        <Route path="/orderConfirm" component={OrderConfirm}/>

        <Route path="/myOrder" component={MyOrder}/>
        <Route path="/signContract1" component={SignContract1}/>

        <Route path="/noAuthModal" component={NoAuthModal}/>
        <Route path="/tipBubble" component={TipBubble}/>

        <Route path="/test" component={Test}/>

    </Router>

), document.getElementById('app'));