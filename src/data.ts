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
        videos: [
            { 
                src: "/DiscoveryPageJUNECOMPN.mp4",
                text: "The discovery page offers a wide range of categories to explore with fetched data from the RestAPI known as the Jikan API. Each page offering a nice shean loading animation to signal the fetching of data. Filters have also been added to better meet the users wants."
            }, 
            { 
                src: "/BookmarkJUNECOMP.mp4",
                text: "Using firebase database, you are able to bookmark whatever you desire by a click of a button but only if you are logged in via Google. Otherwise you are not able to access this feature."
            },
            { 
                src: "/GoogleLoginJUNECOMPNEW.mp4",
                text: "With Google login funtinality, you are able to log in easily and access all the features that come with it which are bookmarking, community tab, writing reviews and such. But even when not logged in, you can read all the novels available on the website."
            }
        ],
        Images: [
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
        text: "Anime website using a RestAPI to fetch data of anime, manga, manhwa and such and integrated with firebase so the user is able to bookmark their favorite anime to remember for later. Also offering mobile support for the best viewing experience on both platforms.",
        github_link: "https://github.com/lolster45/AnimeWebsite",
        live_proj: "https://animenew-82be3.web.app/"
    },
    {
        index: 1,
        searchTitle: "task_manager",
        displayTitle: "Task Manager",
        links: {
            Github: "https://github.com/lolster45/Task-Mangement",
            live: "https://task-management-624c8.web.app/"
        },
        videos: [
            { 
                src: "/addingTask.mp4",
                text: "As show in the video, this feature allows the user to add task they need to do on their workstation. With each task they are able to add subtaks to each just in case they need it.",
            },
            { 
                src: "/MovingBetweenColumns.mp4",
                text: "The Drag and Drop feature here was built using the library react beautifull dnd, which allows the user to save so much time and cut off stress trying to organize things in their workstation. Simply drga and move, then finally drop it on your desidred column.",
            }, 
            { 
                src: "/AddNewDocument.mp4",
                text: "Using react state, I was able to create the feature that allows the user to create workstations/folders when the user needs to have multiple categories of things to do, saved using localStorage. Each being able to be named by the user for better organization",
            }
        ],
        Images: [
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
        github_link: "https://github.com/lolster45/Task-Mangement",
        live_proj: "https://task-management-624c8.web.app/"
    },
    {
        index: 2,
        searchTitle: "mtl_haven",
        displayTitle: "MTLHaven",
        links: {
            Github: "",
            live: "https://mtlhaven.web.app/"
        },
        videos: [
            { 
                src: "/ReadNovelsJUNECOMP.mp4",
                text: "Read a small (could grow) collection of machine translated novels. Each novel having multiple chapters in which the user can navigate through.",
            },
            { 
                src: "/FiltersJUNECOMP.mp4",
                text: "Going to the library page, you are able to filter the collection of novels to the generes/tags you want. Plus a cool user interface to make it simple to understand.",
            }, 
            { 
                src: "/CommentJUNECOMPN.mp4",
                text: "Of course without feedback, none of this would be complete so any user who is logged in can comment down their review of the novel to let others know if the novel was trash or gold. Supported using Firebase database so they will stay there.",
            },
            { 
                src: "/novelChaptersCOMPN.mp4",
                text: "Of course without feedback, none of this would be complete so any user who is logged in can comment down their review of the novel to let others know if the novel was trash or gold. Supported using Firebase database so they will stay there.",
            }
        ],
        Images: [
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
        github_link: "https://github.com/lolster45/Task-Mangement",
        live_proj: "https://task-management-624c8.web.app/"
    },
    {
        index: 3,
        searchTitle: "shopping_list",
        displayTitle: "Shopping List",
        links: {
            Github: "https://github.com/lolster45/Shopping-list",
            live: "https://shopping-list-tawny-seven.vercel.app/"
        },
        videos: [
            { 
                src: "/groceryListJUNECOMP.mp4",
                text: "Read a small (could grow) collection of machine translated novels. Each novel having multiple chapters in which the user can navigate through.",
            },
            { 
                src: "/activeSearchJune.mp4",
                text: "Going to the library page, you are able to filter the collection of novels to the generes/tags you want. Plus a cool user interface to make it simple to understand.",
            }, 
            { 
                src: "/shopingifyJUNECOMP.mp4",
                text: "Of course without feedback, none of this would be complete so any user who is logged in can comment down their review of the novel to let others know if the novel was trash or gold. Supported using Firebase database so they will stay there.",
            }
        ],
        Images: [
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
        github_link: "https://github.com/lolster45/Shopping-list",
        live_proj: "https://shopping-list-tawny-seven.vercel.app/"
    }
]


export default data