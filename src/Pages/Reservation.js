import React from 'react'

const Reservation = () => {
    return (
        <section id="container" className="sub-page">
            <div className="wrap-container zerogrid">
                <div className="crumbs">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="reservation.html">Reservation</a></li>
                    </ul>
                </div>
                <div id="main-content">
                    <div className="wrap-content">
                        <div className="row">
                            <div className="col-1-3">
                                <div className="wrap-col">
                                    <h3>Complete the Submission Form</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p><br />
                                    <h3>Or Just Make a Call</h3>
                                    <p>+6221 888 888 90 <br />
                                        +6221 888 88891</p>
                                    <p>info@yourdomain.com</p>
                                </div>
                            </div>
                            <div className="col-2-3">
                                <div className="wrap-col">
                                    <div className="contact">
                                        <div id="contact_form">
                                            <form name="contact" id="contact" method="post" action="reservation.php">
                                                <label className="row">
                                                    <div className="col-1-2">
                                                        <div className="wrap-col">
                                                            <input type="text" name="name" id="name" placeholder="Enter name" required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="col-1-2">
                                                        <div className="wrap-col">
                                                            <input type="email" name="email" id="email" placeholder="Enter email" required="required" />
                                                        </div>
                                                    </div>
                                                </label>
                                                <label className="row">
                                                    <div className="col-2-4">
                                                        <div className="wrap-col">
                                                            <input type="text" name="subject" id="subject" placeholder="Subject" required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="col-1-4">
                                                        <div className="wrap-col">
                                                            <input type="date" name="date" id="date" placeholder="Date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-1-4">
                                                        <div className="wrap-col">
                                                            <input type="time" name="time" id="time" placeholder="Time" />
                                                        </div>
                                                    </div>
                                                </label>
                                                <label className="row">
                                                    <div className="wrap-col">
                                                        <textarea name="message" id="message" className="form-control" rows="4" cols="25" required="required"
                                                            placeholder="Message"></textarea>
                                                    </div>
                                                </label>
                                                <center><input className="sendButton" type="submit" name="Submit" value="Submit" /></center>
                                            </form>
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

export default Reservation