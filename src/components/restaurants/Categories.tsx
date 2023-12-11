import styled, { css } from 'styled-components';

import { Ul, Li, Button } from '../../atoms';

import { ButtonProps } from '../../atoms/Button';

import { row } from '../../../styles/utilStyles';

import useClickCategories from '../../hooks/useClickCategories';

import categories from '../../constants/categories';

const StyledUl = styled(Ul)(
  () => css`
    ${row};

    column-gap: 1rem;

    li {
      flex: 1;
    }

    li > button {
      width: 100%;
    }
  `,
);

interface StyledButtonProps extends ButtonProps {
  $selected?: boolean;
}

const CategoryButton = styled(Button)<StyledButtonProps>`
  background-color: ${({ theme, $selected }) => $selected && theme.palette['green-400']};

  &:hover {
    background-color: ${({ theme, $selected }) => $selected && theme.palette['green-400']};
  }
`;

export default function Categories() {
  const { category, handleClickCategory } = useClickCategories();

  return (
    <StyledUl>
      {categories.map((item) => (
        <Li key={item}>
          <CategoryButton
            className='category-button'
            name={item}
            value={item}
            $selected={item === category}
            type='button'
            onClick={handleClickCategory}
          >
            {item}
          </CategoryButton>
        </Li>
      ))}
    </StyledUl>
  );
}
