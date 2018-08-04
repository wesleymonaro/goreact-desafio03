import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Creators as UserActions } from '../../store/ducks/users';
import { bindActionCreators } from 'redux';
import {
  Container,
  Separator,
  ListContainer,
  UserItem,
  UserInfo,
  DeleteButton,
  ButtonsUserContainer,
  InfoUsers
} from './styles';

const SideBar = ({users, removeUserRequest}) => (
  <Container>
    <ListContainer>
      {!users.length && <InfoUsers>Nenhum usuário cadastrado. Toque em algum local do mapa para adicionar.</InfoUsers>}
      {
        users.map(user => (
          <Fragment key={String(Math.random())}>
            <UserItem>
              <img src={user.avatar} alt={user.login} />
              <UserInfo>
                <strong>{user.name}</strong>
                <small>{user.login}</small>
              </UserInfo>
              <ButtonsUserContainer>
                <DeleteButton onClick={() => removeUserRequest(user.login)}>
                  <i className="fa fa fa-times-circle"></i>
                </DeleteButton>

                <i className="fa fa-angle-right"></i>
              </ButtonsUserContainer>
            </UserItem>
            <Separator />
          </Fragment>
        ))
      }
    </ListContainer>
  </Container>
);


const mapStateToProps = state => ({
  users: state.users.data
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

