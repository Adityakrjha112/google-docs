import React from "react";
import Navbar from "../components/Navbar";
import NewDocument from "../components/NewDocument";
import RecentDocuments from "../components/RecentDocuments";
import Add from "../assets/create-copy.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <NewDocument />
      <RecentDocuments />
      <Link to="/Editer">
        <div className="fixed bottom-2 right-4 rounded-full bg-white w-16 h-16 cursor-pointer">
          <img src={Add} alt="" className="h-10 ml-[14px] mt-[14px]" />
        </div>
      </Link>
    </>
  );
}

export default Home;
