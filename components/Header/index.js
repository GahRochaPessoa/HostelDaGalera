import { Menu } from '../Menu';
import * as Styles from './styles';

export function Header({ header }) {
  return (
    <Styles.HeaderContainer>
      <Menu />
      <Styles.HomeTitle>
        <h1>{header}</h1>
      </Styles.HomeTitle>
    </Styles.HeaderContainer>
  );
}
