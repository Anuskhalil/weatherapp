import React from 'react'
import { BsToggleOff } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function AppNav(props) {
    return (

        <div className='weatherHeading'>
            {/* Navbar */}
            <Navbar>
                <Container>
                    <h3 className='head'>{props.projectName} </h3>
                    <div className='icons me-5 '>
                        {/* <BsToggleOff id='toggle' /> */}
                        <a href="www.gitHub.com"><AiFillGithub /></a>
                    </div>

                </Container>
            </Navbar>
        </div>

    )
}

export default AppNav
