import "./footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem Ipsum comes from a latin text written in 45BC by Roman
            statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.
            The text is titled "de Finibus Bonorum et Malorum" which means "The
            Extremes of Good and Evil". The most common form of Lorem ipsum is
            the following
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem Ipsum comes from a latin text written in 45BC by Roman
            statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.
            The text is titled "de Finibus Bonorum et Malorum" which means "The
            Extremes of Good and Evil". The most common form of Lorem ipsum is
            the following
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ZARASTORE</span>
          <span className="copyright">© Copyright 2023 . All Rights Reserved.</span>
        </div>
        <div className="right"><img alt="payment" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwn3tMbZT-S0G4NWu0SvBVNLo6l7127dBqkouKYRCUjBc-_Z8MqugX9hNMFBxNpEzjxQ&usqp=CAU"/></div>
      </div>
    </div>
  );
};
export default Footer;
