import { Router } from "express";
import data from "./apiData.json";

const router = new Router();

router.get( "/products", ( req, res ) => {
    res.json( data.products );
} );

router.get( "/products/:id", ( req, res ) => {
    const product = data.products.filter( p => p.id == req.params.id )[ 0 ];
    res.json( product );
} );

export default router;
