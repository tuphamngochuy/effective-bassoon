import React from 'react';
import style from './about.module.css';

export default function About() {
  return(
    <div className={style.AboutDiv}>
      <div className={style.AboutImgContainer}>
        <img className={style.AboutImg} src="https://i.imgur.com/MUVtk9I.jpg" />
      </div>
      <div className={style.AboutText}>
        <div className={style.AboutTextContent}>
          <p>
            Bach Khoa Research Center for Manufacturing Engineering (BKRECME) 
          is a research center of the Ho Chi Minh City University of Technology (HCMUT).
          </p>
          <p>
            The BKRECME - BioMech Lab has been doing many reseaches and techonologies 
          transfer for diversify industries fields.
          </p>
          <p>
            For more than 20 years on developing, we have been researching and applying scientific 
          and technologies in advances for the design and manufacture of many kinds of machines 
          and equipments realting many fileds of industries. Most of our research topics and technologies 
          tranfer for industries focus on the develop the automatic control systems and special machines 
          for some specific industries fields as:
          </p>
          <ul>
            <li>
              Sea food insdustries: shrimps and pangasius.
            </li>
            <li>
              Hospitals and medical fields: Medicines and medical devices transportation system;
            The smart bag for out side hospital emergecy; The smart cabinet using in hospital; 
            The automation management system for drug warehouse.
            </li>
            <li>
              Food industries: The semi-automation refined-salt production line
            </li>
            <li>
              The machinary and equipment related to fields such as mechanical engineering, 
            automation, mechatronics, robotics, artificial intelligences (AI), IoTs.
            </li>
          </ul>
          <p>
            We have matured into an industrial and scientific cooperator of agencies such as laboratory, 
          hospital, factory in related fields.
          </p>
        </div>       
      </div>
      <div className='pointTo' id='menu'></div>
    </div>
  );
}