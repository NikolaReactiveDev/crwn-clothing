import React, { Component } from 'react'
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';

import { auth, createUserPorfileDocument } from './firebase/firebase.utils.js';
import { setCurrentUser } from './redux/user/user.actions.js';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from  './redux/user/user.selectors.js';



class App extends Component {

    unsubscribeFromAuth = null;

    componentDidMount(){
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserPorfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                     setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                });
            }else{
                setCurrentUser( userAuth )
            }
        })

    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }
    render(){
      return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/checkout' component={CheckoutPage}/>
                <Route exact path='/signin' render={() => (
                    this.props.currentUser ?
                    <Redirect to='/'/> :
                    <SignInAndSignUpPage />
                )}/>
            </Switch>
        </div>
        );
    }
}

const mapStateToProps= createStructuredSelector({
    currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
