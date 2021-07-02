import * as Styles from './styles';

export function Modal({ children, onClose, visible }) {
  return (
    <Styles.ModalContainer title="Basic Modal" visible={visible}>
      <Styles.CloseButton onClick={onClose}>
        <h2>
          X
        </h2>
      </Styles.CloseButton>
      <Styles.ModalWrapper>
        {children}
      </Styles.ModalWrapper>
    </Styles.ModalContainer>
  );
}
