import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import SideBar from '../components/sidebar';
import Modal from '../components/modal';

import Main from '../pages/main';

const Routes = ({modalOpen}) => {
  console.log('modalOpen ', modalOpen)
  return(
  <BrowserRouter>
    <Fragment>
      {modalOpen && <Modal />}
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>

      <SideBar />
    </Fragment>
  </BrowserRouter>
)}

const mapStateToProps = state => ({
  modalOpen: state.users.modalOpen
});

export default connect(mapStateToProps)(Routes);
