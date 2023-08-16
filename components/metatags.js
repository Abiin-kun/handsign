import React from 'react'
import {Helmet} from 'react-helmet'

export default function Metatags() {
    return (
        <div>
            <Helmet htmlAttributes={{
    lang: 'id',
  }}>
          <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <title>Handed | ASL to ENG</title>
          <link rel="canonical" href="" />
          <meta name="description" content='Just another ASL detector'/>
                <meta name="image" content='https://ik.imagekit.io/ps3xes4nrg/loveyou_emoji_0Y73SHTRFTaJ.svg' /> 
                
                {/* OpenGraph tags */}
                
                {/* Twitter Card tags */}
                
        </Helmet>
        </div>
    )
}
