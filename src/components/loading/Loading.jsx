import React from 'react';
import patoshido from '/assets/gif/shido.gif';
import './Loading.css';

const Loading = () => (
    <div className="loading">
        <img src={patoshido} alt="Loading..." />
    </div>
);

export default Loading;