import React, { useEffect } from 'react';
import './HomePage.css';

const Home = () => {
  useEffect(() => {
    const options = {
      root: null, // The viewport
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Add 'show' class when the element enters the viewport
        if (entry.isIntersecting && !entry.target.classList.contains('show')) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Stop observing the element once it's animated
        }
      });
    }, options);

    // Select all elements with the 'scroll-animate' class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element)); // Cleanup observer on unmount
    };
  }, []);
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content scroll-animate">
          <h1>Welcome to NSN College of Engineering and Technology</h1>
          <p>Empowering Future Leaders Through Quality Education and Innovation</p>
          <a href="#about" className="btn">Learn More</a>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="about scroll-animate">
        <h2>About Us</h2>
        <p>
          NSN College of Engineering and Technology is a premier institution dedicated to fostering excellence in
          engineering education. Our campus provides a dynamic learning environment with cutting-edge facilities and
          experienced faculty members guiding the next generation of innovators and leaders.
        </p>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="vision-mission">
        <h2>Our Vision & Mission</h2>
        <div className="vision-mission-content">
          <div>
            <h3>Vision</h3>
            <p>To be a world-class institution recognized for excellence in technical education, research, and innovation.</p>
          </div>
          <div>
            <h3>Mission</h3>
            <ul>
              <li>Provide a transformative education that empowers students to excel in their chosen fields.</li>
              <li>Foster a culture of innovation and research to address global challenges.</li>
              <li>Promote ethical values and social responsibility among students.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="principal-message">
        <h2>Principal's Message</h2>
        <p>
          "At NSN College, we believe in holistic education that nurtures not just the intellect but also the character of our
          students. Our focus is on creating a learning environment that encourages critical thinking, creativity, and
          collaboration. We invite you to explore the endless opportunities awaiting you at NSN College."
          <br /> <strong>- Dr. Priya Ramanathan, Principal</strong>
        </p>
      </section>

      {/* Departments */}
      <section id="departments" className="departments">
        <h2>Departments</h2>
        <div className="department-grid">
          <div className="department-card">Computer Science</div>
          <div className="department-card">Mechanical Engineering</div>
          <div className="department-card">Electrical Engineering</div>
          <div className="department-card">Civil Engineering</div>
          <div className="department-card">Electronics & Communication</div>
          <div className="department-card">Information Technology</div>
        </div>
      </section>

      {/* Alumni Achievements */}
      <section className="alumni-achievements">
        <h2>Our Proud Alumni</h2>
        <p>
          NSN College is proud of its alumni who have excelled in various fields and made significant contributions to
          society. From global CEOs to innovators in tech, our alumni are a testament to our commitment to excellence.
        </p>
        <div className="achievement-grid">
          <div className="achievement-card">
            <h3>John Doe</h3>
            <p>CEO of TechCorp, a Fortune 500 company.</p>
          </div>
          <div className="achievement-card">
            <h3>Jane Smith</h3>
            <p>Inventor of sustainable energy solutions.</p>
          </div>
          <div className="achievement-card">
            <h3>Rajesh Kumar</h3>
            <p>Founder of a leading AI research startup.</p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="events">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          <div className="event-card">
            <h3>Annual Tech Fest</h3>
            <p>Join us for a day of innovation and creativity on March 10th.</p>
          </div>
          <div className="event-card">
            <h3>Guest Lecture Series</h3>
            <p>Industry experts share insights on the latest trends in engineering.</p>
          </div>
          <div className="event-card">
            <h3>Sports Meet 2024</h3>
            <p>A celebration of athleticism and team spirit. Save the date: April 5th.</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="photo-gallery">
        <h2>Photo Gallery</h2>
        <div className="gallery-grid">
          <img src="/images/demo-img.jpg" alt="Campus" />
          <img src="/images/event1.jpg" alt="Event" />
          <img src="/images/lab1.jpg" alt="Laboratory" />
          <img src="/images/sports1.jpg" alt="Sports Ground" />
          <img src="/images/library.jpg" alt="Library" />
          <img src="/images/classroom.jpg" alt="Classroom" />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "NSN College provided me with the skills and confidence to succeed in my career. The faculty is exceptional!"
            </p>
            <h4>- Alex M.</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "The campus is amazing, and the events are always engaging. I had the best time of my life here."
            </p>
            <h4>- Priya S.</h4>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
