import styled from 'styled-components';
import { Link } from 'react-router-dom'


const Logo = () => {
    return(<>
    <LogoStyle><Link to='/home-page' style={{ textDecoration: 'none', color: 'black' }}>TripN</Link></LogoStyle>
    </>)
}


export default Logo


const LogoStyle = styled.h1`
    height: auto;
    width: auto;
    font-size: 80px;
    text-align: center;
    font-size: 100px;
    margin: 60px 230px 10px;
    `
