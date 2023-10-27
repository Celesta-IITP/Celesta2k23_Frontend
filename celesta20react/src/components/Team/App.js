import "../src/styles.css";
import React from "react";
import TeamCard from "./components/teamcard";
import TeamData from "./teamData";
// console.log(TeamData);
export default function App() {
  return (
    <div className="App">
      <div className="headBG">
        <h1 className="head">Our Team</h1>
      </div>
      {/* {TeamData.map((elem) => {
        // console.log(elem.teamname, elem.members);
        <div>
          <h2>{elem.teamname}</h2>
          {console.log(elem.members)};
          <div className="grid">
            <div>
              {elem.members.map((ele, ind) => {
                // console.log(ind);
                <TeamCard props={ele} key={ind} />;
              })}
            </div>
          </div>
        </div>;
      })} */}
      <h2>Fest Coordinator</h2>
      <div className="grid">
        <TeamCard
          name="Joshika Arya"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="https://www.facebook.com/joshika.arya"
          In="https://www.linkedin.com/in/joshika/"
        />
        <TeamCard
          name="Yuvi Dhelawat"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="https://www.facebook.com/yuvi.dhelawat"
          In="https://www.linkedin.com/in/yuvi-dhelawat/"
        />
      </div>
      <h2>Marketing and Sponsorship</h2>
      <div className="grid">
        <TeamCard
          name="Shashwat Mahajan"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.linkedin.com"
        />
        <TeamCard
          name="Aryan Kothari"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
        <TeamCard
          name="Balbeer Yadav"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
      </div>
      <h2>Media and Public Relations</h2>
      <div className="grid">
        <TeamCard
          name="Arohan Panda"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.linkedin.com"
        />
        <TeamCard
          name="Vijaya Gonugade"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
        <TeamCard
          name="Anmol Chaddha"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
        <TeamCard
          name="Kunj Taneja"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
      </div>
      <h2>Dev Team</h2>
      <div className="grid">
        <TeamCard
          name="Aman Jee"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.linkedin.com"
        />
        <TeamCard
          name="Ashwani Yadav"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
      </div>
      <h2>Registration </h2>
      <div className="grid">
        <TeamCard
          name="Vinay Kumar Meena"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.linkedin.com"
        />
        <TeamCard
          name="Swati Kumari"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
        <TeamCard
          name="Rakesh Kumar"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
      </div>
      <h2>Creatives</h2>
      <div className="grid">
        <TeamCard
          name="Harshavardhan.k"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.linkedin.com"
        />
        <TeamCard
          name="Shreyansh Anand"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
        <TeamCard
          name="Hareesh Tholesay"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
      </div>
      <h2>Hospitality & Logistics</h2>
      <div className="grid">
        <TeamCard
          name="Saiyyam Mittal"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.linkedin.com"
        />
        <TeamCard
          name="Sunny Chaturvedi"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
        <TeamCard
          name="Rahul Verma"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
      </div>
      <h2>Flagship Events</h2>
      <div className="grid">
        <TeamCard
          name="Hrishabh Raj"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.linkedin.com"
        />
        <TeamCard
          name="Durgesh Singh"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
        <TeamCard
          name="Anuj Yadav"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
      </div>
      <h2>Workshops, Exhibitions and Operations</h2>
      <div className="grid">
        <TeamCard
          name="Gaurav Pratap Singh"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.linkedin.com"
        />
        <TeamCard
          name="Aviral Agarwal"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
        <TeamCard
          name="Ishaan Mishra"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
      </div>
      <h2>Events & Guest Lectures</h2>
      <div className="grid">
        <TeamCard
          name="Akash Balaji"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.linkedin.com"
        />
        <TeamCard
          name="Shreya Sinha"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
        <TeamCard
          name="Rakesh Meena"
          image="https://i.ibb.co/JC4skS0/team-animate.jpg"
          fb="www.fb.com"
          In="www.fb.com"
        />
      </div>
      {/* <TeamCard image="https://i.ibb.co/JC4skS0/team-animate.jpg" />
        <TeamCard image="https://i.ibb.co/JC4skS0/team-animate.jpg" />
        <TeamCard image="https://i.ibb.co/JC4skS0/team-animate.jpg" />
        <TeamCard image="https://i.ibb.co/JC4skS0/team-animate.jpg" />
        <TeamCard image="https://i.ibb.co/JC4skS0/team-animate.jpg" />
        <TeamCard image="https://i.ibb.co/JC4skS0/team-animate.jpg" /> */}
    </div>
  );
}
