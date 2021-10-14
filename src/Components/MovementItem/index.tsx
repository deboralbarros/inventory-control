import { Movement } from '../../Models/Movement';
import { Container, Text } from './styles';

interface MovementItemProps {
    item: Movement;
}

const MovementItem = ({ item }: MovementItemProps) => {
    const price = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.sale_value!);
    const movementType = item.type === 'in' 
        ? 'Entrada' 
        : 'Saída';

    const date = item.sale_date = new Date(item.sale_date!).toLocaleDateString();

    const profitNumber = item.type === 'out' ? item.sale_value! - item.product?.supplier_value! : null;
    const profit = profitNumber && new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(profitNumber);

    return (
        <Container>
            <Text>{item.id}</Text>
            <Text>{item.product?.description}</Text>
            <Text>{movementType}</Text>
            <Text>{price}</Text>
            <Text>{date}</Text>
            <Text>{item.quantity}</Text>
            <Text>{profit}</Text>
        </Container>
    )
};

export default MovementItem;
