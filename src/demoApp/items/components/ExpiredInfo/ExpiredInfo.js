import React from 'react';
import './ExpiredInfo.css';

const ExpiredInfo = (props) => (
    <div className="expired-info-container" onClick={props.onExpiredInfoClick}>
        Your session is not valid. Please click on me to log in
    </div>
);

export default ExpiredInfo;