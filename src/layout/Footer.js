// import React from "react";
// import { Col, Container, Nav, Row } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faPinterestP,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
// import PropTypes from "prop-types";
// import "./Footer.css"; // Import the external CSS

// const navigations = [
//   { value: "Home", href: "/" },
//   { value: "About", href: "#!" },
//   { value: "Contact", href: "#!" },
// ];

// const socialIcons = [
//   { icon: faFacebookF, href: "#!" },
//   { icon: faTwitter, href: "#!" },
//   { icon: faPinterestP, href: "#!" },
//   { icon: faLinkedinIn, href: "#!" },
// ];

// const NavigationItem = ({ item }) => (
//   <Nav.Item>
//     <Nav.Link href={item.href}>{item.value}</Nav.Link>
//   </Nav.Item>
// );

// NavigationItem.propTypes = {
//   item: PropTypes.object.isRequired,
// };

// const SocialItem = ({ social }) => (
//   <li>
//     <a
//       href={social.href}
//       className="border d-flex justify-content-center align-items-center rounded-circle"
//     >
//       <FontAwesomeIcon icon={social.icon} />
//     </a>
//   </li>
// );

// SocialItem.propTypes = {
//   social: PropTypes.object.isRequired,
// };

function Footer1() {
    return (
      <div className="container-fluid bg-light text-center py-3">
        All rights reserved
      </div>
    );
}

export default Footer1;

// const Footer1 = () => {
//   return (
//     <section className="ezy__footer1 light">
//       <Container>
//         <Row className="d-flex justify-content-between align-items-center">
//           <Col lg={4}>
//             <p className="mb-lg-0">Copyright all rights reserved</p>
//           </Col>
//           <Col lg={4}>
//             <Nav className="ezy__footer1-nav justify-content-center">
//               {navigations.map((item, i) => (
//                 <NavigationItem item={item} key={i} />
//               ))}
//             </Nav>
//           </Col>
//           <Col
//             lg={4}
//             className="d-flex justify-content-center justify-content-lg-end"
//           >
//             <Nav className="ezy__footer1-social">
//               {socialIcons.map((social, i) => (
//                 <SocialItem social={social} key={i} />
//               ))}
//             </Nav>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Footer1;