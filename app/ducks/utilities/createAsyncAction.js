const defaultErrorMap = ( error ) => ( {
    message: error.message,
} );

export default ( type, urlMapper, mapResponseToPayload, mapErrorToMessage = defaultErrorMap ) => ( {
    name: type,
    urlMapper,
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
