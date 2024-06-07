const styles = {
  list: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "purple",
    padding: "1.5rem",
    borderRadius: 10,
    margin: 20,
  },
  listItem: {
    textDecoration: "none",
    color: "white",
    fontSize: 18,
  },
};

interface IProps {
  propse: string;
  abouteTest: string;
  isLoggedIn: boolean;
  setIsloggedIn: (val: boolean) => void;
}

const Navbar = ({ propse, abouteTest, isLoggedIn, setIsloggedIn }: IProps) => {
  return (
    <nav>
      <ul style={{ ...styles.list }}>
        <li>
          <a style={{ ...styles.listItem }} href="/">
            {propse}
          </a>
        </li>
        <li>
          <a style={{ ...styles.listItem }} href="/">
            {abouteTest}
          </a>
        </li>
        <li>
          <a style={{ ...styles.listItem }} href="/">
            Contact
          </a>
        </li>
        <li>
        <button
            style={{ ...styles.listItem }}
            onClick={() => setIsloggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
