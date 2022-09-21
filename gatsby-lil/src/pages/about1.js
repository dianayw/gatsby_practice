// import * as React from "react"
// import { graphql } from "gatsby"
// import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

// import Layout from "../components/Layout"
// import Seo from "../components/Seo"

// import * as styles from "./about.module.css"
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';


// import ReactGA from 'react-ga';

// ReactGA.pageview('pageview-about'); //todelete 


// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }
// const AboutPage = ({ data }) => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };



//   {/* add some codes to make timestamp */}
//   let msStartTab = (new Date()).getTime();
//   const [currentTab, setCurrentTab] = React.useState();
  
//   function setCurrentTabA () {
//     let msEndTab = (new Date()).getTime();
//     let msTabDuration = msEndTab - msStartTab;
//    text = msTabDuration.toString() + "@" + currentTab;
//     setCurrentTab("A");
//     const msStartTab = (new Date()).getTime();
//   }
//   function setCurrentTabB () {
//     let msEndTab = (new Date()).getTime();
//     let msTabDuration = msEndTab - msStartTab;
//    text = msTabDuration.toString() + "@" + currentTab;
//     setCurrentTab("B");
//     const msStartTab = (new Date()).getTime();
//   }  
//   function setCurrentTabC () {
//     let msEndTab = (new Date()).getTime();
//     let msTabDuration = msEndTab - msStartTab;
//     let text = msTabDuration.toString() + "@" + currentTab;
//     setCurrentTab("C");
//     const msStartTab = (new Date()).getTime();
//   }
  
//   return (
//   <Layout>
//     <Seo
//       title="About page"
//       description="About page description."
//       image="/logo.png"
//       pathname="/"
//       // Boolean indicating whether this is an article:
//       // article
//     />
//     <section className={styles.wrapper}>
//       <StaticImage
//         src="../../content/images/robots-androids-and-cyborgs-oh-my-1184x360.jpg"
//         alt="A dinosaur"
//       />
//       <h1 className={styles.heading}>About this project</h1>
//       <p>
//       {msStartTab}
//       {currentTab}
//       {text}
//       </p>

//       {/* ADD A SECTION TO SIMULATE THE TAB PAGES */}
//       <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Item One" {...a11yProps(0)} onClick={() => setCurrentTabA()} />
//           <Tab label="Item Two" {...a11yProps(1)} onClick={() => setCurrentTabB()} />
//           <Tab label="Item Three" {...a11yProps(2)} onClick={() => setCurrentTabC()} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </Box>
//       <div>
//         {/* {data.allFile.edges.map(({ node }) => (
//           <GatsbyImage image={getImage(node)} alt={node.name} key={node.id} />
//         ))} */}
//         <p>
//           Though it may not look like much, it holds all the essentials you'll
//           need to get started building your own sites with Gatsby.
//         </p>
//         <p>
//           Make sure to check out the updated templates to see how the SEO
//           component is used, updated gatsby-node.js file for an additional
//           function to handle markdown articles without subject taxonomies, and
//           feel free to use this site as a template to build your own sites with
//           Gatsby!
//         </p>
//         <p>
//           And finally, lykke til from me to you on your journey with Gatsby!
//         </p>
//       </div>
//     </section>
//   </Layout>
// )}

// export const query = graphql`
//   query HomePageQuery {
//     allFile(
//       filter: {
//         sourceInstanceName: { eq: "images" }
//         relativeDirectory: { eq: "robots" }
//       }
//     ) {
//       edges {
//         node {
//           relativePath
//           childImageSharp {
//             gatsbyImageData
//           }
//           id
//           name
//         }
//       }
//     }
//   }
// `

// export default AboutPage
