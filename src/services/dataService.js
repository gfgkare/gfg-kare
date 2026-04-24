// This service will handle data fetching from Google Sheets/Excel in the future.
// For now, it returns mock data to ensure the UI is ready for the integration.
import rajashekar from "../assets/faculty/rajashekar.jpg";
import reshni from "../assets/faculty/reshni.jpg";
import yaswanth from "../assets/current_team/yaswanth.jpg";   
import campus_mantri from "../assets/current_team/campus_mantri.jpg";
import abhinay from "../assets/current_team/abhinay.jpg";
import deepa from "../assets/current_team/deepa.png";
import harpreet from "../assets/current_team/harpeet.jpg"; // ✅ FIXED NAME
import harsha from "../assets/current_team/harsha.jpeg";
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
import fourth from "../assets/hackheist(winners)/fourth.png";
import firstgf from "../assets/geekfest(winners)/firstgf.jpg";
import secondgf from "../assets/geekfest(winners)/secondgf.jpg";
import thirdgf from "../assets/geekfest(winners)/thirdgf.jpg";
import nodp from "../assets/nodp.png";
import firstui from "../assets/uidopple/firstui.jpg";
import secondui from "../assets/uidopple/secondui.jpg";
import thirdui from "../assets/uidopple/thirdui.jpg";
import fourthui from "../assets/uidopple/fourthui.jpg";
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
            name: "Mr RAJA SEKAR R",
            role: "Faculty Coordinator",
            tenure: "faculty",
            image: rajashekar,
            linkedin: "https://www.linkedin.com/in/rajasekar13/"
        },
        {
            id: 2,
            name: "Mrs RESHNI S",
            role: "Faculty Coordinator",
            tenure: "faculty",
            image: reshni,
            linkedin: "https://www.linkedin.com/in/reshni-suresh-5b94061b/"
        },
        {
            id: 101,
            name: "Ashok Ch",
            role: "Chair Person",
            tenure: "founders",
            image:AshokReddy,
            linkedin: "https://www.linkedin.com/in/ashokreddycheluri-740603235/"
        },
        {
            id: 102,
            name: "Krishna Vineeth G",
            role: "Vice Chair-Person & Campus Mantri",
            tenure: "founders",
            image: KrishnaVineeth,
            linkedin: "https://www.linkedin.com/in/krishna-vineeth-gubba/"
        },
        {
            id: 103,
            name: "Balaji N",
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
            name: "Vaishnavi M",
            role: "Technical Associate",
            tenure: "founders",
            image: Vaishnavi,
            linkedin: "https://www.linkedin.com/in/vaishnavi-mallavarapu-33585b271/"
        },
        {
            id: 106,
            name: "Parimal Sesha Sai A",
            role: "Technical Head",
            tenure: "founders",
            image: ParimalSeshaSai,
            linkedin: "https://www.linkedin.com/in/parimal-adini/"
        },
        {
            id: 107,
            name: "Leela Venkata Sai M",
            role: "Graphic Designing Head",
            tenure: "founders",
            image: LeelaVenkataSai,
            linkedin: "https://www.linkedin.com/in/leela-venkata-sai-macharla-348519242/"
        },
        {
            id: 108,
            name: "Pavan Vivek A",
            role: "Marketing Head",
            tenure: "founders",
            image: PavanVivek,
            linkedin: "https://www.linkedin.com/in/pavan-vivek-533052229/"
        },
        {
            id: 109,
            name: "Jaya Sri Y",
            role: "Content Writer",
            tenure: "founders",
            image: JayaSri,
            linkedin: "https://www.linkedin.com/in"
        },
        {
            id: 110,
            name: "Sravani Y",
            role: "Social Media Head",
            tenure: "founders",
            image: Sravani,
            linkedin: "https://www.linkedin.com/in/sravani-yaramasu-042758250/"
        },
        {
            id: 111,
            name: "Jagadeesh S",
            role: "Event Head",
            tenure: "founders",
            image: Jagadeesh,
            linkedin: "https://www.linkedin.com/in/jagadeesh-siddireddy-65383426a/"
        },
        {
            id: 3,
            name: "Venkateswara Rao P",
            role: "Campus Mantri",
            tenure: "2024–2025",
            image: PidigundlaVenkateswaraRao,
            linkedin: "https://www.linkedin.com/in/pidigundla-venkateswara-rao-03b319280/"
        },
        {
            id: 4,
            name: "Navadeep M",
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
            name: "Vivek Charan Tej K",
            role: "Technical Lead",
            tenure: "2024–2025",
            image: vivekcharantejkosireddy,
            linkedin: "https://www.linkedin.com/in/vivek-charan-tej-kosireddy-471b8423a/"
        },
        {
            id: 18, // ✅ FIXED DUPLICATE ID
            name: "Prasanthi G",
            role: "Tech Associate",
            tenure: "2024–2025",
            image: GarnepudiPrasanthi,
            linkedin: "https://www.linkedin.com/in/garnepudi-prasanthi-1a0872268/"
        },
        {
            id: 19, // ✅ FIXED DUPLICATE ID
            name: "Siri",
            role: "PR & Outreach",
            tenure: "2024–2025",
            image: SiriChowdary ,
            linkedin: "https://www.linkedin.com/in/siri-chowdary-795668268/"
        },
        {
            id: 20, // ✅ FIXED DUPLICATE ID
            name: "Vinay",
            role: "Web Developer",
            tenure: "2024–2025",
            image: VinayReddy,
            linkedin: "https://www.linkedin.com/in/vinay-reddy-a1aa7024b/"
        },
        {
            id: 21, // ✅ FIXED DUPLICATE ID
            name: "Gnana Sampath B",
            role: "Graphic Designer",
            tenure: "2024–2025",
            image: BatchuGnanaSampath,
            linkedin: "https://www.linkedin.com/in/batchu-gnana-sampath/"
        },
        {
            id: 22, // ✅ FIXED DUPLICATE ID
            name: "Mastan S",
            role: "Social Media Head",
            tenure: "2024–2025",
            image: MastanShaik,
            linkedin: "https://www.linkedin.com/in/mastanshaik1/"
        },
        {
            id: 23, // ✅ FIXED DUPLICATE ID
            name: "Bala Rajesh K",
            role: "Content Writer",
            tenure: "2024–2025",
            image: KunapareddyBalaRajesh,
            linkedin: "https://www.linkedin.com/in/kunapareddy-bala-rajesh-137a21214/"
        },
        {
            id: 24, // ✅ FIXED DUPLICATE ID
            name: "Yaswanth Kumar K",
            role: "Video Editor",
            tenure: "2024–2025",
            image: YaswantKumar,
            linkedin: "https://www.linkedin.com/in/yashwanth-kasa-b5222a247/"
        },
        {
            id: 6,
            name: "Anirudh N C",
            role: "Campus Mantri",
            tenure: "2025–2026 (current)",
            image: campus_mantri,
            linkedin: "https://www.linkedin.com/in/anirudh-naginayani-cheruvu-a1b720289/"
        },
        {
            id: 7,
            name: "Rakshan Ananth M",
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
            name: "Deepa M",
            role: "Web Developer",
            tenure: "2025–2026 (current)",
            image: deepa,
            linkedin: "https://www.linkedin.com/in/manyam-deepa-3ba988302/"
        },
        {
            id: 11,
            name: "Yashwanth K",
            role: "Design & Creative",
            tenure: "2025–2026 (current)",
            image: yaswanth, // ✅ KEEP AVATAR
            linkedin: "https://www.linkedin.com/in/yashwanth-kasa-b5222a247/"
        },
        {
            id: 12,
            name: "Harpreet",
            role: "Social Media",
            tenure: "2025–2026 (current)",
            image: harpreet, // ✅ NOW MATCHES IMPORT
            linkedin: "https://www.linkedin.com/in/harpreet04singh/"
        },
        {
            id: 13,
            name: "Venunadh P",
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
            name: "HARSHA VARDHAN L",
            role: "UI/UX Developer",
            tenure: "2025–2026 (current)",
            image: harsha,
            linkedin: "https://www.linkedin.com/in/lingalaharshavardhanreddy/"
        },
        {
            id: 16,
            name: "Abhinay M",
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
        101: { //codeblitz
            topWinners: [
                { id: 1, name: "Mohammed Aslam S", position: 1, image: nodp},
                { id: 2, name: "Yuvej kumar", position: 2, image: nodp},
                { id: 3, name: "Penchala Prasad Lakkakula", position: 3, image: nodp},
            ],
            allWinners: []
        },
        102: { //Algo Sniff
            topWinners: [
                { id: 1, name: "Mohammed Aslam S", position: 1, image: nodp},
                { id: 2, name: "Yuvej kumar", position: 2, image: nodp},
                { id: 3, name: "Penchala Prasad Lakkakula", position: 3, image: nodp},
            ],
            allWinners: []
        },
        103: { //UIdoppleganger
            topWinners: [
                { id: 1, name: "PONAKA VENKATA SAI–KARE", position: 1, image: firstui},
                { id: 2, name: "Prasanna Venketesh S–KARE", position: 2, image: secondui},
                { id: 3, name: "Dhakshina Sri P–Ramco Institute of Technology", position: 3, image: thirdui},
                {id: 4, name: "Revathi P–P.S.R Engineering College", position: 4, image: fourthui}
            ],
            allWinners: []
        },
        104: { //page2stage
            topWinners: [
                { id: 1, name: "Chandana Venkateswara Rao", position: 1, image: nodp},
                { id: 2, name: "Mohammed Aslam S", position: 2, image: nodp},
                { id: 3, name: "Karli Tejasree", position: 3, image: nodp},
            ],
            allWinners: []
        },
        105: { //Algorythms
            topWinners: [
                { id: 1, name: "Jaliparthi Sravanthi", position: 1, image: nodp},
                { id: 2, name: "Mohammed Aslam S", position: 2, image: nodp},
                { id: 3, name: "Shaik Arfad", position: 3, image: nodp},
            ],
            allWinners: []
        },
        106: { //AlgoTussle
            topWinners: [
                { id: 1, name: "Penchala Prasad Lakkakula", position: 1, image: nodp},
                { id: 2, name: "Mohammed Ashfaqul Haq", position: 2, image: nodp},
                { id: 3, name: "CHANDANA VENKATESWARA RAO", position: 3, image: nodp},
            ],
            allWinners: []
        },
        107: { // GeekFest
            topWinners: [
                { id: 1, name: "Inbathamizhan S", position: 1, image: firstgf},
                { id: 2, name: " N. Kavya Sri", position: 2, image: secondgf},
                { id: 3, name: "Siddabathuni Deo Haneesh", position: 3, image: thirdgf},
            ],
            allWinners: []
        },
        108: { // HackHeist
            topWinners: [
                { id: 1, name: "Coding Ninjas", position: 1, image: first},
                { id: 2, name: "Wonder Women’s", position: 2, image: second},
                { id: 3, name: "Moon Team", position: 3, image: third},
                {id: 4, name: "Binary Brains", position: 4, image: fourth}
            ],
            allWinners: []
        },
        109: { // National Skill UP
            topWinners: [
                { id: 1, name: "Rahul S.", position: 1, image: nodp},
                { id: 2, name: "Meera J.", position: 2, image: nodp},
                { id: 3, name: "Kiran P.", position: 3, image: nodp},
            ],
            allWinners: []
        }
    };

    return WINNERS_DATABASE[eventId] || {
        topWinners: [],
        allWinners: []
    };
};
