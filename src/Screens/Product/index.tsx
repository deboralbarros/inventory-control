import { useState, useEffect } from 'react';
import Header from "../../Components/Header";
import ProductList from "../../Components/ProductList";
import { Container } from "./styles";
import { Product as ProductModel } from '../../Models/Product';
import { getProducts } from '../../Services/Products';

const Product = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const data = await getProducts();

            setProducts(data);
            setLoading(false);
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
