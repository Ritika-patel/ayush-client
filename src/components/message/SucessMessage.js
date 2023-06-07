import React, {useContext} from 'react'
import AuthContext from '../../context/authdemo/authContext';

  const SuccessMessage = () => {
    const context = useContext(AuthContext);
const {submitted} = context;
    return (
        <div
            className="success"
            style={{
                display: submitted ? '' : 'none',
            }}>
            <h1>User {name} successfully registered!!</h1>
        </div>
    );
};

export default SuccessMessage