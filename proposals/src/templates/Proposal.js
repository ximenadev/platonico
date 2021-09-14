import React, { useState } from "react"
import { graphql } from 'gatsby'
import { formatPrice } from "../lib/helpers"

import Seo from "../components/seo"

import Logo from "../assets/svg/platonico_logo.svg"
import Header from "../components/header"


const ProposalPage = ({ data: { proposal } }) => {
  const
    { prospect, date, version, _rawConcepts, terms } = proposal,
    { name, company } = prospect,
    [step, setStep] = useState(1),
    total = _rawConcepts.map(concept => Number(concept.price)).reduce((a, b) => (a + b));

  const changePage = step => {
    setStep(step)
    window.scrollTo( 0, 0);
  }

  return(
    <main>
      <Seo title={`${company || name }`} />

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
            <Header company={company} date={date}/>

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
              <p>Total: {formatPrice(total)}</p>
            </div>

          </div>

        </main>
      }

      {/* {step === 3 &&
        <Terms
          date={date}
          company={company}
          commons={notesPage}
          notes={notes.notes}
          language={language}
          services={services}
          isLatente={isLatente}
          changePage={changePage}
          paymentMethod={paymentMethod}
          servicesNotes={servicesNotes}
        />
      } */}
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
