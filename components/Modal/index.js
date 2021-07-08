import * as Styles from './styles';

export function Modal({
  children, onClose, visible, header,
}) {
  return (
    <Styles.ModalContainer title="Basic Modal" visible={visible}>
      <Styles.ModalHeader>
        <h1>{header}</h1>
        <Styles.CloseButton onClick={onClose}>
          <h2>
            X
          </h2>
        </Styles.CloseButton>
      </Styles.ModalHeader>
      <Styles.ModalWrapper>
        {children}
      </Styles.ModalWrapper>
    </Styles.ModalContainer>
  );
}
