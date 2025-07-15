import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextListCount } from "./utils/context-list";
import * as productService from './services/product-service';

export default function App() {

  const [contextListCount, setContextListCount] = useState<number>(0);

  useEffect(() => {
    setContextListCount(productService.findByPrice(0, Number.MAX_VALUE).length);
  }, []);

  return (
    <ContextListCount.Provider value={{contextListCount, setContextListCount}}>
      <>
        <Header />
        <ListingBody />
      </>
    </ContextListCount.Provider>
  );
}
