import React from "react";
import { Route } from "react-router-dom";
import  CollectionOverview  from "../../components/collection-overview/collection-overview.component";
import CollectionPage  from "../collection/collection.component";

const ShopPage = ({match}) => (
  <div className="shop-page">
  <Route exact component ={CollectionOverview} path={`${match.path}`} />
  <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
);



export default ShopPage;
