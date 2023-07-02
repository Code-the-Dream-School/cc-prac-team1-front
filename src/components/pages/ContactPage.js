import React from "react";
import { Col, Row } from "reactstrap";
import "./css/ContactPage.css"
import "bootstrap-icons/font/bootstrap-icons.css"; 

function ContactPage() {
    return (
        <>
        <Row className = "contact">
            <h1>Contact Pet Watch</h1>
            <p>We're Here to Help</p>
        </Row>

        <Row className = "general">
        <h2 className = "general-title">General Inquiries</h2>
            <p>If you have any general questions, feedback, or suggestions about Pet Watch, 
                we would love to hear from you. Our dedicated team is here to assist you and 
                provide any information you may need. Please feel free to reach out to us using 
                the contact details below:</p>
           <p>  
            <b>Email: </b> <a href = "mailto: info@petwatchapp.com">info@petwatchapp.com</a> 
           <br/>
            <b>Phone: </b> +1 (123) 456-7890</p>
        </Row>
        
        <Row className="column-section">
            <Col className="support">
            <h2 className = "support-title">Support and Assistance</h2>
            <p>For specific inquiries regarding lost pets, technical support, or any urgent 
                matters, our support team is ready to lend a hand. We understand the importance 
                of prompt assistance during these challenging times, and we're committed to helping 
                you find the support you need. You can contact our support team using the 
                following methods:
                <br/>
                <br/> </p>
            
            <b>Email:</b> <a href = "mailto: support@petwatchapp.com">support@petwatchapp.com</a> 
           <br/>
            <b>Phone: </b> +1 (123) 456-7890
            </Col>

            <Col className="partner">
            <h2 className="partner-title">Partnerships and Collaborations</h2>
            <p>If you're interested in partnering with Pet Watch or exploring collaboration 
                opportunities, we'd be delighted to discuss how we can work together. Whether 
                you're an animal shelter, a pet-related organization, or a passionate individual, 
                let's join forces to make a greater impact. Get in touch with our partnership 
                team using the contact information below:
           <br/>
           <br/> </p>
            <b>Email: </b> <a href = "mailto: partnerships@petwatchapp.com">partnerships@petwatchapp.com</a> 
           <br/>
            <b>Phone: </b> +1 (123) 456-7890
            </Col>
    
        </Row>
        
        <Row className="connect">
        <h2 className="connect-title">Connect with Us</h2>
            <p>Stay updated on the latest news, success stories, and community activities by 
                connecting with Pet Watch on social media. Follow us on Facebook, Instagram, 
                and Twitter to join the conversation, share your experiences, and spread the 
                word about missing pets. Let's work together to create a strong and 
                compassionate community.</p>

            <div>
                <i class="bi bi-facebook"></i> 
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
            </div>
                
        </Row>

        <footer>
       <Row className="footer">
          
       </Row>
        </footer>
        </>
        );
}

export default ContactPage;