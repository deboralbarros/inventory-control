import { useState, useEffect } from 'react';
import Header from "../../Components/Header";
import MovementList from '../../Components/MovementList';
import { Container } from "./styles";
import { Movement as MovementModel } from '../../Models/Movement';
import { getMovements } from '../../Services/Movements';

const Movement = () => {
    const [movements, setMovements] = useState<MovementModel[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getMovements();

            setMovements(data);
        })();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <MovementList movements={movements} />
            </Container>
        </>
    )
};

export default Movement;
