import { useState } from 'react';
import { AddProductButton, Container, Head, HeadItem, InputContainer, InputLabel, Title, Input } from './style';
import { Product } from '../../Models/Product';
import { addProduct } from '../../Services/Products';
import { Modal } from 'antd';
import ProductItem from '../ProductItem';

interface ProductListProps {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [product, setProduct] = useState<Product>({});

    const submit = async () => {
        await addProduct(product);
        setModalVisible(false);
    }

    return (
        <Container>
            <Title>Produtos</Title>

            <Head>
                <HeadItem>Código</HeadItem> 
                <HeadItem>Descrição</HeadItem> 
                <HeadItem>Tipo</HeadItem> 
                <HeadItem>Preço do Fornecedor</HeadItem> 
                <HeadItem>Quantidade em Estoque</HeadItem>
                <div style={{ width: 700 }}></div>
            </Head>

            {products.map((product, key) => (
                <ProductItem key={key} item={product} />
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
                <InputContainer>
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
                </InputContainer>
            </Modal>

            <AddProductButton onClick={() => setModalVisible(true)}>
                Adicionar Produto
            </AddProductButton>
        </Container>
    )
};

export default ProductList;
