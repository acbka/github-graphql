import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import Button from "../../components/Button";
import GetUser from "./user/GetUser";
import GetRepositories from "./repositories/GetRepositories";
import { Block, Title } from "./style";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 40px;
  padding: 40px;
  overflow: hidden;
`;
const UserInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const InputWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  align-items: center;
`;
const StyledInput = styled.input`
  height: 40px;
  border: 2px solid var(--color-dark);
  border-radius: 4px;
`;
const RepositoriesInfoWrap = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [login, setLogin] = useState("");
  const [numberOfRepositories, setNumberOfRepositories] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const showUser = () => {
    setLogin(inputValue);
    setInputValue("");
  };

  return (
    <Wrapper>
      <UserInfoWrap>
        <Block>
          <Title>Enter user login </Title>
          <InputWrap>
            <StyledInput
              type="text"
              name="input"
              value={inputValue}
              onChange={handleChange}
            />
            <Button
              title="send"
              disabled={!inputValue ? "disabled" : ""}
              handleClick={showUser}
            />
          </InputWrap>
        </Block>
        {login && (
          <Block>
            <GetUser
              login={login}
              getNumberOfRepositories={setNumberOfRepositories}
            />
          </Block>
        )}
      </UserInfoWrap>
      <RepositoriesInfoWrap>
        {!!numberOfRepositories && (
          <GetRepositories
            login={login}
            numberOfRepositories={numberOfRepositories}
          />
        )}
      </RepositoriesInfoWrap>
    </Wrapper>
  );
};

export default HomePage;
