import React, {useState} from 'react';
import {Menu} from 'antd';
import Template from '../../componenets/Layout/Layout'

const {SubMenu, Item} = Menu;

const Outline = () => {

    return (
        <Template text={<div>
            <h1><a id="user-content-the-bank-job" className="anchor" aria-hidden="true" href="#the-bank-job">
                <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                     aria-hidden="true">
                </svg>
            </a>the-bank-job
            </h1>
            <p>Before we even start, Git is essential in this project. It must be used throughout with branches,
                issues etc. Figma is essential for design, it must be used before coding.</p>
            <p>You have been hired by the owner of a international bank. They have many services that they offer to
                the public:</p>
            <ul>
                <li>Current Accounts</li>
                <li>Savings Accounts <strong>(No overdraft facility)</strong></li>
                <li>Joint Accounts <strong>with an already existing customer</strong></li>
                <li>Junior Accounts <strong>(No overdraft facility)</strong></li>
                <li>Mortgages <strong>(Minimum 10-year contract)</strong></li>
                <li>Interest-Loans <strong>(Low interest)</strong></li>
                <li>Payday-Loans <strong>(scandalously high interest)</strong></li>
            </ul>

            <h2><a id="user-content-things-to-think-about" className="anchor" aria-hidden="true"
                   href="#things-to-think-about">
                <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                     aria-hidden="true">
                </svg>
            </a>Things to think about
            </h2>
            <ol>
                <li>A customer may want to select one or multiple options when signing up. They will be assigned
                    a customer number and an <strong>account number</strong> with a <strong>sort
                        code</strong> for each account that they take out
                </li>
                <li>They need to be able to withdraw, deposit, check their balance, change their pin number for
                    the accounts that they have access to
                </li>
                <li>An overdraft will add interest for each day that it is active. You can choose the interest
                    rates
                </li>
                <li>A junior account can be taken out in a child's name but will be associated with an adult
                    current / savings account. It cannot be opened on its own.
                </li>
                <li>An interest-loan / payday-loan can only be taken out if they have a current or savings
                    account.
                </li>
                <li>Hashing passwords</li>
                <li>Sessions (security restrictions)</li>
                <li>Error handling</li>
                <li>User interface / Experience</li>
                <li>Testing</li>
                <li>Documentation (User guide / walkthrough &amp;&amp; readme)</li>
                <li>Deployment via Heroku</li>
            </ol>

            <h2><a id="user-content-the-customer" className="anchor" aria-hidden="true"
                   href="#the-customer">
                <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16"
                     height="16" aria-hidden="true">
                </svg>
            </a>The customer
            </h2>
            <ul>
                <li>
                    <p>The customer should be able to signup for one / multiple accounts with the bank, if
                        they so wish. The process of signing them up will take the usual details down, all
                        fabricated, of course. Upon registration, the customer will be assigned a customer
                        number and will be asked to save a password related to the customer number with a
                        security question.</p>
                </li>
                <li>
                    <p>The customer can forget their password and use the <strong>password
                        reset</strong> feature which will ask them for their customer number and 2 of the
                        following:</p>
                    <ul>
                        <li>DOB</li>
                        <li>first line of address and postcode</li>
                        <li>security question</li>
                    </ul>
                </li>
                <li>
                    <p>The customer, upon signing in, will be presented with their accounts in a bitesize
                        display. If they wish to see activity on a particular account, they can access that
                        by clicking on the account they'd like to see.</p>
                </li>
            </ul>
            <h2><a id="user-content-the-admin-portal" className="anchor" aria-hidden="true"
                   href="#the-admin-portal">
                <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16"
                     height="16" aria-hidden="true">
                </svg>
            </a>The Admin portal
            </h2>
            <ul>
                <li>Approve / Deny / Send back account status</li>
                <li>Approval of overdraft</li>
                <li>View accounts and details</li>
                <li>Mortgage approval / deny etc.</li>
                <li>Delete / Modify accounts</li>
                <li>Lock accounts (suspicious activity etc.)</li>
                <li>Report on new customers, finances, etc.</li>
            </ul>
            <h2><a id="user-content-technologies-needed" className="anchor" aria-hidden="true"
                   href="#technologies-needed">
                <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16"
                     height="16" aria-hidden="true">
                </svg>
            </a>Technologies needed:
            </h2>
            <ul>
                <li>Vanilla JS</li>
                <li>React</li>
                <li>Node w/ Express</li>
                <li>SQL</li>
            </ul>
            <h2><a id="user-content-readme--instructions" className="anchor" aria-hidden="true"
                   href="#readme--instructions">
                <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16"
                     height="16" aria-hidden="true">
                </svg>
            </a>Readme &amp;&amp; instructions
            </h2>
            <ul>
                <li>Description</li>
                <li>Goals and aims</li>
                <li>Contributors</li>
                <li>Technology used</li>
            </ul>


        </div>}/>
    );
};

export default Outline;