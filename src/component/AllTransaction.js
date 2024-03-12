import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from 'react-bootstrap/Nav';
import { SlArrowDown } from "react-icons/sl";
import { FaPoundSign } from 'react-icons/fa';

function AllTransaction() {
    const transactions = [
        { type: 'Income', amount: 1200, date: '26 Jan' },
        { type: 'Income', amount: 1500, date: '27 Jan' },
        { type: 'Expense', amount: 800, date: '28 Jan' },
        { type: 'Transfer', amount: 500, date: '29 Jan' },
        { type: 'Income', amount: 2000, date: '30 Jan' },
    ];
    
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <Nav className="d-flex justify-content-space">
                            <Nav eventKey="all" className="btn btn-secondary rounded ft-14 mb-2 align-items-center text-center">
                                All <SlArrowDown />
                            </Nav>
                            <Nav eventKey="income" className="btn btn-secondary rounded ft-14 mb-2 align-items-center">
                                Income <SlArrowDown />
                            </Nav>
                            <Nav eventKey="expense" className="btn btn-secondary rounded ft-14 mb-2 align-items-center">
                                Expense <SlArrowDown />
                            </Nav>
                            <Nav eventKey="transfer" className="btn btn-secondary rounded ft-14 mb-2 align-items-center">
                                Transfer <SlArrowDown />
                            </Nav>
                        </Nav>
                    </div>
                    <div className="col-md-12">
                        <div className="filter-list pt-3">
                            {transactions.map((transaction, index) => (
                                <div key={index} className="trans-row d-flex justify-content-space mb-3">
                                    <div className="trans-value">
                                        <h6 className="p-0 m-0">{transaction.type}</h6>
                                        <span>
                                            <FaPoundSign /> {transaction.amount}
                                        </span>
                                    </div>
                                    <div className="trans-date">
                                        {transaction.date}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    ); 
}

export default AllTransaction;