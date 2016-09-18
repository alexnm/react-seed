const defaultErrorMap = ( error ) => ( {
    message: error.message,
} );

export default ( type, mapResponseToPayload, mapErrorToMessage = defaultErrorMap ) => ( {
    name: type,
    started: {
        type,
    },
    completed: ( response ) => ( {
        type: `${ type }_COMPLETED`,
        payload: mapResponseToPayload( response ),
    } ),
    failed: ( error ) => ( {
        type: `${ type }_FAILED`,
        payload: mapErrorToMessage( error ),
    } ),
} );
