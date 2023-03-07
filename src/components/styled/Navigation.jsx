import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  IoNotifications,
  IoHome,
  IoMail,
  IoLogOut,
  IoCaretDown,
} from 'react-icons/io5';
import { Logo } from './Logo';
import { Input } from './Form';
import { asyncLogOut } from '../../states/authUser/action';

function Navigation() {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Navbar>
      <NavBrand>
        <Logo width="35px" />
        <SearchBox>
          <Input placeholder="# Explore" />
        </SearchBox>
      </NavBrand>
      <NavList>
        <Nav to="/" className="home">
          <IoHome />
          <h5>Home</h5>
        </Nav>
        <Nav className="message">
          <IoMail />
        </Nav>
        <Nav className="notifications">
          <IoNotifications />
        </Nav>
        <Nav className="profile">
          <img src={authUser.avatar} alt={authUser.name} />
          <h5>{authUser.name}</h5>
          <IoCaretDown className="carret" />
        </Nav>
        <Nav
          className="signout"
          onClick={() => dispatch(asyncLogOut())}
        >
          <IoLogOut />
        </Nav>
      </NavList>
    </Navbar>
  );
}

export default Navigation;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 2rem;
`;

const NavBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  figure {
    border-color: transparent;
  }
`;

const SearchBox = styled.div`
  width: 300px;
  height: 35px;

  input {
    border-radius: 10px;

    ::placeholder {
      font-weight:600;
    }
  }
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Nav = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  color: #c7d6e5;
  text-transform: capitalize;
  gap: 8px;
  padding: 8px;
  transition: all 150ms ease;

  svg {
    font-size: 22px;
  }

  &.home {
    gap: 4px;
    padding: 6px 10px;
    background-color: #f5feff;

    svg {
      color: #00aeef;
    }

    h5 {
      font-size: 16px;
      color: #000;
      font-weight: 600;
    }

    :hover {
      background-color: #2a3944;
      h5 {
        color: #f5feff;
      }
    }
  }

  &.profile {
    min-width: 150px;
    padding: 6px;
    justify-content: start;
    background-color: #2a3944;

    img {
      width: 25px;
      border-radius: 50%;
    }

    h5 {
      font-size: 16px;
      font-weight: 400;
      color: #fff;
    }

    .carret {
      font-size: 18px;
      margin-left: auto;
    }
  }

  :hover {
    background-color: #f5feff;
    h5,
    .carret {
      color: #000;
    }
  }

  :is(.message, .notifications, .signout):hover {
    background-color: #2a3944;
  }
`;
