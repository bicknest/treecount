import Immutable from 'seamless-immutable';

const initialState = Immutable.from({
  username: '',
  email: '',
  profile: null,
});

function myUserReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default {myUser: myUserReducer};
