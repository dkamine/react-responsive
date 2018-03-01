import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CharacterContianer = styled.div`
  margin-bottom: 32px;
    height: 210px;
  width: 230px;
  margin-left: auto;
  margin-right: auto;
  border:1px solid #e4e4e4;
  cursor: pointer;
`;

const Name = styled.div`
  font-weight: 700;
  padding-left: 20px;
  padding-top: 10px;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 170px;
  overflow: hidden;
  background-color: #e4e4e4;
  text-align: center;
`;

const Img = styled.img`
  width: 170px;
  height: 170px;
`;

const Character = ({data, click}) => {
  const { name, id, thumbnail} = data;
  const img = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <CharacterContianer onClick={() => click(id)}>
      <ImgContainer>
        <Img src={img} />
      </ImgContainer>
      <Name>
        {name}
      </Name>
    </CharacterContianer>
  );
};

Character.propTypes = {
  data: PropTypes.object,
  click: PropTypes.func,
};

export default Character;