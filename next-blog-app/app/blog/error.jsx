'use client';
import React from 'react';

function ErrorWrapper(props) {
    return (
        <h1>Oops!!! {props.error}</h1>
    );
}

export default ErrorWrapper;