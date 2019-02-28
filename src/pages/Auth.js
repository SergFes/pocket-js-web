import React from 'react';

import AuthForm from '../components/authform/Form';
import Modal from '../components/UI/Modal/Modal';
import Backdrop from '../components/UI/Backdrop/Backdrop';

const auth = () => (
  <>
    <Backdrop show classesNames='BackgroundImage' />
    <Modal show classesNames='Center Opacity'>
        <AuthForm />
    </Modal>
  </>
);

export default auth;
