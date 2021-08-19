import { useRef } from "react";
import styles from "./NewMeetupForm.module.css";
import Card from "../UI/Card";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  
  const submitHandler = (event) => {
    event.preventDefault();
    const enterTitle = titleInputRef.current.value;
    const enterImage = imageInputRef.current.value;
    const enterAddress = addressInputRef.current.value;
    const enterDescription = descriptionInputRef.current.value;
    
    const meetupData = {
      title: enterTitle,
      image: enterImage,
      address: enterAddress,
      description: enterDescription,
    };
    props.onAddMeetup(meetupData);

  }
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
