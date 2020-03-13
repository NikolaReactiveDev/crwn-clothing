import React, {Component}  from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import  WithSpinner  from '../../components/with-spinner/with-spinner.component.jsx';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';
import CollectionPage from '../collection/collection.component.jsx';

import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils.js';
import { updateCollections } from '../../redux/shop/shop.actions.js';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    constructor(){
        super();
        this.state = {
            loading: true
        }
    }
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({ loading: false})
        })
    }
    render(){
        const { match } = this.props;
        return (
          <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props}/>} />
            <Route path={`${match.path}/:collectionId`}  render={(props) => <CollectionPageWithSpinner  isLoading={this.state.loading} {...props}/>}/>
          </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);
