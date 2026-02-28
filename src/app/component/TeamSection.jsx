import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  const teamMembers = [
    { name: "Azim Mithani", role: "Founder & Chief Financial Officer", img: "/images/team-2.jpg" },
    { name: "Pratik Kawalkar", role: "Director – Banking Operations", img: "/images/team-2.jpg" },
    { name: "Mustaq Merchant", role: " Head – Technology & Digital Operations", img: "/images/team-2.jpg" },
    { name: "Abhishek Bhosale", role: "Operations Executive (Field Operations)", img: "/images/team-4.jpg" },
  ];

  return (
    <div className="our-team">
      <div className="container">
        {/* Section Heading */}
        <div className="row section-row align-items-center">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h3 className="wow fadeInUp">team member</h3>
              <h2 className="text-anime-style-2">
                Professionals, trusted <span>financial advisors</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="team-member-item wow fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
              >
                {/* Image */}
                <div className="team-image">
                  <Link href="/team-single">
                    <figure className="image-anime">
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={400}
                        height={450}
                        className="img-fluid"
                      />
                    </figure>
                  </Link>
                </div>

                {/* Content */}
                <div className="team-body">
                  <div className="team-content">
                    <h3>
                      <Link href="/team-single">{member.name}</Link>
                    </h3>
                    <p>{member.role}</p>
                  </div>

                  {/* Social Icons */}
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
