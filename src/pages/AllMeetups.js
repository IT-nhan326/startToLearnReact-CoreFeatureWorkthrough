import React, { useState , useEffect} from "react";
import MeetupList from "../components/meetups/MeetupList";


const AllMeetupPages = (props) => {
  const [isloading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(()=>{
    fetch(
      "https://react-getting-start-6dddf-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
      });
  },[])

  
    
    if (isLoading){
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
