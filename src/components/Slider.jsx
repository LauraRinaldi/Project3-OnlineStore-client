import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  `;


const Slider = () => {
  
  

  return (
    <Container>
        <Arrow>
        <ChevronLeftRoundedIcon/>
        </Arrow>
        <Arrow>
        <ChevronRightRoundedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider