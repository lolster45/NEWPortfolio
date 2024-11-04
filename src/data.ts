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
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FAnimeProjImages%2FanimeBgOne.svg?alt=media&token=3eb5284b-4314-406c-a15e-540121e809e8',
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FAnimeProjImages%2FanimeBgTwo.svg?alt=media&token=40794473-4c93-4b93-a57b-8e7562c237f2'
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
        subImgs: [
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FAnimeProjImages%2FanimeHomeScreenPic.png?alt=media&token=d0f6cd3d-4fa2-4822-8a37-2131238bedaf', 
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FAnimeProjImages%2FanimeMoreInfo.png?alt=media&token=a230bda3-862f-40c4-93eb-a70fd9bf477f'
        ],
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
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FVivaBikeProjImages%2FvivaBikesBgOne.png?alt=media&token=291d6124-ad29-4b5c-ae05-ebb90a3811f9', 
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FVivaBikeProjImages%2FvivaBikesBgTwo.png?alt=media&token=df7fe378-fd6f-46bb-bdae-3ec1cc512350',
        ],
        mainImg: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FVivaBikeProjImages%2FvivaBikeMainPicZero.png?alt=media&token=49c4804f-33d7-4e81-928d-c61acb50cba1',
        challengeImage: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FVivaBikeProjImages%2FvivaBikesOriginalWebsitePic.png?alt=media&token=5d6ff9f6-9bd6-4195-8386-8da1d87a3a3a',
        subImgs: [
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FVivaBikeProjImages%2FsubBikeOneImg.png?alt=media&token=3fbf5a30-51eb-4132-905c-df0975fb263c', 
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FVivaBikeProjImages%2FsubBikeTwoImg.png?alt=media&token=50e444d3-f469-4d91-a8a3-743f666d8033',
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FVivaBikeProjImages%2FvivaBikesBgThree.png?alt=media&token=2d7571c2-034f-43a2-9328-1fb0056ac5a2',
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FVivaBikeProjImages%2FvivaBikesBgFour.png?alt=media&token=5b5c75a0-325e-4a72-8f8d-ee2feb5f880a',
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
        mainImg: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FNextLevelMoversProjImages%2FnextLevelMoversMainPic.png?alt=media&token=7a0ddd07-6ef0-4a48-8605-d1555a70563f',
        challengeImage: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FNextLevelMoversProjImages%2FnextLevelMoversLongBg.png?alt=media&token=f6980752-060b-4ebb-a49a-03aeb4fbea61',
        subImgs: [
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FNextLevelMoversProjImages%2FnextLevelMoversPicSubOne.png?alt=media&token=478d6cef-f393-4ba1-8af1-578dbdacb8bf', 
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FNextLevelMoversProjImages%2FnextLevelMoversPicSubTwo.png?alt=media&token=63021c06-549f-4f5e-8500-48ca27fa60f8'
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
        mainImg: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FTaskManagerProjImages%2FTASK-MANAGER.svg?alt=media&token=e791380d-1a77-4887-a1dc-67e34bdb0eaa',
        challengeImage: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FTaskManagerProjImages%2FtaskManagerMainPic.png?alt=media&token=f909c948-c7de-445c-a314-44284e295740',
        subImgs: [
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FTaskManagerProjImages%2FtaskManagerSubPicOne.png?alt=media&token=752f7546-95a0-424b-88ea-e33c03c48629', 
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FTaskManagerProjImages%2FtaskManagerSubPicTwo.png?alt=media&token=73416cdd-cb51-4e66-8d23-29b304262e6d',
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FTaskManagerProjImages%2FtaskManagerMainPic.png?alt=media&token=f909c948-c7de-445c-a314-44284e295740',
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FTaskManagerProjImages%2FtaskManagerDragFeature.png?alt=media&token=206cd46a-29d0-4b5b-b7fb-2f68dad75d8d'

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
        mainImg: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FMTLHavenProjImages%2FMTL-HavenMain.svg?alt=media&token=39cce1a8-e124-4dc2-9bff-5eb4a9769ea7',
        challengeImage: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FMTLHavenProjImages%2FmtlHavenFullOne.png?alt=media&token=a8ea0929-af5b-4495-b755-e71869aa80ed',
        subImgs: [
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FMTLHavenProjImages%2FmtlHavenSubPicOne.png?alt=media&token=6ab47690-6236-4bb7-a804-e333153efe2f', 
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FMTLHavenProjImages%2FmtlHavenSubPicTwo.png?alt=media&token=959c2f1d-e5d8-447e-ba54-96fc608752db', 
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FMTLHavenProjImages%2FmtlHavenSubX.png?alt=media&token=0cb87b75-00d6-4898-a09d-d46e21cc5aa3', 
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FMTLHavenProjImages%2FmtlHavenProfile.png?alt=media&token=7a488a3b-9941-44ef-9628-99ee3360c44c'
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
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FShoppingifyProjImages%2FshoppingifyBg.svg?alt=media&token=b1da98e6-6bae-4e94-856c-5adb1254bbd6', 
            '/shoppingListBgTwo.png',
        ],
        mainImg: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FShoppingifyProjImages%2FShopingifyMain.svg?alt=media&token=580712b9-bf5f-4e90-8a3b-864272016b15',
        challengeImage: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FShoppingifyProjImages%2FshoppingifySubList.png?alt=media&token=4e7006fd-4f74-49cd-8749-24a27f092b33',
        subImgs: [
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FShoppingifyProjImages%2FshoppingListSubPicOne.png?alt=media&token=5d28d722-5cc7-4d08-a561-b156b69143d6', 
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FShoppingifyProjImages%2FshoppingListSubPicOne.png?alt=media&token=5d28d722-5cc7-4d08-a561-b156b69143d6', 
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FShoppingifyProjImages%2FshoppingifySubX.png?alt=media&token=4c49a223-9d2c-4b81-a40c-e47a6e6ceecf',
            'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioProjectsImageSection%2FShoppingifyProjImages%2FshoppingifySubList.png?alt=media&token=4e7006fd-4f74-49cd-8749-24a27f092b33'
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
        image: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioHeroSectionImages%2FquizProj.png?alt=media&token=0c83623b-2817-41d4-a19a-8ce42201a591'
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
        image: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioHeroSectionImages%2FcalculatorProj.png?alt=media&token=f15d7a79-55a1-48b9-8bd2-19be08b7ded4',
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
        image: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioHeroSectionImages%2FmarkUp.png?alt=media&token=e3a96133-a4bb-4558-9375-d2c48f01a5d7'
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
        image: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioHeroSectionImages%2FECOM.png?alt=media&token=14e0dd12-a4f8-491d-9401-a9bf9f9e117e'
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
        image: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioHeroSectionImages%2FcolorScheme.png?alt=media&token=5f4c581a-d180-46a2-9d16-c18450ff32d8'
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
        image: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioHeroSectionImages%2FticTacToe.png?alt=media&token=1411dd65-7e87-440e-bdda-60eb3c21ba23'
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
        image: 'https://firebasestorage.googleapis.com/v0/b/image-uploader-ff8b1.appspot.com/o/MyPortfolioHeroSectionImages%2FpasswordGenerator.png?alt=media&token=c053c37e-508b-4ac5-b1ed-788df20dab6e'
    }
];



export {data, projectsMain}