import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import "./styles.css";
import * as productService from '../../services/product-service';

export default function ListingBody() {

  return (
    <main>
      <section>
            <CardFilter />
        <div className="card-list container mt20">
        {
            productService.findAll().map(
                product => <CardListing key={product.id} product={product} 
            />)
        }
        </div>
      </section>
    </main>
  );
}
