import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const LeftNav = () => {
    return(
        <section>
            <ul>
                <li>{'知知Logo'}</li>
                <li>
                    <Link to="/one">{'One'}</Link>
                </li>
                <li>
                    <Link to="/one/onea">{'OneA'}</Link>
                </li>
                <li>
                    <Link to="/one/oneb">{'OneB'}</Link>
                </li>
                <li>
                    <Link to="/two">{'View2'}</Link>
                </li>
                <li>
                    <Link to="/three">{'View2'}</Link>
                </li>
            </ul>
        </section>
    )
};

export default LeftNav;