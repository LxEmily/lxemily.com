// https://stackoverflow.com/questions/54942047/how-to-get-previous-url-in-react-gatsby

import React from "react"
import { Location } from "@reach/router"
import { Link } from "gatsby"

const LinkWithPrevPath = ({ children, state, ...rest }) => (
  <Location>
    {({ location }) => (
      //make sure user's state is not overwritten
      <Link {...rest} state={{ prevPath: location.pathname, ...state }}>
        {children}
      </Link>
    )}
  </Location>
)

export default LinkWithPrevPath
