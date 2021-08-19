import styles from "./MeetupItem.module.css";
import Card from '../UI/Card'

const MeetupItem = (props) => {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img scr={props.image} alt='' />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
