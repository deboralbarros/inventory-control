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

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.1rem;
    margin: 5px 0;

    span {
        align-self: flex-start;
    }

    select {
        padding: 8px;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #ccc;
        color: rgba(0, 0, 0, 0.7);
        font-size: 1rem;
        background: #fff;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    color: rgba(0, 0, 0, 0.7);
    font-size: 1rem;
`;

export const AddProductButton = styled.button`
    margin: 10px;
    width: 200px;
    padding: 8px;
    border: none;
    background: #008cff;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s;

    :hover {
        background: #114df2;
    }
`;
