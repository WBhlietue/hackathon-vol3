import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Login from '../../../pages/Login';

export default createBoard({
    name: 'Login',
    Board: () => <Login key={''} />,
    environmentProps: {
        windowWidth: 610
    }
});
