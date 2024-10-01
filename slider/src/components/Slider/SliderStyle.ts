import styled from 'styled-components';

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Slide = styled.div`
  width: 500px;
  height: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Caption = styled.p`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%); 
  font-size: 16px;
  margin: 0; 
  color: white; 
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 5px 10px;
  border-radius: 5px;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 42px;
  cursor: pointer;
  
  &:nth-of-type(1) {
    left: 10px;
  }

  &:nth-of-type(2) {
    right: 10px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const PageDot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${({ active }) => (active ? 'black' : 'gray')};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

export const SlideInfo = styled.div`
  position: absolute;
  top: 10px; 
  left: 10px;
  font-size: 14px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 500px;
  height: 350px;
`;
