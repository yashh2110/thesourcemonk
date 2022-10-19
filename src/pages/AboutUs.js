import React, { useEffect } from "react";
import "../styles/about.css";
function AboutUs() {
  useEffect(() => {
    const header = document.querySelector(".header");
    header.classList.add("header-scroll");
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <p className="about-title">
        <span>About Us</span>
      </p>
      <div className="about-content">
        <div className="ourstory about-section">
          <p className="about-subtitle">
            <span>Our Story</span>
          </p>
          <p className="about-desc">
            Makineni Projects was founded to cater to the growing swimming pool
            market in India. It centers on construction, renovation and
            maintenance of swimming pools with cost effective and quality
            solutions. Pools has developed key areas of strength like Domain and
            Technological Expertise, Skilled Manpower and Flawless Quality in
            Delivery to define its service. Our Pools recognised that it must
            focus on strengths like these, combined with value for customer
            satisfaction, to become a competitive player in the market.
          </p>
          <p className="about-desc">
            We are one of the leading fabricators & building contractors engaged
            in providing electrical & plumbing jobs, civil engineering services,
            construction of water tanks, interior& exterior designing services
            building renovation services and rain water harvesting system.
          </p>
          <p className="about-desc">
            Makineni Projects has been designing and installing world class
            sports surfaces for institutions like stadiums, clubs, gymnasiums,
            schools, universities, hotels and cooperates using high class raw
            material & modern technology with its well-trained professional
            teams
          </p>
        </div>
        <div className="swimmingpool about-section">
          <p className="about-subtitle ">
            <span>Swimming Pools</span>
          </p>
          <p className="about-desc">
            Makineni Projects bring life to pools through innovation in design
            and technical leadership, setting the standard in modern swimming
            pools.
          </p>
          <p className="about-desc">
            Our pools combine four elements: function, safety, reliability and
            elegance. Together with real value-for-money, they add up to our
            desirability. Our swimming pools meet the needs of both individual
            home owners and developers with multiple pool requirements. We are a
            leading provider of pools and water features. We have a strong
            Retail business installing and servicing private pools for home
            owners in our local market
          </p>
          <p className="about-desc">
            Our core competency today is providing multiple pools for Real
            Estate and Resort developments, with both the products and the
            necessary Project Management experience to deliver on time,
            on-budget, on-quality. Through having all skill sets in-house:
            design, engineering, production, installation and service we are
            able to ensure professional delivery and performance.
          </p>
          <p className="about-desc">
            We have become a world-class supplier of specialist pools for
            exacting requirements such as in the Spa and Wellness and we carry
            out the design and build of water features.
          </p>
          <p className="about-desc" style={{ fontWeight: 600 }}>
            Makineni Projects-pools provide, as standard, a number of features
            including:
          </p>
          <ul className="about-desc">
            <li>Easy access walk-in steps</li>
            <li>Seating and ledges</li>
            <li>Options for temperature control</li>
            <li>In-pool lighting</li>
            <li>
              A beautiful, hand tiled mosaic finish, with accent lines at the
            </li>
            <li>edge of all steps and seats for safety purposes.</li>
            <li>Safe, smooth, easy to clean surfaces</li>
            <li>A well-engineered and proven sanitation system</li>
            <li>A wide range of optional extras and upgrades</li>
          </ul>
          <p className="about-desc">
            <b>SAFETY:</b> All swimming pools are a potential hazard especially
            for young children and non-swimmers. There is no substitute for
            proper supervision of non-swimmers and children
          </p>
          <p className="about-desc" style={{ fontWeight: 600 }}>
            DESIGN TO DELIVERY:
          </p>
          <ul className="about-desc">
            <li>Design: We help you in turning your design into reality.</li>
            <li>
              Drawing: We create a full CAD drawing with all the dimensions.
            </li>
            <li>Build: Your pool is built in house by qualified technicians</li>
            <li>Plan: Choose the type and colour of tiles that you want.</li>
            <li>Delivery: Our pools are delivered in 4-6 weeks.</li>
            <li>Hand Over:2 weeks later, all works are completed.</li>
            <li>Safe, smooth, easy to clean surfaces</li>
            <li>A well-engineered and proven sanitation system</li>
            <li>A wide range of optional extras and upgrades</li>
          </ul>
          <p className="about-desc">
            The best thing about your pool should be the water. When you use
            your pool, you need the assurance the water is clean, sanitized,
            safe & comfortable for pool users. Traditionally pools have been
            sanitized by using chlorine chemicals.
          </p>
          <p className="about-desc">
            The problem with this is it can cause the water to feel hard and
            smell of chlorine, bleach hair and cause redeye discomfort.
            Additionally, handling of chlorine chemicals is hazardous.
          </p>
          <p className="about-desc">
            Contemporary pool water treatment systems avoid the need to add
            chlorine chemicals and provide much better solutions.
          </p>
          <p className="about-desc">
            Makineni Projects is one of the leading businesses in the Swimming
            Pool Contractors. Also known for Cleaning Services, Swimming Pool
            Contractors, Swimming Pool Cleaning Services, Swimming Pool
            Consultants, Readymade Swimming Pool Contractors, Swimming Pool
            Accessory Distributors, Swimming Pool Construction Equipment
            Dealers, Swimming Pool Equipment Dealers and much more.
          </p>
        </div>
        <div className="buildings about-section">
          <p className="about-subtitle ">
            <span>Building Construction</span>
          </p>
          <p className="about-desc">
            We <b>“Makineni projects”</b>, are engaged in providing various kind
            of civil construction service that include Rainwater Harvesting,
            Electrical Works Horticulture Services, Plumbing Contractors, Civil
            Construction work, Roads, Designing, Fabrication and Laying Service,
            Interiors and Exteriors services. These are offered as per the
            requirement of our esteemed clients.
          </p>
          <p className="about-desc">
            We use high quality raw material throughout our service in every
            field as we are one of the renowned quality centric organization and
            quality is our prior aim. We procure the raw material from quality
            driven organization that is checked at our quality inspection unit
            as to provide unique quality service to our esteemed clients. We
            offer these services after complete planning and designing of the
            project.
          </p>
          <p className="about-desc">
            Our team of experts and professional engineers are gaining
            experience from past many years in the field of civil engineering.
            We use latest and high-performance machinery & equipment’s in our
            services. Further we ensure that the entire task done by us meets
            quality standards.
          </p>
          <p className="about-desc" style={{ fontWeight: 600 }}>
            We follow certain quality guidelines that include:
          </p>
          <ul className="about-desc">
            <li>Design: We help you in turning your design into reality.</li>
            <li>Consistent quality improvement</li>
            <li>Innovative and cost-effective services</li>
            <li>Timely execution of services</li>
          </ul>
          <p className="about-desc" style={{ fontWeight: 600 }}>
            The firm is fully equipped to provide complete range of services in
            the construction:
          </p>
          <ul className="about-desc">
            <li>Educational Institutions</li>
            <li>Executive Floors</li>
            <li>Housing Projects</li>
            <li>Multiplex-Cum-Shopping Malls</li>
            <li>Overhead and Underground Water Tanks</li>
            <li>Road and Road Development</li>
            <li>Roofing Shed Works</li>
          </ul>
          <p className="about-desc" style={{ fontWeight: 600 }}>
            Sports Court Roofing Shed Works
          </p>
          <p className="about-desc">
            Offering you a complete choice of services which include sports
            court construction service, sports court roofing shed fabricators,
            roofing contractors.
          </p>
          <p className="about-desc">
            About Us “Makineni Projects” came into existence with a vision to
            satisfy the needs of our customers in the area of laying roofs with
            structure. With its business offices based in Guntur, Vijayawada and
            Hyderabad Andhra Pradesh and Telangana (India) our organization is
            operating its entire business.
          </p>
          <p className="about-desc">
            We are engaged as a manufacturer and supplier and Service provider
            for our products which include Roofing Structure, Residential
            Roofing, Metal Roof and many more. Our services have found
            applications in various industries and commercial sectors. We
            believe in providing good service to the customer and getting
            repeated orders from them. With our excellence in-service and years
            of industrial experience, we have created a big list of clienteles
            and offer them their varied range of services as per their demands.
            We assure the offered quality of our services and also ensure that
            they will give the hassle-free performance to the user. We are
            moving ahead and keeping pace with the surrounding competition.
            Owing to our dedication, foresightedness and profound experience, we
            have gathered immense success and recognition in this competitive
            industry. To assist us in day-to-day work is a competent team,
            comprising enthusiastic, dedicated and...
          </p>
        </div>
        <div className="buildings about-section">
          <p className="about-subtitle ">
            <span>Sports Surfaces</span>
          </p>
          <p className="about-desc">
            We intend to provide highest quality sports floorings in shortest
            time that too at most competitive and reasonable price. While we are
            quality conscious, we also pay due attention to the human healthcare
            and environmental safety. With too many players in market it's an
            obvious question that you might think of. Let us try and share some
            our specialties that many help you decide why to give us a chance to
            install your sports surface.
          </p>
          <p className="about-desc">
            <b>Proven Credentials:</b> We are Limit Liability Partnership firm
            with a proven performance credential. We have a history of referral
            and repeat customers due to the quality of our delivery.
          </p>
          <p className="about-desc">
            <b>Organized Setup:</b> Unlike individual set ups (Proprietorship)
            where trust is a big issue we are well organized group capable of
            quality delivery.
          </p>
          <p className="about-desc">
            <b>Resources:</b> We have our own warehouse & experienced workforce
            which ensures time bound delivery.
          </p>
          <p className="about-desc">
            <b>No Middleman:</b> We directly procure raw material from
            manufacturer with no involvement of middleman. It saves the cost &
            quality remains intact. It helps us in providing competitive pricing
            to our customers.
          </p>
          <p className="about-desc">
            <b>Surface of your choice:</b> For a particular sports surface there
            are multiple options and if customer needs then we share all of them
            while sharing the quotation. It means you can select what you want.
          </p>
          <p className="about-desc">
            <b>Multiple brands options under one roof: </b> We offer various
            brand options with different price range under one roof. Once
            customer makes a decision to use a particular brand product,
            suppliers are updated on the same hence transparency is maintained.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
