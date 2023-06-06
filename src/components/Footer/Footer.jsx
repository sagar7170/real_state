import "./Footer.css";

const Footer = () => {
  return (
    <section className="fo-wrapper">
      <div className="paddings innerWidth flexCenter fo-container">
        <div className="flexColstart fo-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            <br />
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart fo-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New york, FL 4571 ,USA</span>
          <div className="flexCenter fo-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
