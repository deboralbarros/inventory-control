import { useState } from 'react';
import { Product } from '../../Models/Product';
import { Container, Code, Text, ActionButton, Input, InputContainer, InputLabel } from './styles';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import { Popconfirm, message, Modal } from 'antd';
import { deleteProduct, editProduct } from '../../Services/Products';

interface ProductItemProps {
    item: Product;
}

const ProductItem = ({ item }: ProductItemProps) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [product, setProduct] = useState<Product>(item);

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

    const openModal = () => {
        setModalVisible(true);
    }

    const submit = async () => {
        await editProduct(product);
        setModalVisible(false);
    }

    return (
        <Container>
            <Code>{item.code}</Code>
            <Text>{item.description}</Text>
            <Text>{productType}</Text>
            <Text>{price}</Text>
            <Text>{item.stock_quantity}</Text>
            <ActionButton onClick={openModal}>
                <MdModeEditOutline fontSize={24} color='#008cff' cursor='pointer' />
            </ActionButton>

            <Modal
                title="Editar Produto"
                centered
                visible={modalVisible}
                onOk={submit}
                okText='Editar'
                cancelText="Cancelar"
                onCancel={() => setModalVisible(false)}
            >
                <InputContainer>
                    <InputLabel>
                        <span>Descrição</span>
                        <Input value={product.description} onChange={e => setProduct({ ...product, description: e.target.value })} />
                    </InputLabel>

                    <InputLabel>
                        <span>Tipo</span>
                        <select value={product.type} onChange={e => setProduct({ ...product, type: e.target.value })} >
                            <option value="eletronic">Eletrônico</option>
                            <option value="mobile">Móvel</option>
                            <option value="home_appliances">Eletrodoméstico</option>
                        </select>
                    </InputLabel>

                    <InputLabel>
                        <span>Preço do Fornecedor</span>
                        <Input value={product.supplier_value} type="number" onChange={e => setProduct({ ...product, supplier_value: Number(e.target.value) })} />
                    </InputLabel>
                </InputContainer>
            </Modal>

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
