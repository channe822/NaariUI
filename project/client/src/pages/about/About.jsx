import React from 'react'
import "./about.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "../../components/Navbar"

export default function About() {
  return (
  
    <div className="team-boxed bg-black">
      <Navbar/>
      <div className='pt-24'>
      <h2 className='font-black text-center  mb-0 bg-[#D1E4F0] text-4xl pt-24'>Our Mission</h2>
      <div className='flex justify-between mt-0 bg-[#D1E4F0] border-b-2 border-b-slate-500'>
      
        <div className='w-[50%]  text-justify pl-40 pt-10 '>
          
          <p>
          Welcome to our website dedicated to raising awareness and combatting woman harassment. We are committed to providing resources, support, and information to empower individuals and communities. Our mission is to create a safe and inclusive environment where everyone can learn, share their experiences, and work together to put an end to woman harassment in all its forms. Join us in making a positive change for a more respectful and equitable society.
          </p>
        </div>
        <div className=''><img src="https://www.organon.com/wp-content/uploads/sites/2/2023/01/AboutUs-RiseTogether.jpg?resize=404,268" alt="" /></div>
      </div>
      </div>
    <div className="container">
      <div className="intro">
        <h2 className="text-center text-4xl text-white">Meet our Team</h2>
      </div>
      <div className="row people">

        <div className="col-md-6 col-lg-4 item">
          <div className="box">
            <img
              className="rounded-circle"
              
            />
            <h3 className="name">Suhani Garud</h3>
            <p className="title">Administrator</p>
            <p className="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam{" "}
            </p>
            <div className="social">
              <a href="#">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>


        <div className="col-md-6 col-lg-4 item">
          <div className="box">
           
            <h3 className="name">Manasi Kamate</h3>
            <p className="title">Woman Welfare NGO founder</p>
            <p className="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in
            </p>
            <div className="social">
              <a href="#">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <div className="box">
           
            <h3 className="name">Sanika Patil</h3>
            <p className="title">Outreach Coordinator</p>
            <p className="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam
            </p>
            <div className="social">
              <a href="#">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row people">
        <div className="col-md-6 col-lg-4 item">
          <div className="box">
            
            <h3 className="name">Nandini Pampattiwar</h3>
            <p className="title">Legal Advisor</p>
            <p className="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam{" "}
            </p>
            <div className="social">
              <a href="#">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <div className="box">
          
            <h3 className="name">Shweta Kakade</h3>
            <p className="title">Psychologist</p>
            <p className="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in
            </p>
            <div className="social">
              <a href="#">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <div className="box">
           
            <h3 className="name">Anagha Shinde</h3>
            <p className="title">Data Analyst</p>
            <p className="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam
            </p>
            <div className="social">
              <a href="#">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
