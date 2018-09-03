import React from 'react'
import Link from 'gatsby-link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import profilePic from "./images/andrew_huang.jpg"
import PageLink from "../components/PageLink"
import media from "../styles/media"

library.add(faStroopwafel)

const IndexPage = () => (
  <div>
    <h1>About me. </h1>
    <ResponsiveBio>
      <p 
        style={{
          paddingRight: "30px"
        }}
      >
        Hi there, my name is Andrew "Drewbie" Huang and I'm a developer, designer, hobby photographer, and outdoor enthusiast. 
        I love to build, and I love learning how to build better. 
      <br/><br/>
        I graduated from University of California, Berkeley in May 2017 with a B.A. in Cognitive Science. 
        Three years in cooperative living left me with a love for diverse community, and invaluable experience in interpersonal relations and conflict mediation. 
        Away from the desk chair I can be found practicing guitar, rock climbing at the gym, or making myself some delicious stir-fry.
      </p>
      <div> 
        <img 
          src={profilePic} 
          style={{
            minWidth: "300px", 
            height: "auto", 
            width: '20vw', 
          }}
        />
      </div>
    </ResponsiveBio>
    <PageLink to="/page-2/">
      Next >>>
    </PageLink>
  </div>
)

export default IndexPage

const ResponsiveBio = styled.div`
  display: flex;
  flex-direction: row;

  /* Now we have our methods on media and can use them instead of raw queries */
  ${media.phone`
    flex-direction: column-reverse;

  `}
`