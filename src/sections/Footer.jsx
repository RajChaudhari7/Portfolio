import { socialImgs } from "../constants";

const Footer = () => {
  // Define the social media links for each platform
  const socialLinks = {
    insta: "https://www.instagram.com/yourusername",
    fb: "https://www.facebook.com/yourusername",
    x: "https://github.com/RajChaudhari7",
    linkedin: "https://www.linkedin.com/in/raj-chaudhari-78b7b71b5/",
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialLinks[socialImg.name]}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Raj Chaudhari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
