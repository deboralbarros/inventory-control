import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 65px;
    background: #114df2;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Menu = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-around;
`;

export const MenuItem = styled(Link)`
    color: #fff;
    font-size: 1.4rem;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;

export const Title = styled.p`
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
`;
