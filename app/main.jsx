import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Nav from './components/index/Nav.jsx'
import Home from './components/index/Home.jsx'
import CustomerOrder from './components/customer-order/CustomerOrder.jsx'
import Order from './components/order/Order.jsx'
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


import Login from './components/login-register/Login.jsx'
import Register from './components/login-register/Register.jsx'
import SetPassword from './components/login-register/SetPassword.jsx'

import NoAuthModal from './components/modal/NoAuthModal.jsx'
import PayFailModal from './components/modal/PayFailModal.jsx'
import TipBubble from './components/modal/TipBubble.jsx'

import Test from './components/template/Test.jsx'

import Edu from './components/edu/Edu.jsx'
import EduDetails from './components/edu-details/EduDetails.jsx'

render((
    <Router history={browserHistory}>
        <Route path="/" component={Nav}>
            <IndexRoute component={Home}/>
            <Route path="/customerOrder" component={CustomerOrder}/>
            <Route path="/order" component={Order}/>
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

        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/setPassword" component={SetPassword}/>

        <Route path="/noAuthModal" component={NoAuthModal}/>
        <Route path="/payFailModal" component={PayFailModal}/>
        <Route path="/tipBubble" component={TipBubble}/>

        <Route path="/test" component={Test}/>

         <Route path="/edu" component={Edu}/>
        <Route path="/edu-details" component={EduDetails}/>


    </Router>

), document.getElementById('app'));