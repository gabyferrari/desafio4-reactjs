import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import "./styles.css";

export default function ListingBody() {

  return (
    <main>
      <section>
        <CardFilter />
        <CardListing />
      </section>
    </main>
  );
}
