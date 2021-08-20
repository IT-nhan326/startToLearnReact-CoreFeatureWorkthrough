import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupPages = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-start-6dddf-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //transform data to array for .map() usage
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>...Loading</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetup Pages</h1>
      <MeetupList meetupTransfer={loadedMeetups} />
    </section>
  );
};

export default AllMeetupPages;
