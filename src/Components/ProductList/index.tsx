import { Container, Head, HeadItem, Title } from './style';
import { Product } from '../../Models/Product';
import ProductItem from '../ProductItem';

interface ProductListProps {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
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

            {products.map(product => (
                <ProductItem item={product} />
            ))}
        </Container>
    )
};

export default ProductList;
