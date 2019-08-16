import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-details';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>user name list</h2>
        <UserList />
        <hr/>
        <h2>user details</h2>
        <UserDetail />
    </div>
)

export default App;