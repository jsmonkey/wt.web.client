const SIGN_TYPES = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
};

const SIGN_TABS = [
  {
    type: SIGN_TYPES.SIGN_IN,
    title: 'Sign In',
    path: '/signin',
  },
  {
    type: SIGN_TYPES.SIGN_UP,
    title: 'Sign Up',
    path: '/signup',
  },
];

export default {
  SIGN_TYPES,
  SIGN_TABS,
};
