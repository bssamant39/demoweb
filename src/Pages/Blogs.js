import React from 'react'
import { NavLink } from 'react-router-dom'

const Blogs = () => {
  return (
    <section id="container" className="sub-page">
	<div className="wrap-container zerogrid">
		<div className="crumbs">
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/blog">Blog</NavLink></li>
			</ul>
		</div>
		<div id="main-content" className="col-2-3">
			<div className="wrap-content">
				<article>
					<div className="art-header">
						<a href="#"><h3>Nam libero tempore, cum soluta nobis est </h3></a>
						<div className="info">Posted on June 22, 2010 in: <a href="#">Event</a></div>
					</div>
					<div className="art-content">
						<img src="assist/images/6.jpg" />
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. labore et dolore magna aliquyam erat, sed diam voluptua.</p>
					</div>
					<a className="button button02" href="#">MORE</a>
				</article>
				<article>
					<div className="art-header">
						<a href="#"><h3>Nam libero tempore, cum soluta nobis est </h3></a>
						<div className="info">Posted on June 22, 2010 in: <a href="#">Event</a></div>
					</div>
					<div className="art-content">
						<img src="assist/images/4.jpg" />
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. labore et dolore magna aliquyam erat, sed diam voluptua.</p>
					</div>
					<a className="button button02" href="#">MORE</a>
				</article>
				<article>
					<div className="art-header">
						<a href="#"><h3>Nam libero tempore, cum soluta nobis est </h3></a>
						<div className="info">Posted on June 22, 2010 in: <a href="#">Event</a></div>
					</div>
					<div className="art-content">
						<img src="assist/images/5.jpg" />
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. labore et dolore magna aliquyam erat, sed diam voluptua.</p>
					</div>
					<a className="button button02" href="#">MORE</a>
				</article>
			</div>
		</div>
		<div id="sidebar" className="col-1-3">
			<div className="wrap-sidebar">
				{/* <!---- Start Widget ----> */}
				<div className="widget wid-about">
					<div className="wid-header">
						<h5>About Us</h5>
					</div>
					<div className="wid-content">
						<img src="assist/images/15.jpg"/>
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
					</div>
				</div>
				{/* <!---- Start Widget ----> */}
				<div className="widget wid-post">
					<div className="wid-header">
						<h5>Latest Posts</h5>
					</div>
					<div className="wid-content">
						<div className="post">
							<a href="#"><img src="assist/images/15.jpg"/></a>
							<div className="wrapper">
							  <h5><a href="#">Lorem ipsum dolor</a></h5>
							   <span>$25 - $26</span>
							</div>
						</div>
						<div className="post">
							<a href="#"><img src="assist/images/14.jpg"/></a>
							<div className="wrapper">
							  <h5><a href="#">Lorem ipsum dolor</a></h5>
							  <span>$25 - $26</span>
							</div>
						</div>
						<div className="post">
							<a href="#"><img src="assist/images/13.jpg"/></a>
							<div className="wrapper">
							  <h5><a href="#">Lorem ipsum dolor</a></h5>
							   <span>$25 - $26</span>
							</div>
						</div>
					</div>
				</div>
				{/* <!---- Start Widget ----> */}
				<div className="widget wid-tag">
					<div className="wid-header">
						<h5>Tags</h5>
					</div>
					<div className="wid-content">
						<a href="#">animals ,</a>
						<a href="#">cooking ,</a>
						<a href="#">countries ,</a>
						<a href="#">home ,</a>
						<a href="#">likes ,</a>
						<a href="#">photo ,</a>
						<a href="#">travel ,</a>
						<a href="#">video </a>
					</div>
				</div>
				{/* <!---- Start Widget ----> */}
				<div className="widget wid-gallery">
					<div className="wid-header">
						<h5>Gallery</h5>
					</div>
					<div className="wid-content">
						<a href="#"><img src="assist/images/11.jpg"/></a>
						<a href="#"><img src="assist/images/10.jpg"/></a>
						<a href="#"><img src="assist/images/9.jpg"/></a>
						<a href="#"><img src="assist/images/8.jpg"/></a>
						<a href="#"><img src="assist/images/7.jpg"/></a>
						<a href="#"><img src="assist/images/6.jpg"/></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default Blogs