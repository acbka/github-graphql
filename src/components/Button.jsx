import styled from "@emotion/styled/macro";

const Btn = styled.button`
  width: 100%;
  height: 44px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 700px;
  border: none;
  border-radius: 25px;
  margin: 10px auto;
  cursor: pointer;
  color: #fff;
  background: var(--color-dark);
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  &:hover {
    color: #fff;
    background: var(--color-light);
  }
  &:active {
    box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  }
  &:disabled {
    color: var(--color-dark);
    background: var(--color-grey);
  }
`;

const Button = ({ title, disabled, className, handleClick }) => {
  return (
    <Btn className={className} disabled={disabled} onClick={handleClick}>
      {title}
    </Btn>
  );
};

export default Button;
