import React from "react";
import styled from "styled-components";
import { popularProducts } from "../date";
import Product from "./Product";

export default function Products() {
  const Container = styled.div`
  padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
}
