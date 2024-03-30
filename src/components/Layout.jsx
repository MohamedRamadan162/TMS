import React from 'react';

const Layout = () => {
    return (
        <div className='wrapper'>
            <div className="iq-sidebar  sidebar-default ">
                <div className="iq-sidebar-logo d-flex align-items-center">
                    <a href="../backend/index.html" className="header-logo">
                        <img src="../assets/images/logo.svg" alt="logo" />
                        <h3 className="logo-title light-logo">Webkit</h3>
                    </a>
                    <div className="iq-menu-bt-sidebar ml-0">
                        <i className="las la-bars wrapper-menu" />
                    </div>
                </div>
                <div className="data-scrollbar" data-scroll={1}>
                    <nav className="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" className="iq-menu">
                            <li>
                                <a href="../tasks" className="svg-icon">
                                    <svg className="svg-icon" width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                        <rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
                                    </svg>
                                    <span className="ml-4">Tasks</span>
                                </a>
                            </li>
                            <li>
                                <a href="../users" className="svg-icon">
                                    <svg className="svg-icon" width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} />
                                    </svg>
                                    <span className="ml-4">Users</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="pt-5 pb-2" />
                </div>
            </div>
            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                            <i className="ri-menu-line wrapper-menu" />
                            <a href="../backend/index.html" className="header-logo">
                                <h4 className="logo-title text-uppercase">Webkit</h4>
                            </a>
                        </div>
                        <div className="navbar-breadcrumb">
                            <h5>Dashboard</h5>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto navbar-list align-items-center">
                                    <li className="nav-item nav-icon dropdown caption-content">
                                        <a href="#" className="search-toggle dropdown-toggle  d-flex align-items-center" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="../assets/images/user/1.jpg" className="img-fluid rounded-circle" alt="user" />
                                            <div className="caption ml-3">
                                                <h6 className="mb-0 line-height">Mohamed Ramadan<i className="las la-angle-down ml-2" /></h6>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}


export default Layout;