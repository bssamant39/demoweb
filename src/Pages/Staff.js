import React from 'react'
import { NavLink } from 'react-router-dom'

const Staff = () => {
  return (
    <section id="container" className="sub-page">
	<div className="wrap-container zerogrid">
		<div className="crumbs">
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/staff">Our Staff</NavLink></li>
			</ul>
		</div>
		<div id="main-content">
			<div className="wrap-content">
				<div className="chef">
					<div className="row">
						<div className="col-1-4">
							<div className="wrap-col">
								<div className="zoom-container">
									<a href="#">
										<img src="assist/images/chef-1.jpg" />
									</a>
								</div>
								<h3>Chef's Name</h3>
								<ul className="social t-center">
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-1-4">
							<div className="wrap-col">
								<div className="zoom-container">
									<a href="#">
										<img src="assist/images/chef-2.jpg" />
									</a>
								</div>
								<h3>Chef's Name</h3>
								<ul className="social t-center">
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-1-4">
							<div className="wrap-col">
								<div className="zoom-container">
									<a href="#">
										<img src="assist/images/chef-3.jpg" />
									</a>
								</div>
								<h3>Chef's Name</h3>
								<ul className="social t-center">
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-1-4">
							<div className="wrap-col">
								<div className="zoom-container">
									<a href="#">
										<img src="assist/images/chef-4.jpg" />
									</a>
								</div>
								<h3>Chef's Name</h3>
								<ul className="social t-center">
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-instagram"></i></a></li>
								</ul>
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

export default Staff