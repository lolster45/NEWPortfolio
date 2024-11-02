//Logos of Languages...
import htmlImage from "../public/HTMLlogo.png"
import cssImage from "../public/CSSlogo.png"
import jsImage from "../public/JsLogo.png"
import reactImage from "../public/reactImage.png"
import sassImage from "../public/sassLogo.png"
import firebaseImage from "../public/firebaseLogo.png"
import nextJSLogo from "../public/NextJSLogo.png"
import typesciptLogo from "../public/typescriptLogo.png"






const data = [
    {
        index: 0,
        searchTitle: "Anime",
        displayTitle: "Anime",
        links: {
            Github: "https://github.com/lolster45/AnimeWebsite",
            live: "https://animenew-82be3.web.app/"
        },
        colors: {
            featuredColor: '2F4858',
            headerColor: 'ffffff',
            paragraphBgColor: '1E1E1E',
            textColor: '9EE493',
            challengeParaBgColor: ''
        },
        backgroundImages: [
            '/animeBgOne.svg',
            '/animeBgTwo.svg'
        ],
        mainImg: '/NEANIME.png',
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }, 
            {
                img: reactImage, 
                name: "ReactJS"
            }, 
            {
                img: firebaseImage, 
                name: "Firebase"
            }, 
            {
                img: sassImage, 
                name: "SASS"
            }, 
        ],
        subImgs: ['/animeHomeScreenPic.png', '/animeMoreinfo.png'],
        challengeImage: '/oldAnimePicProj.png',
        text: "Anime website using a RestAPI to fetch data of anime, manga, manhwa and such and integrated with firebase so the user is able to bookmark their favorite anime to remember for later. Also offering mobile support for the best viewing experience on both platforms.",
        paragraphs: {
            challengeP: 'This project was the very first big project I attempted to build. Starting from a simple site, to a more complex site with a backend and three sections working simultaenously, many challenges have popped up. One of many being, how to persist data on refresh, which sounds like an amateur concept to any experienced developer, but to me at the time, this was a "Holy Sh*t" moment.',
            textOne: 'Going from a messy, outdated site (sorry, old site) to a modern, refreshing look was an arduous task. Struggling to create something beautiful and original, and then translating it into code, requires a special kind of skill. So, I racked my brain for ideas on what to do. Naturally, I typed "Figma" into my search bar and browsed for designs.',
            textTwo: 'At the time of creating this "masterpiece," I thought to myself, "Do I have too much power?" It felt almost enlightening—to have figured everything out, to work with a REST API, and to connect everything seamlessly. I felt like a genius. But, as any other coder will tell you, I quickly learned that this wasn’t exactly the case...',

            textThree: "Some say 'from rags to riches,' but I went the other way. From feeling high and mighty to saying, 'Wow... I'm horrible.' A quick Google search revealed the competition, and, well... my pride was shattered (not really). This was an eye-opener—not to be complacent, but to strive to get better every day. Slowly, I began building, getting better and better."
        }
    },
    {
        index: 1,
        searchTitle: "vivabkesaustin",
        displayTitle: "VivaBikes Austin",
        links: {
            Github: "https://github.com/lolster45/BikesViva",
            live: "https://bikes-viva.vercel.app/"
        },
        colors: {
            featuredColor: 'F8BB02',
            headerColor: '',
            paragraphBgColor: '0F0825',
            textColor: '',
            challengeParaBgColor: '0F0825'
        },
        backgroundImages: [
            '/vivaBikesBgOne.png', 
            '/vivaBikesBgTwo.png',
        ],
        mainImg: '/vivaBikeMainPicZero.png',
        challengeImage: '/vivaBikesOriginalWebsitePic.png',
        subImgs: [
            '/subBikeOneImg.png', 
            '/subBikeTwoImg.png',
            '/vivaBikesBgThree.png',
            '/vivaBikesBgFour.png',
        ],
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }, 
            {
                img: reactImage, 
                name: "ReactJS"
            }, 
            {
                img: firebaseImage, 
                name: "Firebase"
            }, 
            {
                img: sassImage, 
                name: "SASS"
            }, 
        ],
        text: "A Non for profit organization website the gives aways bikes to communities in need all for free. On display are the currently available bikes that anyone could request for free, all you have to do is send and email which is easily avabile on the product information.",
        paragraphs: {
            challengeP: 'My client’s non-profit organization is dedicated to providing bikes to communities in need, but they do it with a unique approach. Instead of purchasing new bikes, they repair and restore used ones, reducing costs while promoting recycling and community cleanup. When I saw their original website, it was clear they needed a modern redesign to match their mission—and I knew I had to take on the project, free of charge.',
            textOne: 'Transforming a site with challenging color choices and lengthy information into something more readable and concise for my client was no easy task. It took a lot of thought and planning to trim down long paragraphs and remove redundant details.',
            textTwo: 'With the original site lacking mobile support, I had to start from scratch. This project introduced me to new concepts that I had to learn on the go, which was exciting when things came together. Learning Firebase Storage for handling photos opened up huge opportunities.',
            textThree: 'My client wanted to upload photos of the bikes he was giving away, so I researched how to accomplish this with Firebase Storage. Having previously worked with Firebase, setting it up was straightforward. In the end, the effort paid off with a beautifully designed page featuring an admin panel.'
            
        }
    },
    {
        index: 2,
        searchTitle: "nextlevelmovers",
        displayTitle: "Next Level Movers",
        links: {
            Github: "https://github.com/lolster45/NextLevelMovers",
            live: "https://www.nextlevelmovingcompany.com/"
        },
        colors: {
            featuredColor: '000000',
            headerColor: '',
            paragraphBgColor: '000000',
            textColor: 'ffffff',
            challengeParaBgColor: '000000'
        },
        backgroundImages: [
            '/nextLevelMoversBackground.png', 
            '/nextLevelMoversBgTwo.png'
        ],
        mainImg: '/nextLevelMoversMainPic.png',
        challengeImage: '/nextLevelMoversLongBg.png',
        subImgs: ['/nextLevelMoversPicSubOne.png', '/nextLevelMoversPicSubTwo.png'],
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }, 
            {
                img: reactImage, 
                name: "ReactJS"
            }, 
            {
                img: firebaseImage, 
                name: "Firebase"
            }, 
            {
                img: sassImage, 
                name: "SASS"
            }, 
        ],
        text: "A Non for profit organization website the gives aways bikes to communities in need all for free. On display are the currently available bikes that anyone could request for free, all you have to do is send and email which is easily avabile on the product information.",
        paragraphs: {
            challengeP: 'Before working on this project, I would say i havent neccessarily say I have worked with difficult clients. This one being no exception exept for the fact that he never paid me for my work. This in turn taught me a very valuable lesson. You learn as you go and this is exactly how I learned setting up a domain and connecting it to this site',
            textOne: 'This project taught me 2 very important lessons, that being always ask for upfront pay and how to set up a domain/connect it to your hosting service.',
            textTwo: 'While I have the option to discontinue hosting my client’s website, I’ve chosen to keep it active. Maintaining the site has taught me valuable skills in web hosting, client management, and problem-solving that will benefit me in future projects. Keeping this site running serves as a continuous reminder of the lessons I’ve learned.',
            textThree: ''
        }
    },
    {
        index: 3,
        searchTitle: "task_manager",
        displayTitle: "Task Manager",
        links: {
            Github: "https://github.com/lolster45/Task-Mangement",
            live: "https://task-management-624c8.web.app/"
        },
        colors: {
            featuredColor: '69E5B0',
            headerColor: '',
            paragraphBgColor: '21212D',
            textColor: '9590f0',
            challengeParaBgColor: ''
        },
        backgroundImages: [
            '/taskManagerBgOne.png', 
            '/taskManagerBgTwo.png'
        ],
        mainImg: '/TASK-MANAGER.svg',
        challengeImage: '/taskManagerMainPic.png',
        subImgs: [
            '/taskManagerSubPicOne.png', 
            '/taskManagerSubPicTwo.png',
            '/taskManagerMainPic.png',
            '/taskManagerDragFeature.png'

        ],
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }, 
            {
                img: reactImage, 
                name: "ReactJS"
            }, 
            {
                img: firebaseImage, 
                name: "Firebase"
            }, 
            {
                img: sassImage, 
                name: "SASS"
            }, 
        ],
        text: "React application using react beautifull dnd library to create draggable tasks onto columns of your choice. Working with local storage to store your workstations and tasks.",
        paragraphs: {
            challengeP: 'Structuring the data for this project was the most challenging aspect. I had never built something with such complex layers of objects and arrays, so setting it up initially felt overwhelming. However, as I progressed, the pieces started to fall into place, leading to that satisfying "aha!" moment where everything finally made sense. This journey of trial and error allowed me to create a functional task manager with an integrated drag-and-drop feature—an aspect that added both depth and excitement to the build.',
            textOne: 'Implementing the drag-and-drop feature was by far the most time-consuming part, but the effort was well worth it. This functionality significantly enhanced the user experience, making the task manager more interactive and enjoyable to use. It’s a feature I’m particularly proud of, as it brought a unique, dynamic aspect to the final product.',
            textTwo: 'Adding these features also required me to dive into CRUD operations, which are essential for a task manager like this. Learning and applying CRUD concepts accelerated my understanding of full-stack development, providing me with a strong foundation that will be invaluable for future projects.',
            textThree: ''
        }
    },
    {
        index: 4,
        searchTitle: "mtl_haven",
        displayTitle: "MTLHaven",
        links: {
            Github: "",
            live: "https://mtlhaven.web.app/"
        },
        colors: {
            featuredColor: '6144E9',
            headerColor: '',
            paragraphBgColor: '2A2E37',
            textColor: '',
            challengeParaBgColor: ''
        },
        backgroundImages: [
            '/mtlHavenMainPic.svg', 
            '/taskManagerBgTwo.png'
        ],
        mainImg: '/MTL-HavenMain.svg',
        challengeImage: '/mtlHavenFullOne.png',
        subImgs: ['/mtlHavenSubPicOne.png', '/mtlHavenSubPicTwo.png', '/mtlHavenSubX.png', '/mtlHavenProfile.png'],
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: nextJSLogo, 
                name: "NEXTJS"
            }, 
            {
                img: typesciptLogo,
                name: "TypeScript"
            },
            {
                img: reactImage, 
                name: "ReactJS"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }, 
            {
                img: firebaseImage, 
                name: "Firebase"
            }, 
            {
                img: sassImage, 
                name: "SASS"
            },    
        ],
        text: "A machine translated chinese novel website displaying a collection of novels which the user can bookmark via firebase to view for later. Built using NextJS. ",
        paragraphs: {
            challengeP: 'One of my main interest to do in my freetime is reading novels, especially in the category called "xianxia", so it came to me as a shock when my favorite website tha I read all my novels was soon to close. Knowing this, I took matters into my own hands and decided to recreate the website as exactly how it is. Taking this journey was a very exciting one since I had to look into how to structure my data to represent books and their chapters.',
            textOne: '',
            textTwo: '',
            textThree: ''
        }
    },
    {
        index: 5,
        searchTitle: "shopping_list",
        displayTitle: "Shopping List",
        links: {
            Github: "https://github.com/lolster45/Shopping-list",
            live: "https://shopping-list-tawny-seven.vercel.app/"
        },
        colors: {
            featuredColor: '000000',
            headerColor: 'ffffff',
            paragraphBgColor: '000000',
            textColor: 'ffffff',
            challengeParaBgColor: 'FFC760'
        },
        backgroundImages: [
            '/shoppingifyBg.svg', 
            '/shoppingListBgTwo.png',
        ],
        mainImg: '/ShopingifyMain.svg',
        challengeImage: '/shoppingifySubList.png',
        subImgs: [
            '/shoppingListSubPicOne.png', 
            '/shoppingListSubPicTwo.png', 
            '/shoppingifySubX.png',
            '/shoppingifySubList.png'
        ],
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }, 
            {
                img: reactImage, 
                name: "ReactJS"
            }, 
            {
                img: sassImage, 
                name: "SASS"
            }, 
        ],
        text: "Just your normal average shopping list",
        paragraphs: {
            challengeP: '',
            textOne: '',
            textTwo: '',
            textThree: ''
        }
    }
]



const projectsMain = [
    {
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }, 
            {
                img: reactImage, 
                name: "ReactJS"
            },
            {
                img: sassImage, 
                name: "SASS"
            }, 
        ],  
        title: 'Quiz',
        links: {
            github: 'https://github.com/lolster45/fourStepQuiz',
            live: 'https://four-step-quiz.vercel.app/#/'
        },
        image: '/quizProj.png'
    },
    {
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }
        ],
        title: 'Calculator',
        links: {
            github: 'https://github.com/lolster45/Calculator-brainnest',
            live: 'https://lolster45.github.io/Calculator-brainnest/'
        },
        image: '/calculatorProj.png'
    },
    {
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }, 
            {
                img: reactImage, 
                name: "ReactJS"
            },
            {
                img: sassImage, 
                name: "SASS"
            }, 
        ],
        title: "Mark Up",
        links: {
            github: 'https://github.com/lolster45/MarkUpEditor',
            live: 'https://mark-up-editor-six.vercel.app/'
        },
        image: '/markUp.png'
    },
    {
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }, 
            {
                img: reactImage, 
                name: "ReactJS"
            }, 
            {
                img: firebaseImage, 
                name: "Firebase"
            }, 
            {
                img: sassImage, 
                name: "SASS"
            }, 
        ],
        title: 'ECOM website',
        links: {
            github: 'https://github.com/lolster45/ECOM/tree/NEW-VERSION',
            live: 'https://ecom-nu-three.vercel.app/'
        },
        image: '/ECOM.png'
    },
    {
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            },
            {
                img: sassImage, 
                name: "SASS"
            }, 
        ],
        title: 'Color Scheme Generator',
        links: {
            github: 'https://github.com/lolster45/Color-Scheme-Maker',
            live: 'https://lolster45.github.io/Color-Scheme-Maker/'
        },
        image: '/colorScheme.png'
    },
    {
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }
        ],
        title: 'Tic Tac Toe',
        links: {
            github: 'https://lolster45.github.io/Tic-Tac-Toe/',
            live: 'https://lolster45.github.io/Tic-Tac-Toe/'
        },
        image: '/ticTacToe.png'
    },
    {
        icons: [
            {
                img: htmlImage, 
                name: "HTML5"
            }, 
            {
                img: cssImage, 
                name: "CSS3"
            }, 
            {
                img: jsImage, 
                name: "JavaScript"
            }
        ],
        title: 'Password Gen.',
        links: {
            github: 'https://github.com/lolster45/Password-generator',
            live: 'https://lolster45.github.io/Password-generator/'
        },
        image: '/passwordGenerator.png'
    }
];



export {data, projectsMain}