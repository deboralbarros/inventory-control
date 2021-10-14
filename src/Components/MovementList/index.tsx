import { useState } from 'react';
import { AddProductButton, Container, Head, HeadItem, InputContainer, InputLabel, Title, Input } from './styles';
import { Movement, MovementIn } from '../../Models/Movement';
import { createMovement } from '../../Services/Movements';
import { Modal } from 'antd';
import MovementItem from '../MovementItem';

interface MovementListProps {
    movements: Movement[]
}

const MovementList = ({ movements }: MovementListProps) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [movement, setMovement] = useState<MovementIn>({});

    const submit = async () => {
        await createMovement(movement);
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
                <HeadItem>Data da Movimentação</HeadItem>
                <HeadItem>Quantidade</HeadItem>
                <HeadItem>Lucro (saídas)</HeadItem>
            </Head>

            {movements.map((movement, key) => (
                <MovementItem key={key} item={movement} />
            ))}

            <Modal
                title="Adicionar Movimentação"
                centered
                visible={modalVisible}
                onOk={submit}
                okText='Adicionar'
                cancelText="Cancelar"
                onCancel={() => setModalVisible(false)}
            >
                <InputContainer>
                    <InputLabel>
                        <span>Código do Produto</span>
                        <Input placeholder="3d31c6ef-553a-4059-87e9-fec919c07b4d" value={movement.product} onChange={e => setMovement({ ...movement, product: e.target.value })} />
                    </InputLabel>

                    <InputLabel>
                        <span>Tipo</span>
                        <select value={movement.type} onChange={e => setMovement({ ...movement, type: e.target.value })} >
                            <option>Selecione uma opção</option>
                            <option value="in">Entrada</option>
                            <option value="out">Saída</option>
                        </select>
                    </InputLabel>

                    <InputLabel>
                        <span>Valor de Venda</span>
                        <Input placeholder="1280" value={movement.sale_value} type="number" onChange={e => setMovement({ ...movement, sale_value: Number(e.target.value) })} />
                    </InputLabel>

                    <InputLabel>
                        <span>Data da Movimentação</span>
                        <Input placeholder="dd-mm-yyyy" type="date" value={movement.sale_date} onChange={e => setMovement({ ...movement, sale_date: e.target.value })} />
                    </InputLabel>

                    <InputLabel>
                        <span>Quantidade</span>
                        <Input placeholder="10" type="number"  value={movement.quantity} onChange={e => setMovement({ ...movement, quantity: Number(e.target.value) })} />
                    </InputLabel>
                </InputContainer>
            </Modal>

            <AddProductButton onClick={() => setModalVisible(true)}>
                Adicionar Movimentação
            </AddProductButton>
        </Container>
    )
};

export default MovementList;
