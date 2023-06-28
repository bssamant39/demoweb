import React from 'react'
import { NavLink } from 'react-router-dom'

const Gallery = () => {
	return (
		<section id="container" className="sub-page">
			<div className="wrap-container zerogrid">
				<div className="crumbs">
					<ul>
						<li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="/gallery">Gallery</NavLink></li>
					</ul>
				</div>
				<div id="main-content">
					<div className="wrap-content">
						<div className="row">
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/4.jpg" />
									</a>
								</div>
							</div>
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/5.jpg" />
									</a>
								</div>
							</div>
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/6.jpg" />
									</a>
								</div>
							</div>
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/7.jpg" />
									</a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/8.jpg" />
									</a>
								</div>
							</div>
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/9.jpg" />
									</a>
								</div>
							</div>
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/10.jpg" />
									</a>
								</div>
							</div>
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/11.jpg" />
									</a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/12.jpg" />
									</a>
								</div>
							</div>
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/13.jpg" />
									</a>
								</div>
							</div>
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/14.jpg" />
									</a>
								</div>
							</div>
							<div className="col-1-4">
								<div className="zoom-container">
									<a href="#">
										<span className="zoom-caption">
											<span>Lorem ipsum</span>
										</span>
										<img src="assist/images/15.jpg" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Gallery