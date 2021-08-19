import styles from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  return (
    <ul className={styles.list}>
      {props.meetupTransfer.map((meetupIN) => (
        <MeetupItem
          key={meetupIN.id}
          id={meetupIN.id}
          image={meetupIN.image}
          title={meetupIN.title}
          address={meetupIN.address}
          description={meetupIN.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
