import { createContext, useRef } from "react";
import { useState } from "react";


export const AppContext=createContext();


export const AppContextProvider=({children})=>{
    const printElem = useRef();
    const ref=useRef(null);

    const [about, setAbout] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        
    });

    const [educationList, setEducationList] = useState([
        {
            id: "",
            degree: "",
            school: "",
            startYr: 0,
            endYr: 0,
            grade: "",
        },
    ]);
    const [educationItem,setEducationItem]=useState(
        {
            id: "",
            degree: "",
            school: "",
            startYr: 0,
            endYr: 0,
            grade: "",

        }
    )


    const [skills, setSkills] = useState([
        {
            id: 1,
            name: "JavaScript",
        },
        {
            id: 2,
            name: "ReactJS",
        },
        {
            id: 3,
            name: "NodeJS",
        },
        {
            id: 4,
            name: "MongoDB",
        },
        {
            id: 5,
            name: "ExpressJS",
        },
        {
            id: 6,
            name: "PHP",
        },
        {
            id: 7,
            name: ".Net",
        },
        {
            id: 8,
            name: "Java",
        },
        {
            id: 9,
            name: "RestAPI",
        },
        {
            id: 10,
            name: "jQuery",
        },
        {
            id: 11,
            name: "MySQL",
        },
        {
            id: 12,
            name: "Ajax",
        },
        {
            id: 13,
            name: "GitHub",
        },
        {
            id: 14,
            name: "HTML",
        },
        {
            id: 15,
            name: "CSS",
        },
        {
            id: 16,
            name: "TailwindCSS",
        },
        {
            id: 17,
            name: "Bootstrap",
        },
    ]);

    const [workList, setWorkList] = useState([
        {
            id: 1,
            position: "",
            company: "",
           // type: "",
            startDate: "",
            endDate: "",
            description: "",
        },
    ]);
    const [workitem,setWorkitem]=useState({
        id: "",
        position: "",
        company: "",
       // type: "",
        startDate: "",
        endDate: "",
        description: "",

    })

    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "",
            description: "",
            url: "",
        },
    ]);
    const [projectitem,setProjectitem]=useState({
        id: "",
        name: "",
        description: "",
        url: "",

    })
    const [page,setPage]=useState("about");

    const value = { about, setAbout, educationList, setEducationList, skills, setSkills,
         workList, setWorkList, projects, setProjects,page,setPage,workitem,setWorkitem,
         projectitem,setProjectitem,educationItem,setEducationItem};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )


}