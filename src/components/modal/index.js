import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/users';

import { toast } from 'react-toastify';

import {
  Container,
  FormContainer,
  Title,
  Input,
  ButtonsContainer,
  CancelButton,
  SaveButton,
  ErrorMessage
} from './styles';

class Modal extends Component {

  state = {
    username: ''
  }

  render() {
    const { loading, errorOnAdd, addUserRequest } = this.props;
    return (
      <Container>
        <FormContainer>
          <Title>Adicionar novo usuário</Title>
          <Input
            type="text"
            placeholder="Usuário no Github"
            onChange={e => this.setState({ username: e.target.value })}
            value={this.state.username}
          />

          {/* {errorOnAdd && <ErrorMessage>{errorOnAdd}</ErrorMessage>} */}
          {/* {errorOnAdd ? toast(errorOnAdd) : null} */}

          <ButtonsContainer>
            <CancelButton>Cancelar</CancelButton>
            <SaveButton onClick={e => addUserRequest(this.state.username)}>
            {
              loading
              ? <i className="fa fa-spinner fa-pulse" />
              : 'Salvar'
            }
            </SaveButton>
          </ButtonsContainer>
        </FormContainer>
      </Container>
    )
  }
}


const mapStateToProps = state => ({
  users: state.users.data,
  errorOnAdd: state.users.errorOnAdd,
  loading: state.users.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

