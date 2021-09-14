import React, { useState } from "react"
import { graphql } from 'gatsby'
import { formatPrice } from "../lib/helpers"

import Seo from "../components/seo"
import Header from "../components/header"
import TermsPage from "../components/terms"

import Logo from "../assets/svg/platonico_logo.svg"
import EyeIcon from "../assets/svg/platonico_eye_icon.svg"


const ProposalPage = ({ data: { proposal } }) => {
  const
    { prospect, _rawConcepts, terms } = proposal,
    { name, company } = prospect,
    [step, setStep] = useState(1),
    total = _rawConcepts.map(concept => Number(concept.price)).reduce((a, b) => (a + b));

  const changePage = step => {
    setStep(step)
    window.scrollTo( 0, 0);
  }

  return(
    <main>
      <Seo title={`Propuesta ${company || name }`} />

      {step === 1 &&
        <main>
          <div className="wrapper">
            <Logo className="logo" />

            <div className="intro-footer">
              <h1>Propuesta <span>{company}</span></h1>
              <p>– Scroll –</p>
            </div>
          </div>

          <div className="concepts">
            <Header company={company}/>

            {_rawConcepts?.map(concept => {
              const { title, deliverables, price, notes, time } = concept

              return (
                <div className="concept">
                  <h2>{title}</h2>
                  <hr />

                  <div className="container">
                    <section>
                      <h3>Entregables:</h3>
                      {deliverables?.map(deliverable => (
                        <p className="deliverable">- {deliverable}</p>
                      ))}
                    </section>

                    <aside>
                      <h3>{formatPrice(price)}</h3>
                      <p>Tiempo de entrega: {time}</p>
                    </aside>
                  </div>

                  <div className="notes">
                    {notes?.map(note => (
                      <p>* {note}</p>
                    ))}
                  </div>

                </div>
              )
            })}

            <div className="total">
              <h2>Total= <span>{formatPrice(total)}</span></h2>

              <button className="icon" onClick={() => changePage(2)}>
                <EyeIcon/>
                <p>Ve nuestros términos</p>
              </button>

            </div>

          </div>

        </main>
      }

      {step === 2 &&
        <TermsPage
          terms={terms}
          company={company}
          changePage={changePage}
        />
      }

    </main>
  )
}

export const query = graphql`
  query ProposalQuery($id: String) {
    proposal: sanityProposal(_id: {eq: $id}) {
      prospect {
        company
        name
      }
      date
      version
      _rawConcepts
      terms
    }
  }
`

export default ProposalPage
