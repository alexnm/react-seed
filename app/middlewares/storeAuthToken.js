import { Cookies } from "../utilities";

const storeAuthToken = store => next => action => {
    const oldToken = store.getState( ).get( "session" ).token;
    const result = next( action );
    const newToken = store.getState( ).get( "session" ).token;
    if ( oldToken !== newToken ) {
        if ( newToken ) {
            Cookies.set( "token", newToken );
        } else {
            Cookies.remove( "token" );
        }
    }

    return result;
};

export default storeAuthToken;
