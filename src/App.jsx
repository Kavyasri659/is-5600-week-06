import React from "react";
import productData from "./data/full-products";
import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <h1>Hello There.</h1>
      <Header />
      <CardList data={productData} />

      {/* Uncomment if routes are added */}
      {/* <Routes>
          <Route path="/" element={<CardList data={productData} />} />
          <Route path="/product/:id" element={<SingleView data={productData} />} />
        </Routes> */}
    </div>
  );
}

export default App;
