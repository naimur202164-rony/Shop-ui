import React from 'react'
import styled from 'styled-components'
import { categories } from '../date'
import CategoryItem from './CategoryItem'

function Categories() {
  const Container=styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

  `;

    // console.log(categories)
  return (
    <Container>
      {categories.map(item=>(
          <CategoryItem key={item.id} item={item}/>
      ) )}
    </Container>
  )
}

export default Categories
