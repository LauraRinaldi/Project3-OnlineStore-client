import styled from 'styled-components'


const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Junior in Stock</Logo>
          <Desc>
          In our stores you will find a line of clothing and footwear for children aged 0 to 14.
          In our stores you will find the elegance and attention to detail to dress your children in a classic style that never sets with all the passion and affection that our mothers and grandmothers employed. Our first store was founded in 1999 and over the years it has become a point of reference in the classic style clothing and footwear sector for babies and children from 0 to 14 years old.
          Our brands that we commercialize are 100% Italian designed and produced and each product is manufactured with the best natural raw materials of tradition: cotton, linen, wool, merino wool and cashmere.
          In our stores you will find a vast assortment of garments and footwear for every need and requirement. You can also find layettes for babies, hats, caps, scarves and mittens for the cold season, spring, summer or Christmas ceremonial dresses. Coats and duvets, ski suits, jackets, sweaters, pyjamas, Bermuda shorts, trousers, dresses, polo shirts, shirts and genuine leather shoes, soft and comfortable, designed for little feet. You will therefore have a wide choice of products of every model and fantasy, material and color.
          Opening information: our shops are open from 09:30 to 19:00 from Monday to Saturday. See in detail the page "Where we are". In case of extraordinary openings or closures for holidays, the communication will be given on this page. You can also buy online, from home or from your office, in comfort and at any time because the service is active 24 hours a day. Your shipment will be processed within 48 hours of receipt of payment.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Boys</ListItem>
            <ListItem>Girls</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Via G. di Vittorio 20/22 27012 - Certosa di Pavia (PV)
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/>  +39 0382 93 40 46 - 02 49 77 1932
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> info@magia50.it
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };

export default Footer