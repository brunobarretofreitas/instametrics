import styled, { css } from 'styled-components';

export default styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;

  ${props => props.center && css`
    justify-content: center;
    align-items: center;
  `}
`;
