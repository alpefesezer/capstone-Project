import photo from "../assets/restauranfood.jpg";

const Main = () => {
  return (
    <main>
      <div className="first-content">
        <div className="headers">
          <div>
            <h1 className="header-title">Little Lemon</h1>
            <p
              style={{
                color: "white",
                marginTop: 0,
                fontSize: 20,
                fontFamily: "Inter",
                marginBottom: 60,
              }}
            >
              Chicago
            </p>
            <p
              style={{
                color: "white",
                marginTop: 0,
                marginBottom: 0,
                fontFamily: "Inter",
              }}
            >
              Lorem ipsum dolor sit amet,
            </p>
            <p style={{ color: "white", marginTop: 0, fontFamily: "Inter" }}>
              consectetur adipiscing elit,
            </p>
            <button className="reserve-button">Reserve a Table</button>
          </div>
        </div>
        <div className="first-image"></div>
      </div>
    </main>
  );
};

export default Main;
