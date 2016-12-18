import { LocalStorage } from "../utilities";

const storeAuthToken = store => next => action => {
    const oldCart = store.getState( ).get( "cart" );
    const result = next( action );
    const newCart = store.getState( ).get( "cart" );

    if ( oldCart.length !== newCart.length ) {
        LocalStorage.saveCart( newCart );
    }

    return result;
};

export default storeAuthToken;
