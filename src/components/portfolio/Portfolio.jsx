import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./portfolio.scss";
import { 
    featuredPortfolio, 
    webPortfolio, 
    mobilePortfolio, 
    designPortfolio, 
    contentPortfolio } from "../../data.js"
import { v4 as uuidv4 } from 'uuid';

const Portfolio = () => {
   
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "content",
            title: "Content"
        }
    ]
    
    const [ selected, setSelected ] = useState("featured"); // Selected apunta al id
    const [ data, setData ] = useState([]);

    useEffect(() => {

        switch (selected) {

            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            case "design":
                setData(designPortfolio)
                break;
            case "content":
                setData(contentPortfolio)
                break;
        
            default:
                setData(featuredPortfolio)
                break;
        }

    },[ selected ]);

    return (                                            // Aquí situamos los botones de la seleccion de list
        <div className="portfolio" id="portfolio">      
          <h1>Portfolio</h1>
          <ul>
              { list.map( item => (                     // Mapeamos la lista y obtenemos un item por cada elemento de la lista
                  <PortfolioList                        // cada elemento (li renderizado) recibirá 
                    title={ item.title }                // el title
                    id={ item.id }                      // el id 
                    active={ selected === item.id }     // y la clase Active, que existirá si el id seleccionado = id del li renderizado
                    setSelected={ setSelected }         // El id seleccionado = onClick={ () => setSelected( id ) en el portfolioList
                    key={uuidv4()}

                  />
              ))}
          </ul>                                               
          <div className="container">
                { data.map( d => (                              // Aquí situamos el contenido de cada elemento de la list
                    <div className="item" key={uuidv4()}>
                    <img src={ d.img } alt="" />
                    <h3>{ d.title }</h3>
              </div>
                ))}
          </div>
        </div>
    )
}

export default Portfolio
