import "./Footer.css";

const year: number = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="container-footer">
      <p className="credits">
        © { year } Learning and Programming | Coded by{" "}
        <a
          href="https://github.com/misicode/TL-Dictionary"
          target="_blank"
          rel="noreferrer"
        >
          MISICODE
        </a>
      </p>
    </footer>
  );
};

export default Footer;
