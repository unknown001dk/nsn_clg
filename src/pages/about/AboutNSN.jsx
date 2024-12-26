import React from 'react';
import './AboutNSN.css';

const AboutNSN = () => {
  return (
    <div>
      {/* About Main Card */}
      <div className="about-main-card">
        <div className="about-text-content">
          <h2>About NSN</h2>
          <h1>Welcome to N.S.N College of Engineering Technical Campus</h1>
          <p>
            N.S.N College of Engineering is established with an objective to instill the spirit of innovation among the students by imparting world-class technical education.
            Our idea is to produce engineers with global competence and emotional stability who proactively respond to evolving social needs.
            N.S.N College of Engineering and Technology is formed by N.S.N Educational Trust in order to meet the world demand for qualified manpower
            in the field of Engineering and Technology. The Trust members include well-known industrialists, businessmen, professionals, and educationalists.
            The college seeks to provide a world-class technical education, promote research and development, encourage entrepreneurship, and ultimately mold
            young engineers capable of assuming leadership of society for the betterment of the country.
          </p>
        </div>
        <div className="about-video-card">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xyypaAswNkE?si=Hko3yAKgLAXUSnzr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Additional Cards Section */}
      <div className="about-cards-section">
        {/* Vision Card */}
        <AboutCard
          image="./image/vision.jpg"
          title="VISION"
          content={
            <ul>
              <li>World Class Technical Education.</li>
              <li>Ethical Values.</li>
              <li>Competitive Skills.</li>
              <li>High Pattern of Discipline.</li>
              <li>To enhance the students to perform with global standards and make them evolve as socially responsible technocrats.</li>
            </ul>
          }
        />

        {/* Mission Card */}
        <AboutCard
          image="image2.jpg"
          title="MISSION"
          content={
            <ul>
              <li>To Provide State – of – The Art Infrastructure.</li>
              <li>Practical Exposure.</li>
              <li>Promote Research and Development.</li>
            </ul>
          }
        />

        {/* Goals Card */}
        <AboutCard
          image="image3.jpg"
          title="GOALS"
          content={
            <>
              <h3>SHORT TERM GOALS:</h3>
              <ul>
                <li>To bring the institution among the top 5 in State.</li>
                <li>To produce students with well discipline, knowledge and employability.</li>
                <li>To increase the scope for research and industry consulting.</li>
                <li>To offer many seminars / short-term courses / conferences for enhancing the knowledge of staff and students.</li>
              </ul>
              <h3>LONG TERM GOALS:</h3>
              <ul>
                <li>To bring the institution among the top 5 in State.</li>
                <li>To establish research centres in each department.</li>
                <li>To hoist the institution to Top 50 among the nation.</li>
              </ul>
            </>
          }
        />

        {/* Specialties at NSNCET Card */}
        <AboutCard
          image="image4.jpg"
          title="Specialties at NSNCET"
          content={
            <ul>
              <li>Good Academic Performance.</li>
              <li>Excellent Infrastructure and Modern Lab Facilities.</li>
              <li>National Level Technical Symposiums.</li>
              <li>Intra Department Symposiums.</li>
              <li>Daily Presentations in Class about Industry and Companies.</li>
              <li>Aptitude Classes 2 days a week.</li>
              <li>Technical Interviews 2 days a week. </li>
              <li>Regular surprise online test on placement.</li>
              <li>Open for Company Based Training to Placed Students.</li>
              <li>“Work at home on Sundays”- a self-assessment program on Aptitude and Technical.</li>
              <li>Industrial Lectures and Industrial Visits.</li>
              <li>Practical Training Courses.</li>
              <li>Non Formal Courses.</li>
              <li>Department Associations and Clubs</li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

const AboutCard = ({ image, title, content }) => (
  <div className="about-info-card">
    <div className="about-left-content">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
    <div className="about-vertical-line"></div>
    <div className="about-right-content">{content}</div>
  </div>
);

export default AboutNSN;
