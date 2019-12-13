import styled from 'styled-components';
import { medGrey, darkerGrey } from './GlobalStyle';

const Card = styled.div`
    padding: 20px;
    background: ${({dark}) => dark ? darkerGrey : 'white' };
    margin-top: 20px;
    box-shadow: 0px 3px 5px ${({dark}) => dark ? 'black' : medGrey };
    box-sizing: border-box;
    ${({height}) => height && `height: ${height}px;`};
    @media(max-width: 1200px) {
        padding: 10px;
    }
`;

export default Card;