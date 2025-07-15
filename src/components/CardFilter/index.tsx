import React, { useContext, useState } from "react";
import "./styles.css";
import { ContextListCount } from "../../utils/context-list";
import * as productService from '../../services/product-service'

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

type Props = {
    onFilter: (min: number, max:number) => void;
}

export default function CardFilter({onFilter} : Props) {

  const [formData, setFormData] = useState<FormData>({});

  const {setContextListCount} = useContext(ContextListCount);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();

    const minInput = String(formData.minPrice);
    const maxInput = String(formData.maxPrice);

    const min = minInput.trim() !== "" ? Number(minInput) : 0;
    const max = maxInput.trim() !== "" ? Number(maxInput) : Number.MAX_VALUE;

    const validMin = isNaN(min) ? 0 : min;
    const validMax = isNaN(max) ? Number.MAX_VALUE : max;

    setContextListCount(productService.findByPrice(validMin, validMax).length);

    onFilter(validMin, validMax);

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
