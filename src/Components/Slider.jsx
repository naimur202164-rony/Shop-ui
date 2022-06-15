import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import styled from "styled-components";
export default function Slider() {
  const Container = styled.div`
    margin-top: 15px;
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
  `;

  const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor:pointer;
    opacity:0.5;
  `;


    const Wrapper=styled.div`
        height:100vh;


    `
    const Silder=styled.div`
    width:100vh;
    height:100vh;
    display:flex;
    align-items:center;
    `;
    const ImgContainer=styled.div`
    flex:1;

    `;

    const Image=styled.img`
    height:80%;
    `
    const InfoContainer=styled.div`
    flex:1;
    padding:50px;
    `;
    const Title=styled.h1``
    const Desce=styled.p``
    const Button=styled.button``
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper>
        <ImgContainer>
        <Image src="https://i.ibb.co/cXFnLLV/3.png"/>
        </ImgContainer>
        <InfoContainer>
            <Title>SUMMER SAL</Title>
            <Desce>DONT  COMPROMISE ON STYLE ! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desce>
            <Button>SHOP NOW</Button>
        </InfoContainer>
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
}
