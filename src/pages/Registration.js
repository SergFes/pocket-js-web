import React from 'react';

import RegForm from '../containers/Register/RegForm';
import Modal from '../components/UI/Modal/Modal';
import Backdrop from '../components/UI/Backdrop/Backdrop';

const register = () => (
  <>
    <Backdrop show classesNames='BackgroundImage' />
    <Modal show classesNames='Center Opacity'>
        <RegForm />
    </Modal>
  </>
);

export default register;
