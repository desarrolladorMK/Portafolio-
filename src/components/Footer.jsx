const Footer = () => {
  return (
    <footer
      style={{
        background: "#000",
        color: "#64ffda",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "1.2rem" }}>
        stelarCode &copy; {new Date().getFullYear()}
      </h1>
    </footer>
  );
};

export default Footer;
