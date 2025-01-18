import React from 'react'

const Header = () => {
  return (
    <>
      <header class="header">

        <div class="logo">MyLogo</div>


        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a class="nav-link" href="#FirstPage">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#CoffeePage">COFFEE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#BakeryPage">BAKERY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/testimonial">TESTIMONIAL</a>
            </li>
          </ul>
        </nav>
        <div class="search">
          <input
            type="text"
            class="search-input"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
      </header>




    </>
  )
}

export default Header
