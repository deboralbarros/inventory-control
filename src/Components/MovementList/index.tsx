import { useState } from 'react';
import { AddProductButton, Container, Head, HeadItem, InputContainer, InputLabel, Title, Input } from './styles';
import { Movement } from '../../Models/Movement';
import { addProduct } from '../../Services/Products';
import { Modal } from 'antd';
import ProductItem from '../ProductItem';
import MovementItem from '../MovementItem';

interface MovementListProps {
    movements: Movement[]
}

const MovementList = ({ movements }: MovementListProps) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    // const [movement, setMovement] = useState<Movement>({});

    const submit = async () => {
        // await addProduct(movement);
        setModalVisible(false);
    }

    return (
        <Container>
            <Title>Movimentações</Title>

            <Head>
                <HeadItem>ID</HeadItem> 
                <HeadItem>Produto</HeadItem> 
                <HeadItem>Tipo</HeadItem> 
                <HeadItem>Valor de Venda</HeadItem> 
                <HeadItem>Data da Venda</HeadItem>
                <HeadItem>Quantidade</HeadItem>
                <HeadItem>Lucro (saídas)</HeadItem>
            </Head>

            {movements.map((movement, key) => (
                <MovementItem key={key} item={movement} />
            ))}

            <Modal
                title="Adicionar Produto"
                centered
                visible={modalVisible}
                onOk={submit}
                okText='Adicionar'
                cancelText="Cancelar"
                onCancel={() => setModalVisible(false)}
            >
                {/* <InputContainer>
                    <InputLabel>
                        <span>Descrição</span>
                        <Input placeholder="Celular" value={product.description} onChange={e => setProduct({ ...product, description: e.target.value })} />
                    </InputLabel>

                    <InputLabel>
                        <span>Tipo</span>
                        <select value={product.type} onChange={e => setProduct({ ...product, type: e.target.value })} >
                            <option>Selecione uma opção</option>
                            <option value="eletronic">Eletrônico</option>
                            <option value="mobile">Móvel</option>
                            <option value="home_appliances">Eletrodoméstico</option>
                        </select>
                    </InputLabel>

                    <InputLabel>
                        <span>Preço do Fornecedor</span>
                        <Input placeholder="1280" value={product.supplier_value} type="number" onChange={e => setProduct({ ...product, supplier_value: Number(e.target.value) })} />
                    </InputLabel>

                    <InputLabel>
                        <span>Quantidade em Estoque</span>
                        <Input placeholder="50" value={product.stock_quantity} type="number" onChange={e => setProduct({ ...product, stock_quantity: Number(e.target.value) })} />
                    </InputLabel>
                </InputContainer> */}
            </Modal>

            <AddProductButton onClick={() => setModalVisible(true)}>
                Adicionar Movimentação
            </AddProductButton>
        </Container>
    )
};

export default MovementList;
