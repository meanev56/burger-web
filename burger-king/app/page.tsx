import Image from "next/image";

export default function Home() {
  return (
    <>
  <header>
    <div className="logo">
      <img src="images/iconlogo.png" alt="Berger Hut Logo" />
    </div>
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservations">Reservations</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  <section className="hero">
    <div className="hero-content">
      <h1>Welcome to Berger Hut</h1>
      <p>Experience the Taste of Perfection</p>
      <a href="#menu" className="btn">
        Explore Our Menu
      </a>
    </div>
  </section>
  <section className="about dark-theme">
    <div className="about-content">
      <h2>About Berger Hut</h2>
      <p>
        Experience the finest gourmet burgers in a cozy and rustic atmosphere.
        At Berger Hut, we are dedicated to delivering exceptional flavors that
        will tantalize your taste buds.
      </p>
      <p>
        Our chefs meticulously craft each burger using locally sourced
        ingredients and unique flavor combinations. From juicy beef patties to
        mouthwatering vegetarian options, there's something for everyone.
      </p>
      <a href="#menu" className="btn">
        Explore Our Menu
      </a>
    </div>
    <div className="about-image">
      <img src="images/about-image.jpg" alt="About Image" />
    </div>
  </section>
  <section className="menu">
    <h2>Our Menu</h2>
    <div className="menu-items">
      <div className="menu-item">
        <img src="images/burger1.jpg" alt="Burger 1" />
        <h3>Classic Cheeseburger</h3>
        <p>
          A juicy beef patty topped with melted cheese, fresh lettuce, tomato,
          and our special sauce. Served with a side of crispy fries.
        </p>
      </div>
      <div className="menu-item">
        <img src="images/burger2.jpg" alt="Burger 2" />
        <h3>Veggie Delight</h3>
        <p>
          A delicious veggie patty made from a blend of fresh vegetables and
          spices. Topped with avocado, sprouts, and tangy mayo. Served with a
          side of sweet potato fries.
        </p>
      </div>
      <div className="menu-item">
        <img src="images/burger3.jpg" alt="Burger 3" />
        <h3>Spicy BBQ Burger</h3>
        <p>
          A fiery burger packed with flavor! Grilled chicken breast smothered in
          spicy BBQ sauce, topped with jalapenos, crispy onion rings, and
          chipotle mayo. Served with a side of coleslaw.
        </p>
      </div>
    </div>
  </section>
  <section className="reservations">
    <div className="reservation-form">
      <h2>Make a Reservation</h2>
      <form>
        <input type="text" name="name" placeholder="Your Name" required="" />
        <input type="email" name="email" placeholder="Your Email" required="" />
        <input type="tel" name="phone" placeholder="Phone Number" required="" />
        <input type="date" name="date" required="" />
        <input type="time" name="time" required="" />
        <textarea
          name="message"
          placeholder="Additional Message"
          rows={5}
          defaultValue={""}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
  <section className="testimonials">
    <h2>What Our Customers Say</h2>
    <div className="testimonial">
      <img src="images/customer1.jpg" alt="Customer 1" />
      <p>
        "The burgers at Berger Hut are simply amazing! The flavors are rich, and
        the ingredients are always fresh. It's my go-to place whenever I'm
        craving a delicious meal."
      </p>
      <h4>John Doe</h4>
    </div>
    <div className="testimonial">
      <img src="images/customer2.jpg" alt="Customer 2" />
      <p>
        "Berger Hut never disappoints! The quality of their burgers and the
        friendly service make it a top-notch dining experience. I highly
        recommend it to all burger lovers!"
      </p>
      <h4>Jane Smith</h4>
    </div>
  </section>
  <section className="gallery">
    <h2>Gallery</h2>
    <div className="image-grid">
      <div className="image-item">
        <img src="images/gallery1.jpg" alt="Image 1" />
      </div>
      <div className="image-item">
        <img src="images/gallery2.jpg" alt="Image 2" />
      </div>
      <div className="image-item">
        <img src="images/gallery3.jpg" alt="Image 3" />
      </div>
      <div className="image-item">
        <img src="images/gallery4.jpg" alt="Image 4" />
      </div>
    </div>
  </section>
  <section className="contact">
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-map-marker-alt" />
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="info-item">
          <i className="fas fa-phone-alt" />
          <p>+1 234 567 890</p>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope" />
          <p>info@bergerhut.com</p>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required="" />
        <input type="email" name="email" placeholder="Your Email" required="" />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required=""
          defaultValue={""}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src="images/iconlogo.png" alt="Logo" />
      </div>
      <nav className="footer-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Menu</a>
        <a href="#">Reservations</a>
        <a href="#">Testimonials</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </nav>
      <div className="footer-social">
        <a href="#">
          <i className="fab fa-facebook" />
        </a>
        <a href="#">
          <i className="fab fa-twitter" />
        </a>
        <a href="#">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
    <p className="footer-text">© 2024 Berger Hut. All rights reserved.</p>
  </footer>
</>

  );
}
