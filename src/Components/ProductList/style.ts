import styled from 'styled-components';

export const Container = styled.div`
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.5);
    background: #fff;
`;

export const Title = styled.h1`
    margin: 5px;
    font-weight: 500;
`;

export const Head = styled.div`
    border-bottom: 1px solid #ddd;
    width: 90%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    font-weight: 500;
    color: #fff;
    background: rgba(0, 0, 0, 0.75);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const HeadItem = styled.p`
    font-size: 1rem;
    width: 135%;
    text-align: center;
    margin: 0;
`;