import "./Footer.css";

const year: number = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>
        ⓒ { year } Learning and Programming | Coded by{" "}
        <a
          href="https://github.com/misicode/DictionaryApp"
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
