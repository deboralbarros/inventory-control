import { Product } from '../../Models/Product';
import { Container, Code, Text, ActionButton } from './styles';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import { Popconfirm, message } from 'antd';
import { deleteProduct } from '../../Services/Products';

interface ProductItemProps {
    item: Product;
}

const ProductItem = ({ item }: ProductItemProps) => {
    const price = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.supplier_value!);
    const productType = item.type === 'eletronic' 
        ? 'Eletrônico' 
        : item.type === 'home_appliances' 
        ? 'Eletrodoméstico' 
        : 'Móvel';

    const deleteItem = async () => {
        await deleteProduct(item.code!);
        message.success('Produto apagado');
    }

    return (
        <Container>
            <Code>{item.code}</Code>
            <Text>{item.description}</Text>
            <Text>{productType}</Text>
            <Text>{price}</Text>
            <Text>{item.stock_quantity}</Text>
            <ActionButton>
                <MdModeEditOutline fontSize={24} color='#008cff' cursor='pointer' />
            </ActionButton>
            <Popconfirm 
                title="Tem certeza que quer apagar este produto?"
                onConfirm={deleteItem}
                okText="Sim"
                cancelText="Não"
            >
                <ActionButton>
                    <MdDelete fontSize={24} color='#f54114' cursor='pointer' />
                </ActionButton>
            </Popconfirm>
        </Container>
    )
};

export default ProductItem;
