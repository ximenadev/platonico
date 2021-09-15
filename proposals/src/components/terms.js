import React from "react";

import Header from "./header";

import EyeIcon from "../assets/svg/platonico_eye_icon.svg"
import Icon from "../assets/svg/platonico_icon.svg"

const TermsPage = ({ terms, company, date, changePage }) => (
  <div className="terms-container">
    <Header company={company} date={date}/>

    <h1>Términos y Condiciones</h1>
    <hr />
    <ul>
      {terms?.map(term => (
        <li>{term}</li>
      ))}
    </ul>
    <div className="button-container">
      <button  className="back" onClick={() => changePage(1)}>
        <EyeIcon/>
        <p>Ve la propuesta</p>
      </button>
      <button className="contact">
      <a href="mailto:info.platonico@gmail.com">
        <Icon/>
        <p>Contáctanos</p>
      </a>
      </button>
    </div>
  </div>
)

export default TermsPage
