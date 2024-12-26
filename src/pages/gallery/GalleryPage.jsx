import React, { useState } from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const sections = [
    {
      title: "Campus Infrastructure",
      description:
        "Our campus boasts a state-of-the-art infrastructure with modern facilities, making it conducive to learning and innovation. From spacious classrooms to extensive sports complexes, we provide an all-rounded environment for growth.",
      images: [
        {
          src: "/images/demo-img.jpg",
          alt: "Main Building",
          description: "The main building of our campus.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Library",
          description: "State-of-the-art library facilities.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Sports Complex 1",
          description: "Our sports complex offers a wide range of facilities.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Sports Complex 2",
          description: "Indoor sports facilities for various games.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Sports Complex 3",
          description: "Outdoor grounds for sports and recreation.",
        },
      ],
    },
    {
      title: "Classrooms & Laboratories",
      description:
        "Our classrooms and laboratories are equipped with the latest technology to ensure an interactive and hands-on learning experience. The spacious lecture halls and specialized labs support the academic growth of our students.",
      images: [
        {
          src: "/images/demo-img.jpg",
          alt: "Classroom 1",
          description: "Spacious and well-lit classrooms.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Computer Lab",
          description: "Equipped with modern computer labs.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Lecture Hall",
          description: "Comfortable lecture halls for large classes.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Practical Lab",
          description: "Labs designed for hands-on learning experiences.",
        },
      ],
    },
    {
      title: "College Buses",
      description:
        "Our college buses provide reliable and safe transport for students. With multiple routes and timely services, students can commute comfortably between their homes and the campus every day.",
      images: [
        {
          src: "/images/demo-img.jpg",
          alt: "Bus 1",
          description: "Our comfortable buses for student transport.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Bus 2",
          description: "Well-maintained buses for daily commuting.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Bus 3",
          description: "Safe and punctual bus services for students.",
        },
      ],
    },
    {
      title: "College Events",
      description:
        "At NSN College, we host a variety of events throughout the year that cater to academic, cultural, and recreational interests. From technical seminars to annual festivals, our students are always engaged in a vibrant campus life.",
      images: [
        {
          src: "/images/demo-img.jpg",
          alt: "Annual Festival",
          description: "Annual cultural festival organized by the students.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Tech Seminar",
          description: "Guest lecture by industry experts.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Sports Day",
          description: "Annual sports day with various competitions.",
        },
        {
          src: "/images/demo-img.jpg",
          alt: "Guest Lecture",
          description: "Engagements with professionals to inspire students.",
        },
      ],
    },
  ];

  const openModal = (index) => setModalImageIndex(index);

  const closeModal = () => setModalImageIndex(null);

  const nextImage = () => {
    setModalImageIndex((prev) => (prev + 1) % sections[0].images.length);
  };

  const prevImage = () => {
    setModalImageIndex((prev) =>
      prev === 0 ? sections[0].images.length - 1 : prev - 1
    );
  };

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">NSN College of Engineering and Technology</h1>
      <p className="college-description">
        Explore our campus, facilities, and events through this interactive gallery.
      </p>

      {sections.map((section, idx) => (
        <section key={idx} className="gallery-section">
          <h2>{section.title}</h2>
          <p className="section-description">{section.description}</p>
          <div className="gallery-grid">
            {section.images.map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => openModal(index)}>
                <img src={image.src} alt={image.alt} className="gallery-image" />
                <p>{image.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {modalImageIndex !== null && (
        <div className="modal open">
          <span className="close" onClick={closeModal}>&times;</span>
          <button className="arrow left" onClick={prevImage}>&#10094;</button>
          <img
            className="modal-content"
            src={sections[0].images[modalImageIndex].src}
            alt={sections[0].images[modalImageIndex].alt}
          />
          <button className="arrow right" onClick={nextImage}>&#10095;</button>
          <div className="modal-description">
            {sections[0].images[modalImageIndex].description}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
