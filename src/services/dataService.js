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
            name: "Founder 1",
            role: "Founder",
            tenure: "founders",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Founder1",
            linkedin: "https://linkedin.com"
        },
        {
            id: 102,
            name: "Founder 2",
            role: "Founder",
            tenure: "founders",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Founder2",
            linkedin: "https://linkedin.com"
        },
        {
            id: 3,
            name: "Member A",
            role: "Tech Lead",
            tenure: "2024–2025",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberA",
            linkedin: "https://linkedin.com"
        },
        {
            id: 4,
            name: "Member B",
            role: "Event Lead",
            tenure: "2024–2025",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberB",
            linkedin: "https://linkedin.com"
        },
        {
            id: 5, // ✅ FIXED DUPLICATE ID
            name: "Member B",
            role: "Event Lead",
            tenure: "2024–2025",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberB",
            linkedin: "https://linkedin.com"
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
            role: "Technical",
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
        101: { // GeekFest
            topWinners: [
                { id: 1, name: "Dr. Savitha", position: 1, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Savitha", project: "Smart Irrigation" },
                { id: 2, name: "Prabhash", position: 2, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prabhash", project: "Energy Monitor" },
                { id: 3, name: "Vignesh", position: 3, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vignesh", project: "SafeRoute" },
            ],
            allWinners: []
        },
        102: { // HackHeist
            topWinners: [
                { id: 1, name: "Anirudh", position: 1, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anirudh", project: "Blockchain Voting" },
                { id: 2, name: "Aditya", position: 2, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya", project: "Cyber Shield" },
                { id: 3, name: "Sneha", position: 3, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha", project: "Zero Trust Auth" },
            ],
            allWinners: []
        },
        103: { // National Skill UP
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
