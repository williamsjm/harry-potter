import React from "react";
import useHarryPotterCharacters from "../../../hooks/useHarryPotterCharacters";
import { Avatar, List, Spin } from "antd";
import { Container, SpinerContainer, WelcomeText } from "./Characters.styles";
import { useTranslation } from "react-i18next";

const Characters: React.FC = () => {
  const { characters, isLoading, error } = useHarryPotterCharacters();
  const position = "bottom";
  const align = "center";
  const { i18n } = useTranslation();
  if (isLoading)
    return (
      <SpinerContainer>
        <Spin />
      </SpinerContainer>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Container>
        <WelcomeText>{i18n.t("characters")}</WelcomeText>
        <List
          pagination={{ position, align }}
          dataSource={characters}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.house}
              />
            </List.Item>
          )}
        />
      </Container>
    </div>
  );
};
export default Characters;
