import React, { useEffect, useState } from "react"

import { graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"


import Layout from "../components/Layout"
import Seo from "../components/Seo"

import "./about.module.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';

import ReactGA from 'react-ga';
import { Typography } from "@mui/material"

const AboutPage = () => {

    const [tab, setTab] = useState(1);
    const [timeEnter, setTimeEnter] = useState<any>(Date.now());
    const [timeLeave, setTimeLeave] = useState<any>();
    const [timeTotal, setTimeTotal] = useState<any>();

    const handleTab = (tabId: number) => {
        console.log(`time start ${timeEnter} time leave ${timeLeave}`)
        setTimeLeave(Date.now())
        setTab(tabId)
    }

    useEffect(() => {
        setTimeEnter(Date.now())
    })

    useEffect(() => {
        timeCalc()
    }, [timeLeave])



    const timeCalc = () => {
        setTimeTotal(timeLeave - timeEnter)
        console.log(timeTotal)
    }




    return (
        <>
            <div>
                <nav>
                    <span style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => { handleTab(1) }}>Tab1</span>
                    <span style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => { handleTab(2) }}>Tab2</span>
                    <span style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => { handleTab(3) }}>Tab3</span>
                </nav>
                {tab === 1 &&
                    <Box>
                        <Typography>Tab 1</Typography>

                    </Box>
                }
                {tab === 2 &&
                    <Box>
                        <Typography>Tab 2</Typography>

                    </Box>
                }
                {tab === 3 &&
                    <Box>
                        <Typography>Tab 3</Typography>

                    </Box>
                }
            </div>
        </>
    )
}

export default AboutPage;