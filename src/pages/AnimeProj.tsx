// //React...
// import React, { useState } from 'react';

// //NextJS...
// import Link from 'next/link';

// //Components...
// import InfiniteScrollBar from '@nextjsportfolio/components/infiniteScrollBar';
// import { useInView } from 'react-intersection-observer';
// import SpaceButton from '@nextjsportfolio/components/SpaceButton';


// //React slick...
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// //Icons...
// import { FiArrowRightCircle } from "react-icons/fi";
// import { IoArrowBackCircleOutline } from "react-icons/io5";
// import { BsChevronRight } from "react-icons/bs";
// import { BsChevronLeft } from "react-icons/bs";

// //data...
// //import projData from "../../data";

// //Styles...
// import styles from "../../styles/Projects.module.scss";
// import ScrollBackground from '@nextjsportfolio/components/ScrollBackground';

// interface Video {
//     src: string;
//     text: string;
// }
// interface Image {
//     img: { src: string };
//     name: string;
// }
// interface Links {
//     Github: string,
//     live: string
// }
// interface SingleProject {
//     index: number;
//     searchTitle: string;
//     displayTitle: string;
//     links: Links;
//     videos: Video[];
//     Images: Image[];
//     text: string;
//     github_link: string;
//     live_proj: string;
// }

// //Customs arrow functions for react slick nav sliders...
// const CustomPrevArrow = (props: any) => {
//     const { leftScroll, onClick } = props;
//     return (
//         <div onClick={(e) => { onClick(e); leftScroll(); }} className={`${styles.arrow} ${styles.left_arrow}`}>
//             <BsChevronLeft/>
//         </div>
//     );
// };

// const CustomNextArrow = (props: any) => {
//     const { rightScroll, onClick } = props;
//     return (
//         <div onClick={(e) => { onClick(e); rightScroll(); }} className={`${styles.arrow} ${styles.right_arrow}`}>
//             <BsChevronRight/>
//         </div>
//     );
// };


// const AnimeProj = ({ data }: { data: SingleProject }) => {
//     const [currentIndex, setCurrentIndex] = useState<number>(0);
//     const [fade, setFade] = useState(true);

//     //Animations for react slick when users clicks the arrows to navigate thorugh videos...
//     const rightScroll = () => {
//         triggerFade();
//         setCurrentIndex((prevIndex) => (prevIndex === data.videos.length - 1 ? 0 : prevIndex + 1));
//     };
//     const leftScroll = () => {
//         triggerFade();
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.videos.length - 1 : prevIndex - 1));
//     };

//     //This is for the load in animation...
//     const triggerFade = () => {
//         setFade(false);
//         setTimeout(() => {
//             setFade(true);
//         }, 300);
//     };
//     const { ref, inView } = useInView({
//         threshold: 0,
//         triggerOnce: true,
//     });

//     const settings = {
//         dots: false,
//         speed: 500,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         prevArrow: <CustomPrevArrow leftScroll={leftScroll} />,
//         nextArrow: <CustomNextArrow rightScroll={rightScroll} />,
//     };

//     return (
//         <section id={styles.projects_page} className="main-font-family">

//             <ScrollBackground/>


//             {/* <nav>
//                 {data.searchTitle !== "Anime" && (
//                     <Link className={styles.first_nav} href={`/projects/${projData[data.index - 1].searchTitle}`}>
//                         <IoArrowBackCircleOutline />
//                     </Link>
//                 )}
//                 {data.index < projData.length - 1 && (
//                     <Link className={styles.second_nav} href={`/projects/${projData[data.index + 1].searchTitle}`}>
//                         <FiArrowRightCircle />
//                     </Link>
//                 )}
//             </nav> */}

//             <div id={styles.heading}>


//                 <div className={styles.left_card}>
//                     <div className={styles.featured}>Featured Project</div>
//                     <h2>{data.displayTitle}</h2>
//                     <p>{data.text}</p>
//                 </div>

//                 <div className={styles.right_card}>
//                     <img src="/animeScreen.png" alt="" />
//                 </div>
//             </div>




//             <InfiniteScrollBar data={data.Images} />
//             <div className={styles.project_link_buttons}>
//                 <SpaceButton data={data} text={"Github"}/>
//                 <SpaceButton data={data} text={"Live"}/>
//             </div>  


//             <img className={styles.images} src="/animeHomeScreenPic.png" alt="" />
//             <img className={styles.images} src="/animeMoreinfo.png" alt="" />


//             {/* <div id={styles.projects_info}>
//                 <div ref={ref} className={`${styles.projects_left_side} ${inView ? styles.inView : ""}`}>
//                     <Slider {...settings} className={styles.actual_slider}>
//                         {data.videos.map((video, index) => (
//                             <div key={index} className={styles.video_slide}>
//                                 {index === currentIndex && (
//                                     <video
//                                         src={video.src}
//                                         className={styles.actual_video}
//                                         autoPlay
//                                         muted
//                                         loop
//                                     />
//                                 )}
//                             </div>
//                         ))}
//                     </Slider> 
//                     <span id={styles.slide_show_num}>{currentIndex + 1} / {data.videos.length}</span>
//                 </div>
//                 <div id={styles.projects_right_side}>
//                     <p className={fade ? styles.active : ''}>
//                         {data.videos[currentIndex].text}
//                     </p>
//                 </div>
//             </div>  */}

//             <div className={styles.challenge}>
//                 <div className={styles.left_challenge}>
//                     <h2>The Challenge</h2>
//                     <p>This project was the very first big project I attempted to build. Starting from a simple site, to a more complex site with a backend and three sections working simultaenously, many challenges have popped up. One of many being, how to persist data on refresh, which sounds like an amateur concept to any experienced developer, but to me at the time, this was a 'Holy Sh*t' moment.</p>
//                 </div>
//                 <img src="/firstAnimeProjPic.png" alt="" />
//             </div>

//             <div className={styles.more_info}>
//                 <h2>Redesign</h2>

//                 <p>
//                     Going from a mess of a site (sorry old site) to current modern refreshing look was adeous task. Struggling to create something beautiful and creative to trasnfer into code requires a special type of skill, so I racked my brain for ideas on what to do. So naturally, I typed figma into my search bar and searched designs.
//                 </p>


//                 <p>At the time of making this 'masterpiece', I thought to myself 'Do I have to much power?'. To me, this felt like I had some enlightemnet, to have been able to figure everything out, to finally work with a REST API and managed to connect everything in one piece, I felt like a Genius. But like any ohter coder will tell you, I quickly figured out this was not the case...</p>

//                 <p>From rags to riches some say, but I went the other way. From so high and mighty to saying 'Wow... Im horrible'. A quick google search will do the trick, one look at the competition and poof, all my pride shattered... well not really. This was an eye opener for me to not be complacent, to strive to become better every single day. I slowly started building getting better and better.</p>



//             </div>


            
                 
//         </section>
//     );
// };

// export async function getStaticPaths() {
//     const paths = projData.map((proj) => ({
//         params: { projectID: proj.searchTitle },
//     }));
//     return {
//         paths,
//         fallback: false,
//     };
// }
// export async function getStaticProps({ params }: any) {
//     const { projectID } = params;
//     const data = projData.find((proj) => proj.searchTitle === projectID);
//     return {
//         props: { data },
//     };
// }

// export default AnimeProj;