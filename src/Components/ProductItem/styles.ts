import styled from 'styled-components';

export const Container = styled.div`
    border-bottom: 1px solid #ddd;
    width: 90%;
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgba(0, 0, 0, 0.75);
    font-weight: 500;
`;

export const Code = styled.p`
    font-size: 0.75rem;
    width: 100%;
    text-align: center;
    margin: 0;
    `;

export const Text = styled.p`
    width: 100%;
    text-align: center;
    margin: 0;
    `;

export const ActionButton = styled.button`
    width: 250px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
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
