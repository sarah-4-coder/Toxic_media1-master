const Contact = () => {
  return (
    <section className="contact__section">
      <div className="contact  u-margin-top-big ">
        <h2 className="secondary-heading">Ready to work with us?</h2>
        <h3 className="heading-tertiary u-margin-bottom-medium">Contact Us</h3>
        <div className="contact__detail">
          <p className="contact__text">
            <i class="fa-solid fa-phone" style={{ color: "#ffffff;" }}></i>
            &nbsp; +91 98xxx xxxxx
          </p>
          <p className="contact__text">
            <i class="fa-brands fa-whatsapp" style={{ color: "#ffffff;" }}></i>
            &nbsp; +91 98xxx xxxxx
          </p>
          <p className="contact__text">
            <i class="fa-regular fa-envelope" style={{ color: "#ffffff;" }}></i>
            &nbsp; example@mail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
