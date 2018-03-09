import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import { getCharacters } from 'modules/character/actions';

import { Row, Col } from 'components/grid';
import { Content } from 'components/content';

import { Character } from './components';

class Characters extends Component {

  componentDidMount(){
    const { characters } = this.props;
    characters();
  }

  render() {
    const { loading, data, navigateTo } = this.props;

    if(loading) return (<div>loading.............</div>);
    return (
      <Content>
        <Row>
          {data.map((data, key) => 
            <Col key={key} lg="3" md="4" sm="6">
              <Character
                data={data}
                click={(id) => navigateTo(`character/${id}`)}
              />
            </Col>
          )}
        </Row>
      </Content>
    );
  }
}

Characters.propTypes = {
  navigateTo: PropTypes.func,
  characters: PropTypes.func,
  data: PropTypes.array,
  loading: PropTypes.bool,
};

function mapStateToProps(state) {

  const { loading, characters } = state.character;

  return {
    loading,
    data: characters
  };
}

const route = window.location.host === "dkamine.github.io" ? "/react-responsive" : "";

const mapDispatchToProps = dispatch => bindActionCreators({
  navigateTo: (distination) => push(`${route}/${distination}`),
  characters: () => getCharacters(),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
