import styles from "../../styles/Users.module.css";

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const DetailsPage = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>
        <span className={styles.lblTitle}>Email :</span> {user.email}
      </p>
      <p>
        <span className={styles.lblTitle}>Contact Number :</span> {user.phone}
      </p>
      <p>
        <span className={styles.lblTitle}>Company :</span> {user.company.name}
      </p>
      <p>
        <span className={styles.lblTitle}>Website :</span> {user.website}
      </p>
      <p>
        <span className={styles.lblTitle}>City :</span> {user.address.city}
      </p>
    </div>
  );
};

export default DetailsPage;
