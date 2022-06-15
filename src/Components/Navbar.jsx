import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import styled from "styled-components";
function Navbar() {
  const Container = styled.div`
    height: 60px;
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
  `;

  const Input = styled.input`
    border: none;
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;
  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const Right = styled.div`
    flex: 1;
    display:flex ;
    align-items:center;
    justify-content:flex-end;

  `;

  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
  `;

  // Center
  const Logo = styled.h1`
    font-weight: bold;
  `;

  // Menu Item

  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:25px ;
  `;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon style={{color:"gray",fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LMW</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTAR</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
