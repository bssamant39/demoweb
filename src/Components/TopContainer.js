import React from 'react'

const TopContainer = () => {
    return (
        <div className="zerogrid">
            <div className="callbacks_container">
                <ul className="rslides" id="slider4">
                    <li>
                        <img src="assist/images/banner1.jpg" alt="" />
                        <div className="caption">
                            <h2>We've got the best spareribs in town.</h2><br />
                            <p>Nulla eget mauris quis elit mollis ornare vitae ut odio. Cras tincidunt, augue vitae sollicitudin commodo,quam elit varius est, et ornare ante massa quis tellus. Mauris nec lacinia nisl. </p>
                        </div>
                    </li>
                    <li>
                        <img src="assist/images/banner2.jpg" alt="" />
                        <div className="caption">
                            <h2>If food is an experience, then you'll find it at the restaurant.</h2><br />
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </li>
                    <li>
                        <img src="assist/images/banner3.jpg" alt="" />
                        <div className="caption">
                            <h2>Enjoy our take-away menu.</h2><br />
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopContainer