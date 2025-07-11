import "./styles.css";

export default function CardFilter() {

  return (
    <div className="card-filter container mt20 main">
      <form>
        <div>
          <input
            className="search-box"
            type="text"
            placeholder="Preço mínimo"
          />
        </div>
        <div>
          <input
            className="search-box"
            type="text"
            placeholder="Preço mínimo"
          />
        </div>

        <button className="button-style">Filtrar</button>
      </form>
    </div>
  );
}
