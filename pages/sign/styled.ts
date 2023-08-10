import styled from "styled-components";

export const SignInStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;

  .formWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 50vh;
    border-radius: 5px;
    background-color: #fff;
  }

  .formInput {
    width: 80%;
    height: 2rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem;
  }

  .formButton {
    width: 80%;
    height: 2rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
  }

  .hiddenButton {
    border: none;

    &:hover {
      cursor: default;
    }
  }
`;
