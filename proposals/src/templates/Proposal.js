import React, { useState } from "react"
import { graphql } from 'gatsby'

import Seo from "../components/seo"

import Logo from "../assets/svg/platonico_logo.svg"
import Header from "../components/header"


const ProposalPage = ({ data: { proposal } }) => {
  const
    { prospect, date, version, _rawConcepts, terms } = proposal,
    { name, company } = prospect,
    [step, setStep] = useState(1);

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
              const { title, deliverables, price } = concept
              return (
                <div className="concept">
                  <h2>{title}</h2>
                  <hr />

                  <section>
                    <h3>Entregables:</h3>
                    {deliverables?.map(deliverable => (
                      <p className="deliverable">- {deliverable}</p>
                    ))}
                  </section>

                  <aside>
                    <h2>${price} mxn</h2>
                  </aside>
                </div>
              )
            })}
          </div>
        </main>
      }

      {/* {step === 2 &&
        <Services
          date={date}
          company={company}
          language={language}
          services={services}
          isLatente={isLatente}
          commons={proposalPage}
          changePage={changePage}
          paymentMethod={paymentMethod}
        />
      } */}

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
