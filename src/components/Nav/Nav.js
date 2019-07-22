import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { cleanPath } from "../../utils/cleanPath"

const Nav = () => {

    const data = useStaticQuery(
        graphql`
            query LinkQuery {
             allSitePage(filter: {path:{nin: ["/dev-404-page/","/","/404/"]}})
             {
                 edges{
                     node{
                         path
                         id
                     }
                 }
             }   
            }
        `
    )

let links = null;

console.log(data.allSitePage.edges.length)
if(data.allSitePage.edges.length){
    links = (
        data.allSitePage.edges.map(link=>
    <li key={link.node.id}><Link to={link.node.path.replace(/\/$/,"")}>{cleanPath(link.node.path)}</Link></li>))
}

    return(
        <nav>
            <ul>
                {links}
            </ul>
        </nav>
    )
}

export { Nav }