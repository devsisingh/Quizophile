const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        paddingBottom: 10,
        paddingTop:8,
        backgroundColor:'black',
        color:'white'
      }}
    >
      Build by{" "}
      <a
        href="https://www.youtube.com/roadsidecoder"
        style={{ cursor: "pointer" }}
      >
        Team Dijkstra 🤍
      </a>
    </div>
  );
};

export default Footer;
