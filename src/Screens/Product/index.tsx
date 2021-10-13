import { useState, useEffect } from 'react';
import Header from "../../Components/Header";
import ProductList from "../../Components/ProductList";
import { Container } from "./styles";
import { Product as ProductModel } from '../../Models/Product';
import { getProducts } from '../../Services/Products';

const Product = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getProducts();

            setProducts(data);
        })();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <ProductList products={products} />
            </Container>
        </>
    )
};

export default Product;
