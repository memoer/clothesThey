import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { hoverEffect } from 'styles/mixins';

export const Header = styled.header`
  min-height: ${props => props.theme.SIZE.HOME_HEADER};
  /* background-color: white; */
  ${props =>
    props.pathname.includes('board')
      ? css`
          min-height: ${props.theme.SIZE.BOARD.HEADER};
        `
      : null}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 ${props => props.theme.GAP.REGULAR};
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  justify-self: flex-start;
`;

export const Logo = styled(NavLink)`
  all: unset;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  padding: ${props => props.theme.GAP.REGULAR};
  font-size: ${props => props.theme.FONT_SIZE.TITLE};
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  cursor: pointer;
  ${hoverEffect.button()}
`;

export const CategoryContainer = styled.nav`
  display: flex;
  justify-self: center;
`;

export const Category = styled(NavLink)`
  all: unset;
  display: block;
  padding: ${props => props.theme.GAP.REGULAR};
  cursor: pointer;
  transition: ${props => props.theme.TRANSITION.REGULAR};
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  ${hoverEffect.button()}
`;

export const ButtonContainer = styled.div`
  justify-self: flex-end;
  border: 1px solid black;
  border-radius: ${props => props.theme.BORDER_RADIUS.SMALL};
  button {
    border: none;
    border-radius: 0;
    &:first-child {
      border-right: 1px solid ${props => props.theme.PRIMARY};
    }
  }
`;
