const Display = ( { when, children } ) => {
    if ( when ) {
        return [ children ];
    }

    return false;
};

export default Display;
