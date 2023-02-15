import React from 'react'
import { Container } from 'react-bootstrap'
import { FaInstagram, FaTiktok } from 'react-icons/fa'

function Footer() {
  return (
    <div style={{
        position: 'absolute',
        width: '100%', 
    }} className='bg-dark'>
        <Container>
            <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
                <div className='col-md-4 d-flex align-items-center'>
                    <span className='mb-3 mb-md-0 text-muted'>&copy; 2022 - 2023 PuffPastryCrack</span>
                </div>
                <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                    <li className='ms-3'>
                        <a 
                            href='https://www.instagram.com/puffpastrycrack/' 
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            <FaInstagram></FaInstagram>
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a 
                            href='https://www.tiktok.com/@puffpastrycrack?lang=en' 
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            <FaTiktok></FaTiktok>
                        </a>
                    </li>
                </ul>
            </footer>
        </Container>
    </div>
  )
}

export default Footer