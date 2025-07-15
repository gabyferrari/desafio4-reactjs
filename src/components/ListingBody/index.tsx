import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import "./styles.css";
import * as productService from '../../services/product-service';
import { useState } from "react";

export default function ListingBody() {

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Number.MAX_VALUE);

  function handleOnFilter(min: number, max: number) {
    setMinPrice(min);
    setMaxPrice(max);
  }

  return (
    <main>
      <section>
            <CardFilter onFilter={handleOnFilter} />
        <div className="card-list container mt20">
        {
            productService.findByPrice(minPrice, maxPrice).map(
                product => <CardListing key={product.id} product={product} 
            />)
        }
        </div>
      </section>
    </main>
  );
}
