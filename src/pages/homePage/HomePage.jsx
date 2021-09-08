import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import Button from "../../components/Button";
import GetUser from "./user/GetUser";
import GetRepositories from "./repositories/GetRepositories";
import { Block, Title } from "./style";
import Input from "../../components/Input";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 40px;
  padding: 40px;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
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
const RepositoriesInfoWrap = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;

const HomePage = () => {
  const [inputData, setInputData] = useState("");
  const [login, setLogin] = useState("");
  const [numberOfRepositories, setNumberOfRepositories] = useState(0);

  const getInputData = (value) => {
    setInputData(value);
  };

  const showUser = () => {
    setLogin(inputData);
  };

  return (
    <Wrapper>
      <UserInfoWrap>
        <Block>
          <Title>Enter user login </Title>
          <InputWrap>
            <Input type="text" setInput={getInputData} />
            <Button
              title="send"
              disabled={!inputData ? "disabled" : ""}
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
