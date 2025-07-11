import React, { useState } from "react";
import "./styles.css";

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

type Props = {
    onFilter: (min: number, max:number) => void;
}

export default function CardFilter({onFilter} : Props) {
  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="card-filter container mt20 main">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            name="minPrice"
            value={formData.minPrice || ""}
            className="search-box"
            type="text"
            placeholder="Preço mínimo"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            name="maxPrice"
            value={formData.maxPrice || ""}
            className="search-box"
            type="text"
            placeholder="Preço máximo"
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="button-style">Filtrar</button>
      </form>
    </div>
  );
}
