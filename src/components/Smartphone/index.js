import styled from 'styled-components';

import Sizes from 'styles/sizes';
import Colors from 'styles/colors';

export default styled.div`
  width: ${ Sizes.smartphoneWidth };
  height: ${ Sizes.smartphoneHeight };
  display: flex;
  flex-wrap: wrap;

  padding: 20px 20px 80px 20px;

  border: 1px solid ${ Colors.smartphonePrimaryColor };
  border-radius: 50px;

  background-color: ${ Colors.smartphonePrimaryColor };
`;

export const SmartphoneScreen = styled.div`
  background-color: white;
  border-radius: 2px;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SmartphoneHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const SmartphoneFooter = styled(SmartphoneHeader)`
  margin-bottom: 0px;
  margin-top: 10px;
`;

export const SmartphoneAudio = styled.div`
  width: 50px;
  height: 5px;
  background-color: white;
  border-radius: 20px;
`;

export const SmartphoneButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${ Colors.smartphoneButtonColor };
`;