import React from 'react';


function Contact() {
  return (
    <div>
      
      <section className="contact-section" id="Contact">
    <div className="container">
        <div className="row gy-4">
            <h1>contact us</h1>
            <div className="col-lg-6">
                <div className="row gy-4">
                    <div className="col-md-6">
                        <div className="info-box">
                            <i className="bi bi-geo-alt"></i>
                            <h3>Address</h3>
                            <p>A108 Adam Street,<br/>New Delhi, 535022</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-box">
                            <i className="bi bi-telephone"></i>
                            <h3>Call Us</h3>
                            <p>+91 9876545672<br/>+91 8763456243</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-box">
                            <i className="bi bi-envelope"></i>
                            <h3>Email Us</h3>
                            <p>bragspot@gmail.com<br/>brag@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-box">
                            <i className="bi bi-clock"></i>
                            <h3>Open Hours</h3>
                            <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 form">
                <form action="contact.php" method="post" class="php-email-form">
                    <div class="row gy-4">
                        <div class="col-md-6">
                            <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="form-control" name="email" placeholder="Your Email" required />
                        </div>
                        <div class="col-md-12">
                            <input type="text" class="form-control" name="subject" placeholder="Subject" required />
                        </div>
                        <div class="col-md-12">
                            <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div class="col-md-12 text-center">
                            <button type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

    </div>
);
}
export default Contact;