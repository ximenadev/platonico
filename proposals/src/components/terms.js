import React from "react";
import Header from "./header";

const TermsPage = ({ terms, company, date }) => (
  <div className="terms-container">
    <Header company={company} date={date}/>

    <h1>Términos y condiciones</h1>
    <hr />
    {terms?.map(term => (
      <p>- {term}</p>
    ))}
  </div>
)

export default TermsPage
