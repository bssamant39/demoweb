import React from 'react'
import { NavLink } from 'react-router-dom'

const News = () => {
  return (
    <section id="container" className="sub-page">
	<div className="wrap-container zerogrid">
		<div className="crumbs">
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/gallery">Gallery</NavLink></li>
			</ul>
		</div>
		<div id="main-content" className="col-2-3">
			<div className="wrap-content">
				<article>
					<div className="art-header">
						<div className="entry-title"> 
							<h2>Sharing Your Explorer’s Story: Man and Mother Nature</h2>
						</div>
						<div className="info">By <a href="#">Danny</a> on April 14, 2015</div>
					</div>
					<div className="art-content">
						<img src="assist/images/14.jpg" />
						<div className="excerpt"><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum exercitation ullamco laboris nisi ut aliquip.</p></div>
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
						<blockquote><p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet vultatup duista.</p></blockquote>
						<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril.</p>
						<h2>Heading 1</h2>
						<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse lorem ipsum dolor sit amet.</p>
						<h2>Heading 2</h2>
						<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo.</p>
						<h2>Heading 3</h2>
						<p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum hendrerit in vulputate velit esse molestie.</p>
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
						<p><code>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</code></p>
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
						<div className="note">
						  <ol>
							<li>Lorem ipsum</li>
							<li>Sit amet vultatup nonumy</li>
							<li>Duista sed diam</li>
						  </ol>
						  <div className="clear"></div>
						</div>
						<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
						<p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>
					</div>
				</article>
				<div className="widget wid-related">
					<div className="wrap-col">
						<div className="wid-header">
							<h5>Related Post</h5>
						</div>
						<div className="wid-content">
							<div className="row">
								<div className="col-1-3">
									<div className="wrap-col">
										<a href="#"><img src="assist/images/10.jpg" /></a>
										<h4><a href="#">Vero eros et accumsan et iusto odio </a></h4>
									</div>
								</div>
								<div className="col-1-3">
									<div className="wrap-col">
										<a href="#"><img src="assist/images/7.jpg" /></a>
										<h4><a href="#">Vero eros et accumsan et iusto odio </a></h4>
									</div>
								</div>
								<div className="col-1-3">
									<div className="wrap-col">
										<a href="#"><img src="assist/images/8.jpg" /></a>
										<h4><a href="#">Vero eros et accumsan et iusto odio </a></h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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

export default News