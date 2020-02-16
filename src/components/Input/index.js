import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Colors from 'styles/colors';

export default styled.input`
  border: 1px solid ${ Colors.borderColor };
  border-radius: 5px;
  line-height: 20px;
  padding-left: 5px;
`;

export const InputGroup = styled.div`
  width: fit-content;
  height: fit-content;
  
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = ({ icon, color, spin }) => {
  return (
      
        <FontAwesomeIcon
          style={style}
          icon={icon} 
          color={color} 
          spin={spin}/>
  )
}

const style = {
  position: 'absolute',
  right: 5
};