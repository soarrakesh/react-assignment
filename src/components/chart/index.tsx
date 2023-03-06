import styled from 'styled-components';

export const ChartsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  text-align: center;
  @media all and (max-width: 768px) {
    flex-direction: column;
    flex: 50%;
  }
`;

export const ChartItem = styled.div`
  flex: 1;
  padding: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;

export const ChartTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-family: 'Segoe UI', Arial, sans-serif;
  font-weight: 400;
`;
