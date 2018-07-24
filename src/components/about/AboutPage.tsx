"use strict";
import * as React from 'react';

export const AboutPage: React.StatelessComponent<{}> =()=> {
    return (
        <div>
        <h1>About</h1>
        <p>
            This application uses the following technologies:
            <ul>
                <li>React</li>
                <li>React Router</li>
                <li>Flux</li>
                <li>Node</li>
                <li>Gulp</li>
                <li>Browserify</li>
                <li>Bootstrap</li>
            </ul>
        </p>
    </div>
    );
};

export default AboutPage;