import React from "react";
import create from "../assets/create.png";
import Resume from "../assets/resume-docs.png";
import Letter from "../assets/letter.png";
import Project from "../assets/project.png";
import Brochure from "../assets/brochure.png";
import dot from "../assets/three-dots-menu-svgrepo-com.svg";
import { Link } from "react-router-dom";

function NewDocument() {
  return (
    <div className="h-80 bg-gray-50">
      <div className="flex pl-20 pr-20 pt-10 justify-between card">
        <div className="flex">
          <p>Start a new document</p>
        </div>
        <div className="flex">
          <img src={dot} alt="" className="w-5 cursor-pointer rotate-90" />
        </div>
      </div>
      <div className="flex pl-20 pr-20 pt-2 justify-between card-body">
        <Link to="/Editer">
          <div className="flex img-div">
            <img
              src={create}
              alt=""
              className="h-48  padding-img hover:border hover:border-blue-400 cursor-pointer"
            />
            <div className="relative top-48 right-36 card-text">
              <p>Blank</p>
            </div>
          </div>
        </Link>
        <Link to="/Editer">
          <div className="flex img-div">
            <img
              src={Resume}
              alt="Resume"
              className="h-48 padding-img hover:border hover:border-blue-400 cursor-pointer"
            />
            <div className="relative top-48 right-36 card-text">
              <p>Resume</p>
            </div>
          </div>
        </Link>
        <Link to="/Editer">
          <div className="flex img-div">
            <img
              src={Letter}
              alt="Letter"
              className="h-48 padding-img hover:border hover:border-blue-400 cursor-pointer"
            />
            <div className="relative top-48 right-36 card-text">
              <p>Letter</p>
            </div>
          </div>
        </Link>
        <Link to="/Editer">
          <div className="flex img-div">
            <img
              src={Project}
              alt="Project"
              className="h-48 padding-img hover:border hover:border-blue-400 cursor-pointer card-image"
            />
            <div className="relative top-48 right-36 card-image card-text">
              <p>Project</p>
            </div>
          </div>
        </Link>
        <Link to="/Editer">
          <div className="flex img-div">
            <img
              src={Brochure}
              alt="Brochure"
              className="h-48 padding-img hover:border hover:border-blue-400 cursor-pointer card-image"
            />
            <div className="relative top-48 right-36 card-image card-text">
              <p>Brochure</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NewDocument;
