import React from 'react';
import "./sessions.css"
import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer"
function SessionInformation() {
  const sessions = [
    {
      id: 1,
      img:"https://noticebard.com/wp-content/uploads/2022/08/SEWA-JOBS.jpg",
      link:"https://www.sewa.org/",
      title: 'SEWA',
      Founding:" founded in 1972 by Ela Bhatt",
      description:"Mission: SEWA's mission is to organize women in the informal sector and provide them with a collective voice, representation, and support in asserting their rights and accessing essential services. It aims to promote social and economic empowerment among women workers by advocating for their rights and offering various services and programs. Over the years, SEWA has had a significant impact on the lives of women workers in the informal sector. It has empowered numerous women to become financially independent and helped improve their social status. SEWA's efforts have been recognized both nationally and internationally for its innovative approaches to womens economic empowerment.",

    },
    {
      id: 2,
      img:"https://s12982.pcdn.co/wp-content/uploads/2015/01/pXdcq2he_400x400.jpeg",
      link:"https://inbreakthrough.org/",
      title: 'Breakthrough',
      Founding:" Breakthrough was founded in 1999 by Mallika Dutt",
      description:"Breakthrough's mission is to prevent violence against women and girls by challenging the cultural norms and behaviors that perpetuate gender-based violence. The organization aims to build a world where all individuals are treated with dignity, equality, and respect.Breakthrough is well-known for its innovative and impactful multimedia campaigns. They have created videos, public service announcements, and online content that raise awareness about issues like domestic violence, sexual harassment, gender-based discrimination, and violence against women."
      
    },
    {
      id: 3,
      img:"https://cfstatic.give.do/b8ba0567-7633-476f-ae2e-4a8060dc9b08.png",
      link:"https://www.mijwan.org/",
      title: 'Mijwan Welfare Society(MWS)',
      Founding:"The Mijwan Welfare Society was founded by the late Kaifi Azmi, a renowned Indian poet, and his daughter, the actress Shabana Azmi.",
      description: " Mijwan Welfare Society's primary mission is to improve the lives of the rural community, especially women and girls, by providing them with access to education, skill development, and employment opportunities. The organization aims to uplift the socio-economic status of the community and create a more inclusive and sustainable environment.The Mijwan Welfare Society focuses on various development areas, including education, healthcare, vocational training, women's empowerment, and rural infrastructure. The organization believes that education and skill development are critical in breaking the cycle of poverty and empowering individuals to lead better lives."
    },
    {
      id: 4,
      img:"https://static.wixstatic.com/media/07495e_dd6879ddd62345ea962e5ac0c54b9724~mv2.png/v1/crop/x_0,y_6,w_425,h_419/fill/w_131,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/07495e_05a4247d4b814ae6aa48bc0272de301c_edited_edited.png",
      link:"https://www.snehalaya.org/",
      title: 'Snehalaya Foundation',
      Founding: ' the founder of Snehalaya Foundation is Mr. Girish Kulkarni. ',
      description: ' The organization primarily focuses on various social issues, such as womens rights, childrens education, healthcare, and rehabilitation for survivors of human trafficking and sexual exploitation.Rescue and Rehabilitation: Providing shelter, medical assistance, and psychological support to women and children who have been rescued from trafficking, abuse, or exploitation.Education and Skill Development: Offering educational opportunities and vocational training to empower women and children to become self-reliant and economically independent.'
    },
    {
      id: 5,
      img:"http://azadfoundation.com/wp-content/uploads/2018/10/azad-logo-329x84.png",
      link:"https://azadfoundation.com/",
      title:"Azad foundation",
      Founding: 'the founder of Azad Foundation is Meenu Vadera. She is an Indian social entrepreneur ',
      
      description: 'the Azad Foundation is a non-profit organization based in India that focuses on empowering women from marginalized communities by providing them with livelihood training and supporting them to become professional chauffeurs. The foundation aims to create opportunities for women in the traditionally male-dominated field of commercial driving, enabling them to achieve economic independence and improve their social status. The foundation offers comprehensive training programs to women, including driving skills, self-defense, and communication skills. This training prepares them to work as professional chauffeurs. By promoting womens economic empowerment, Azad Foundation aims to challenge gender norms and empower women to be agents of change in their communities'
    },
    

  ];

  return (
    <>
    <Navbar/>
    <div className="session-information">
    <div className='session-title flex justify-center w-[100vw] '>
    <h2 className="session-information__title w-[100%]">NGOs To Reach Out</h2>
    </div>
    <div className="session-information__card-container">
      {sessions.map(session => (
        <div key={session.id} className="session-information__card">
         
          {/* <h3 className="session-information__card-title">{session.title}</h3> */}
          <a href={session.link} target='blank'><img src={session.img} className='mix-blend-multiply mx-auto w-64'></img></a>
          <p className="session-information__card-details">
           <p className='my-2 text-center font-bold text-base'>  {session.Founding}</p>
           
            <p>
            {session.description}
            </p>
          </p>



        </div>
      ))}

    </div>
    <Footer/>
  </div>

 

  </>
  );
}

export default SessionInformation;
