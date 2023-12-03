import styled from 'styled-components';

const Hr = styled.hr`
  width: '100%';
  height: 1px;
  background: ${({ theme }) => theme.palette['grey-300']};
`;

export default Hr;
