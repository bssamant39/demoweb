import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <section id="container" className="sub-page">
	<div className="wrap-container zerogrid">
		<div className="crumbs">
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/menu">Menu</NavLink></li>
			</ul>
		</div>
		<div id="main-content">
			<div className="wrap-content">
				<div className="row">
					<div className="col-1-3">
						<div className="wrap-col">
							<h3>Pasta Plates</h3>
							<div className="post">
								<a href="#"><img src="assist/images/15.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								  <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/10.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								   <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/9.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								  <span>$25 - $26</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-1-3">
						<div className="wrap-col">
							<h3>Starters</h3>
							<div className="post">
								<a href="#"><img src="assist/images/14.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								   <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/8.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								  <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/7.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								  <span>$25 - $26</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-1-3">
						<div className="wrap-col">
							<h3>Salads</h3>
							<div className="post">
								<a href="#"><img src="assist/images/13.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								  <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/4.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								  <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/5.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								  <span>$25 - $26</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-1-3">
						<div className="wrap-col">
							<h3>Chef's Specials</h3>
							<div className="post">
								<a href="#"><img src="assist/images/15.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								   <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/10.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								  <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/9.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								   <span>$25 - $26</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-1-3">
						<div className="wrap-col">
							<h3>Fast Food</h3>
							<div className="post">
								<a href="#"><img src="assist/images/14.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								  <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/8.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								   <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/7.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								   <span>$25 - $26</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-1-3">
						<div className="wrap-col">
							<h3>Seafood Specials</h3>
							<div className="post">
								<a href="#"><img src="assist/images/13.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								   <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/4.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								   <span>$25 - $26</span>
								</div>
							</div>
							<div className="post">
								<a href="#"><img src="assist/images/5.jpg"/></a>
								<div className="wrapper">
								  <h5><a href="#">Lorem ipsum dolor</a></h5>
								   <span>$25 - $26</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> 
	</div>
</section>
  )
}

export default Menu