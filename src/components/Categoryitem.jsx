import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  `;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const Categoryitem = ( { product }) => {
  return (
    <Container>
    <Image src={product.img} />
    <Title>{product.title}</Title>
    <Button>SHOP NOW</Button>
    </Container>
  )
}

export default Categoryitem