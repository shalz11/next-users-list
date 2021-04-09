import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Users.module.css";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <div className="logo">
          {/* <h1>Users List</h1> */}
          <Image src="/logo.svg" height={90} width={90} />
          <span className={styles.title}>Users List</span>
        </div>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/users">
        <a>Users List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
