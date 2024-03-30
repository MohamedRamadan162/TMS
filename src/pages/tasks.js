import Head from 'next/head'
import Image from 'next/image'
import Task from '../components/Task'; 
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`/api/tasks`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error listing tasks:', error));
  },[]);

  return (
    <>
      <Head>
        <title>Freelancer Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        {/* Wrapper Start */}
        <Layout></Layout>
        <div className="wrapper">
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
              </nav>
            </div>
          </div>
          <div className="content-page">
            <div className="container-fluid">
              <div id="grid" className="item-content animate__animated animate__fadeIn active" data-toggle-extra="tab-content">
              <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                <div className="row">
                  {tasks.map(task => (
                    <Task key = {task.id} name = {task.task_name} description = {task.task_description} date = {task.task_completion_date} id = {task.id}></Task>
                  ))}
                </div>
              </div>
              </div></div></div></div>
              {/* Page end  */}
            </div>
          </div>
        </div>
        {/* Wrapper End*/}
      </div>

    </>
  )
}