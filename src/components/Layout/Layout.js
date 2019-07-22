import React from "react";
import { useStaticQuery, graphql  } from "gatsby"
import Nav  from "../Nav"

const Layout = ( props ) => {
    
    const data = useStaticQuery(
        graphql`
            query metaData { 
                site {
                    siteMetadata{
                        title
                        description
                    }
                }
            }
        `
    )
    
    const { title, description } = data.site.siteMetadata
    console.log(`Props from Layout`)
    return(
        <div style={{maxWidth: "70vw", margin: "0 auto", height: "100vh"}}>
            <header>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <p>Path is {props.location.pathname.replace(/\/$/,"")}</p>
                <Nav />
            </header>
            {props.children}
        </div>
    )

}

export {Layout}