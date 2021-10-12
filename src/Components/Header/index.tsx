import { Container, Menu, MenuItem, Title } from './styles';

const Header = () => {
    return (
        <Container>
            <Title>Inventory Control</Title>

            <Menu>
                <MenuItem to="/">Produtos</MenuItem>
                <MenuItem to="/movements">Movimentações</MenuItem>
            </Menu> 
        </Container>
    )
}

export default Header;
