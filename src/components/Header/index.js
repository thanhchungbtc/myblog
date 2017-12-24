import React, {Component} from 'react';
import {Link} from 'react-router'
import IconGitHub from 'react-icons/lib/fa/github'
import IconTweeter from 'react-icons/lib/fa/twitter'

class Header extends Component
{
    render() {
        return (
            <header className="site-header">
                <div className="branding">

                    <Link to={"/"}>
                        <img className="avatar" src="/images/avatar.jpg" alt=""/>
                    </Link>

                    <h1 className="site-title">
                        <Link to={"/"}>Thanh Chung Bui</Link>
                    </h1>
                </div>
                <nav className="site-nav">
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <a href="https://github.com/thanhchungbtc" title="Follow on GitHub">
                                <IconGitHub />
                            </a>
                        </li>

                        <li>
                            <a href="https://twitter.com/BiThnhChung" title="Follow on Twitter">
                                <IconTweeter/>
                            </a>
                        </li>

                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header