import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 8px solid #fcfcfc;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: var(--grey);

  img {
    background-color: var(--white);
  }

  h3 {
    font-size: 2rem;
    font-weight: 900;
    margin-top: 5px;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 900;
  background-color: var(--black);
  color: var(--white);
`;

export { Container, Price };
