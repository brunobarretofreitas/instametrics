import styled from 'styled-components';

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  padding: 5px;
`;

export const HomeHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
`;

export const HomeContent = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HomeContentImg = styled.img`
  width: 150px;
  height: 150px;

  margin-bottom: 10px;
`;

export const HomeText = styled.p`
  font-size: 12px;
`;
