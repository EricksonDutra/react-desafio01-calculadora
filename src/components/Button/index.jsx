/* eslint-disable react/prop-types */

import { ButtonContainer } from './styles';

const Button = (props) => {
    return (
      <ButtonContainer onClick={props.onClick} type="button">
       {props.label}
      </ButtonContainer>
    );
  }
  
  export default Button;