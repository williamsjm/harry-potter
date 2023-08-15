import React, { useState } from "react";
import useHarryPotterCharacters from "../../../hooks/useHarryPotterCharacters";
import { Avatar, List, Spin, Select, Modal } from "antd";
import { Container, SpinerContainer, WelcomeText } from "./Characters.styles";
import { useTranslation } from "react-i18next";

const Characters: React.FC = () => {
  const { characters, isLoading, error } = useHarryPotterCharacters();
  const position = "bottom";
  const align = "center";
  const { i18n } = useTranslation();
  const [houseFilter, setHouseFilter] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const filteredCharacters = characters.filter((character) =>
    houseFilter ? character.house === houseFilter : true
  );

  const showCharacterDetail = (character) => {
    setSelectedCharacter(character);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedCharacter(null);
  };

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
        <Select
          style={{ width: 200 }}
          onChange={(value) => setHouseFilter(value)}
          placeholder={i18n.t("house")}
          allowClear
        >
          <Select.Option value="Gryffindor">Gryffindor</Select.Option>
          <Select.Option value="Hufflepuff">Hufflepuff</Select.Option>
          <Select.Option value="Ravenclaw">Ravenclaw</Select.Option>
          <Select.Option value="Slytherin">Slytherin</Select.Option>
        </Select>

        <List
          pagination={{ position, align }}
          dataSource={filteredCharacters}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={
                  <a onClick={() => showCharacterDetail(item)}>{item.name}</a>
                }
                description={item.house}
              />
            </List.Item>
          )}
        />

        <Modal
          title={selectedCharacter?.name}
          visible={isModalVisible}
          onCancel={closeModal}
          footer={null}
        >
          {selectedCharacter && (
            <div>
              <Avatar size={64} src={selectedCharacter.image} />
              <h3>{selectedCharacter.name}</h3>
              <p>
                <strong>{i18n.t("character_house")}</strong>:
                {selectedCharacter.house}
              </p>
              <p>
                <strong>{i18n.t("actor")}</strong>:{selectedCharacter.actor}
              </p>
              <p>
                <strong>{i18n.t("species")}</strong>:{selectedCharacter.species}
              </p>
              <p>
                <strong>{i18n.t("dateOfBirth")}</strong>:
                {selectedCharacter.dateOfBirth}
              </p>
              <p>
                <strong>{i18n.t("wizard")}</strong>:
                {selectedCharacter.wizard ? "Yes" : "no "}
              </p>
              <p>
                <strong>{i18n.t("patronus")}</strong>:
                {selectedCharacter.patronus ? selectedCharacter.patronus : "??"}
              </p>
            </div>
          )}
        </Modal>
      </Container>
    </div>
  );
};
export default Characters;
