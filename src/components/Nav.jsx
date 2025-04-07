import React from 'react'
import {ForkKnifeCrossedIcon, SproutIcon} from 'lucide-react'

function Nav() {
  return (
    <nav class="navbar py-4 navbar-expand-lg sticky-top primary-bg">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold grotesk d-flex align-items-center" style={{marginRight:"auto"}}href="#hero">
                <SproutIcon style={{height:'35px', width:'35px'}} className='me-2 fw-bold'/>
                Nasi Goreng Wira
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse w-fit me-auto" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <a class="nav-link active" aria-current="page" href="#hero">Home</a>
                    <a class="nav-link" href="#menu">Menu</a>
                    <a class="nav-link" href="#about">About</a>
                    <a class="nav-link" href="#footer">Location</a>
                </div>
            </div>
        </div>
        </nav>
  )
}

export default Nav