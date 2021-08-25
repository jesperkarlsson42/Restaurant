import React, {useState} from 'react';
import styled from 'styled-components';

interface IMenuProps {
    isOpen: boolean;
}


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo>Athena</Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink href="#">Boka bord</MenuLink>
                <MenuLink href="#">Meny</MenuLink>
                <MenuLink href="#">Admin</MenuLink>
            </Menu>
        </Nav>
    )
}

const Nav = styled.div`
    background: #67bc98;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 25px;
        background: black;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`;

const Logo = styled.a`
    padding: 1rem 0;
    color: #fff;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${(props : IMenuProps) => (props.isOpen ? "300px" : "0px")};
    }

`;

const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #fff;
    transition: all 0.3 ease-in;
    font-size: 0.9rem;
    &:hover {
        color: black;
    }
`;
