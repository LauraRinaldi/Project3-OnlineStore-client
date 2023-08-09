import { Link } from "react-router-dom";
import styled from 'styled-components'
import Categoryitem from "./Categoryitem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((product) => (
        <Categorieitem product={product} key={product.id} />
      ))}
    </Container>

  )
}

export default Categories