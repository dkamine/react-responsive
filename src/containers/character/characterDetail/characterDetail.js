import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { push } from 'react-router-redux';

import { getCharacterDetail } from 'modules/character/actions';

import { Row, Col } from 'components/grid';
import { Content } from 'components/content';

const Img = styled.img`
  width: 100%;
`;

const NameContainer = styled.div`
  padding: 20px;
  border:1px solid #e4e4e4;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 27px;
`;

const Title = styled.div`
  font-weight: 700;
  padding: 10px 0;
`;

class CharacterDetail extends Component {

  componentDidMount(){
    const { character, match } = this.props;
    const { id } = match.params;
    character(id || 0);
  }

  render() {
    const { loading, data } = this.props;
    const { name, description, thumbnail, comics, series } = data;
    const img = thumbnail && `${thumbnail.path}.${thumbnail.extension}`;

    if(loading) return (<div>loading.............</div>);
    return (
      <Content>
        <Row>
          <Col lg="3" md="4" sm="6">
            <Img src={img} />
          </Col>
          <Col lg="9" md="8" sm="6">
            <NameContainer>
              <Name>
                {name}
              </Name>
              {description}
            </NameContainer>
            <Title>
              Comics
            </Title>
            {comics && comics.items.map((comic, key) => 
              <div key={key}>
                {comic.name}
              </div>
            )}
            <Title>
              Series
            </Title>
            {series && series.items.map((comic, key) => 
              <div key={key}>
                {comic.name}
              </div>
            )}
          </Col>
        </Row>
      </Content>
    );
  }
}

CharacterDetail.propTypes = {
  character: PropTypes.func,
  match: PropTypes.object,
  data: PropTypes.object,
  loading: PropTypes.bool,
  navigateTo: PropTypes.func,
};

function mapStateToProps(state) {

  const { loading, character } = state.character;

  return {
    loading,
    data: character
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigateTo: (distination) => push(`/${distination}`),
  character: (id) => getCharacterDetail(id),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
