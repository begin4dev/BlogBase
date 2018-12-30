import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Header } from 'components';
import { IStoreState } from '../store/reducers';
import { IAuthState, AuthActions } from 'store/reducers/auth';

interface IProps {
  authState: IAuthState;
  dispatchToggleAuthForm(active: boolean): void;
}

class HeaderContainer extends React.Component<IProps> {
  toggleAuthForm = (name: string, active: boolean): void => {
    const { dispatchToggleAuthForm } = this.props;
    dispatchToggleAuthForm(active);
  };

  render() {
    const { toggleAuthForm } = this;
    return <Header toggleAuthForm={toggleAuthForm} />;
  }
}

const mapStateToProps = (state: IStoreState) => ({
  authState: state.auth,
});
const mapDispatchToProps = (dispatch: Dispatch<AuthActions>) => {
  return {
    dispatchToggleAuthForm(active: boolean) {
      return dispatch({ type: 'TOGGLE_AUTH_FORM', active });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
