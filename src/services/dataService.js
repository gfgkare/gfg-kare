// This service will handle data fetching from Google Sheets/Excel in the future.
// For now, it returns mock data to ensure the UI is ready for the integration.
import rajashekar from "../assets/faculty/rajashekar.jpg";
import reshni from "../assets/faculty/reshni.jpg";
import yaswanth from "../assets/current_team/yaswanth.jpg";   
import campus_mantri from "../assets/current_team/campus_mantri.jpg";
import abhinay from "../assets/current_team/abhinay.jpg";
import deepa from "../assets/current_team/deepa.png";
import harpreet from "../assets/current_team/harpeet.jpg"; // ✅ FIXED NAME
import harsha from "../assets/current_team/harsha.jpg";
import shruthi from "../assets/current_team/shruthi.png";
import shushmitha from "../assets/current_team/shushmitha.jpeg";
import venunadh from "../assets/current_team/venunadh.png";
import vijayashekhar from "../assets/current_team/vijayashekhar.jpg";
import rakshan from "../assets/current_team/rakshan.jpg";
import PidigundlaVenkateswaraRao from "../assets/2024_team/PidigundlaVenkateswaraRao.jpeg";
import navadeepMarella from "../assets/2024_team/navadeepMarella.jpeg";
import SabariS from "../assets/2024_team/SabariS.jpg";
import vivekcharantejkosireddy from "../assets/2024_team/vivekcharantejkosireddy.jpg";
import GarnepudiPrasanthi from "../assets/2024_team/GarnepudiPrasanthi.jpg";
import SiriChowdary from "../assets/2024_team/SiriChowdary.jpg";
import VinayReddy from "../assets/2024_team/VinayReddy.jpg";
import BatchuGnanaSampath from "../assets/2024_team/BatchuGnanaSampath.jpg";
import MastanShaik from "../assets/2024_team/MastanShaik.jpg";
import KunapareddyBalaRajesh from "../assets/2024_team/KunapareddyBalaRajesh.jpg";
import YaswantKumar from "../assets/2024_team/YaswantKumar.jpg";
import AshokReddy from "../assets/founders/AshokReddy.jpg";
import KrishnaVineeth from "../assets/founders/KrishnaVineeth.jpg";
import Balaji from "../assets/founders/Balaji.jpg";
import Sabari from "../assets/founders/Sabari.jpg";
import Vaishnavi from "../assets/founders/Vaishnavi.jpg";
import ParimalSeshaSai from "../assets/founders/ParimalSeshaSai.jpg";
import LeelaVenkataSai from "../assets/founders/LeelaVenkataSai.jpg";
import PavanVivek from "../assets/founders/PavanVivek.jpg";
import JayaSri from "../assets/founders/JayaSri.jpg";
import Sravani from "../assets/founders/Sravani.jpg";
import Jagadeesh from "../assets/founders/Jagadeesh.jpg";
import first from "../assets/hackheist(winners)/first.jpg";
import second from "../assets/hackheist(winners)/second.jpg";
import third from "../assets/hackheist(winners)/third.jpg";
export const getEvents = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
        {
            id: 1,
            title: "DSA Bootcamp",
            date: "Jan 15, 2026",
            description: "Master the fundamentals of Data Structures and Algorithms.",
            type: "Workshop"
        },
        {
            id: 2,
            title: "HackKARE 2026",
            date: "Feb 20, 2026",
            description: "24-hour national level hackathon. Build solving real-world problems.",
            type: "Hackathon"
        },
        {
            id: 3,
            title: "Tech Talk: AI",
            date: "Mar 10, 2026",
            description: "Deep dive into Generative AI with industry experts.",
            type: "Seminar"
        }
    ];
};

// This service will handle data fetching from Google Sheets/Excel in the future.
// For now, it returns mock data to ensure the UI is ready for the integration.


export const getTeam = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
        {
            id: 1,
            name: "Mr. Raja Sekar R",
            role: "Faculty Coordinator",
            tenure: "faculty",
            image: rajashekar,
            linkedin: "https://www.linkedin.com/in/rajasekar13/"
        },
        {
            id: 2,
            name: "Mrs. RESHNI SURESH",
            role: "Faculty Coordinator",
            tenure: "faculty",
            image: reshni,
            linkedin: "https://www.linkedin.com/in/reshni-suresh-5b94061b/"
        },
        {
            id: 101,
            name: "Ch.Ashok Reddy",
            role: "Chair Person",
            tenure: "founders",
            image:AshokReddy,
            linkedin: "https://www.linkedin.com/in/ashokreddycheluri-740603235/"
        },
        {
            id: 102,
            name: "G.Krishna Vineeth",
            role: "Vice Chair-Person & Campus Mantri",
            tenure: "founders",
            image: KrishnaVineeth,
            linkedin: "https://www.linkedin.com/in/krishna-vineeth-gubba/"
        },
        {
            id: 103,
            name: "N Balaji",
            role: "Graphic Designer",
            tenure: "founders",
            image: Balaji,
            linkedin: "https://www.linkedin.com/in/navuluri-balaji/"
        },
        {
            id: 104,
            name: "Sabari S",
            role: "Web Developer",
            tenure: "founders",
            image: Sabari,
            linkedin: "https://www.linkedin.com/in/sabari01/"
        },
        {
            id: 105,
            name: "M Vaishnavi",
            role: "Technical Associate",
            tenure: "founders",
            image: Vaishnavi,
            linkedin: "https://www.linkedin.com/in/vaishnavi-mallavarapu-33585b271/"
        },
        {
            id: 106,
            name: "A Parimal Sesha Sai",
            role: "Technical Head",
            tenure: "founders",
            image: ParimalSeshaSai,
            linkedin: "https://www.linkedin.com/in/parimal-adini/"
        },
        {
            id: 107,
            name: "M Leela Venkata Sai",
            role: "Graphic Designing Head",
            tenure: "founders",
            image: LeelaVenkataSai,
            linkedin: "https://www.linkedin.com/in/leela-venkata-sai-macharla-348519242/"
        },
        {
            id: 108,
            name: "A Pavan Vivek",
            role: "Marketing Head",
            tenure: "founders",
            image: PavanVivek,
            linkedin: "https://www.linkedin.com/in/pavan-vivek-533052229/"
        },
        {
            id: 109,
            name: "Y Jaya Sri",
            role: "Content Writer",
            tenure: "founders",
            image: JayaSri,
            linkedin: "https://www.linkedin.com/in/y-jaya-sri/"
        },
        {
            id: 110,
            name: "Y Sravani",
            role: "Social Media Head",
            tenure: "founders",
            image: Sravani,
            linkedin: "https://www.linkedin.com/in/sravani-yaramasu-042758250/"
        },
        {
            id: 111,
            name: "S Jagadeesh",
            role: "Event Head",
            tenure: "founders",
            image: Jagadeesh,
            linkedin: "https://www.linkedin.com/in/jagadeesh-siddireddy-65383426a/"
        },
        {
            id: 3,
            name: "Pidigundla Venkateswara Rao",
            role: "Campus Mantri",
            tenure: "2024–2025",
            image: PidigundlaVenkateswaraRao,
            linkedin: "https://www.linkedin.com/in/pidigundla-venkateswara-rao-03b319280/"
        },
        {
            id: 4,
            name: "Navadeep Marella",
            role: "Chair Person",
            tenure: "2024–2025",
            image: navadeepMarella,
            linkedin: "https://www.linkedin.com/in/navadeep-marella-13a656253/"
        },
        {
            id: 5, // ✅ FIXED DUPLICATE ID
            name: "Sabari S",
            role: "Vice Chair",
            tenure: "2024–2025",
            image: SabariS,
            linkedin: "https://www.linkedin.com/in/sabari01/"
        },
        {
            id: 17, // ✅ FIXED DUPLICATE ID
            name: "Vivek Charan Tej Kosireddy",
            role: "Technical Lead",
            tenure: "2024–2025",
            image: vivekcharantejkosireddy,
            linkedin: "https://www.linkedin.com/in/vivek-charan-tej-kosireddy-471b8423a/"
        },
        {
            id: 18, // ✅ FIXED DUPLICATE ID
            name: "Garnepudi Prasanthi",
            role: "Tech Associate",
            tenure: "2024–2025",
            image: GarnepudiPrasanthi,
            linkedin: "https://www.linkedin.com/in/garnepudi-prasanthi-1a0872268/"
        },
        {
            id: 19, // ✅ FIXED DUPLICATE ID
            name: "Siri Chowdary ",
            role: "PR & Outreach",
            tenure: "2024–2025",
            image: SiriChowdary ,
            linkedin: "https://www.linkedin.com/in/siri-chowdary-795668268/"
        },
        {
            id: 20, // ✅ FIXED DUPLICATE ID
            name: "Vinay Reddy",
            role: "Web Developer",
            tenure: "2024–2025",
            image: VinayReddy,
            linkedin: "https://www.linkedin.com/in/vinay-reddy-a1aa7024b/"
        },
        {
            id: 21, // ✅ FIXED DUPLICATE ID
            name: "Batchu Gnana Sampath",
            role: "Graphic Designer",
            tenure: "2024–2025",
            image: BatchuGnanaSampath,
            linkedin: "https://www.linkedin.com/in/batchu-gnana-sampath/"
        },
        {
            id: 22, // ✅ FIXED DUPLICATE ID
            name: "Mastan Shaik",
            role: "Social Media Head",
            tenure: "2024–2025",
            image: MastanShaik,
            linkedin: "https://www.linkedin.com/in/mastanshaik1/"
        },
        {
            id: 23, // ✅ FIXED DUPLICATE ID
            name: "Kunapareddy Bala Rajesh",
            role: "Content Writer",
            tenure: "2024–2025",
            image: KunapareddyBalaRajesh,
            linkedin: "https://www.linkedin.com/in/kunapareddy-bala-rajesh-137a21214/"
        },
        {
            id: 24, // ✅ FIXED DUPLICATE ID
            name: "K.Yaswant Kumar",
            role: "Video Editor",
            tenure: "2024–2025",
            image: YaswantKumar,
            linkedin: "https://www.linkedin.com/in/yashwanth-kasa-b5222a247/"
        },
        {
            id: 6,
            name: "Anirudh Naginayani Cheruvu",
            role: "Campus Mantri",
            tenure: "2025–2026 (current)",
            image: campus_mantri,
            linkedin: "https://www.linkedin.com/in/anirudh-naginayani-cheruvu-a1b720289/"
        },
        {
            id: 7,
            name: "Rakshan Ananth.M",
            role: "Chairperson",
            tenure: "2025–2026 (current)",
            image: rakshan,
            linkedin: "https://www.linkedin.com/in/rakshan-ananth-m/"
        },
        {
            id: 8,
            name: "Vijayashekhar C",
            role: "Technical Lead",
            tenure: "2025–2026 (current)",
            image: vijayashekhar,
            linkedin: "https://www.linkedin.com/in/vijayashekarc/"
        },
        {
            id: 9,
            name: "Sushmitha N",
            role: "PR & Outreach",
            tenure: "2025–2026 (current)",
            image: shushmitha,
            linkedin: "https://www.linkedin.com/in/sushmitha-n-379804323/"
        },
        {
            id: 10,
            name: "Manyam Deepa",
            role: "Web Developer",
            tenure: "2025–2026 (current)",
            image: deepa,
            linkedin: "https://www.linkedin.com/in/manyam-deepa-3ba988302/"
        },
        {
            id: 11,
            name: "Yashwanth Kasa",
            role: "Design & Creative",
            tenure: "2025–2026 (current)",
            image: yaswanth, // ✅ KEEP AVATAR
            linkedin: "https://www.linkedin.com/in/yashwanth-kasa-b5222a247/"
        },
        {
            id: 12,
            name: "Harpreet Singh",
            role: "Social Media",
            tenure: "2025–2026 (current)",
            image: harpreet, // ✅ NOW MATCHES IMPORT
            linkedin: "https://www.linkedin.com/in/harpreet04singh/"
        },
        {
            id: 13,
            name: "Venunadh Parimi",
            role: "Machine Learning",
            tenure: "2025–2026 (current)",
            image: venunadh,
            linkedin: "https://www.linkedin.com/in/venunadh-parimi-1b571034b/"
        },
        {
            id: 14,
            name: "Shruthi M",
            role: "Events & Operations",
            tenure: "2025–2026 (current)",
            image: shruthi,
            linkedin: "https://www.linkedin.com/in/shruthi-pandian-55b123362?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        },
        {
            id: 15,
            name: "LINGALA HARSHA VARDHAN REDDY",
            role: "UI/UX Developer",
            tenure: "2025–2026 (current)",
            image: harsha,
            linkedin: "https://www.linkedin.com/in/lingalaharshavardhanreddy/"
        },
        {
            id: 16,
            name: "M. Abhinay Reddy",
            role: "Associate Event Organiser",
            tenure: "2025–2026 (current)",
            image: abhinay,
            linkedin: "https://www.linkedin.com/in/abhinay-reddy-mukkamalla-455893323?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        }
    ];
};


export const getEventWinners = async (eventId) => {
    await new Promise(resolve => setTimeout(resolve, 800));

    const WINNERS_DATABASE = {
        101: { //AlgoTussle
            topWinners: [
                { id: 1, name: "Rajveer Singh", position: 1, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajveer"},
                { id: 2, name: "Penchala Prasad Lakkakula", position: 2, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Penchala"},
                { id: 3, name: "Mohammed Ashfaqul Haq", position: 3, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ashfaqul"},
            ],
            allWinners: []
        },
        102: { // GeekFest
            topWinners: [
                { id: 1, name: "Inbathamizhan S", position: 1, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"},
                { id: 2, name: " N. Kavya Sri", position: 2, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya"},
                { id: 3, name: "Siddabathuni Deo Haneesh", position: 3, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deo"},
            ],
            allWinners: []
        },
        103: { // HackHeist
            topWinners: [
                { id: 1, name: "Coding Ninjas", position: 1, image: first},
                { id: 2, name: "Wonder Women’s", position: 2, image: second},
                { id: 3, name: "Moon Team", position: 3, image: third},
            ],
            allWinners: []
        },
        104: { // National Skill UP
            topWinners: [
                { id: 1, name: "Rahul S.", position: 1, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul", project: "Skills Ledger" },
                { id: 2, name: "Meera J.", position: 2, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera", project: "EduPortal" },
                { id: 3, name: "Kiran P.", position: 3, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kiran", project: "SkillMatch AI" },
            ],
            allWinners: []
        }
    };

    return WINNERS_DATABASE[eventId] || {
        topWinners: [],
        allWinners: []
    };
};
