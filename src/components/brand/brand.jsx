import React from 'react'
import "./brand.css"
import Google from "../../assets/google.png"
import Slack from "../../assets/slack.png"
import Dropbox from "../../assets/dropbox.png"
import Shopify from "../../assets/shopify.png"
import Atlassian from "../../assets/atlassian.png"

const brand = () => {
    return (
        <>
            <div className="gpt3__brand section__padding">
                <div><img src={Google} alt="" /></div>
                <div><img src={Slack} alt="" /></div>
                <div><img src={Atlassian} alt="" /></div>
                <div><img src={Dropbox} alt="" /></div>
                <div><img src={Shopify} alt="" /></div>
            </div>
        </>
    )
}

export default brand
