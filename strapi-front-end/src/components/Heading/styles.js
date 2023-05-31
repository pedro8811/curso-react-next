import styled, { css } from 'styled-components';

export const Title = styled.h1.attrs({ as: 'div' })`
  ${({ theme, colorDark }) => css`
    color: ${colorDark ? '#0A1128' : '#fff'};
  `}
`;
