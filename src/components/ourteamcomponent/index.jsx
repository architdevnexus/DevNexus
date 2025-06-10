import DeveloperCarousel from "./DeveloperCarousel";
import BannerImage1 from "../../../public/images/team/our team.jpg";
import { Banners } from "../global/NavBanners";


const devData = [

  {
    name: 'Abdul Azeem',
    role: 'Lead Backend Developer',
    experience: '5+ years',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS'],
    imgUrl: 'images/team/avatar.svg',
  },
    {
    name: 'Ankit',
    role: 'Full Stack Developer Intern',
    experience: '5+ years',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS'],
    imgUrl: 'images/team/avatar.svg',
  },
];

const FrontendData = [
    {
    name: 'Mukti Jindal',
    role: 'Frontend Developer',
    experience: '5+ years',
    skills: ['Bootstrap', 'CSS3', 'HTML5'],
    imgUrl: 'images/team/avatar.svg',
  },
  {
    name: 'Anupam',
    role: 'Lead Frontend Developer',
    experience: '5+ years',
    skills: ['Tailwind CSS', 'HTML5', 'Bootstrap'],
     imgUrl: 'images/team/avatar.svg',
  },
  {
    name: 'Ashish Sharma',
    role: 'Devops Developer',
    experience: '5+ years',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS'],
    imgUrl: 'images/team/avatar.svg',
  },
];

const DesignerData = [
    {
    name: 'Amanat Sabherwal ',
    role: 'Graphic Designer',
    experience: '5+ years',
    skills: ['Bootstrap', 'CSS3', 'HTML5'],
    imgUrl: 'images/team/avatar.svg',
  },
  {
    name: 'Vansh Kaushik',
    role: 'UI UX Developer',
    experience: '5+ years',
    skills: ['Tailwind CSS', 'HTML5', 'Bootstrap'],
     imgUrl: 'images/team/avatar.svg',
  },

];


const ManagementData = [
    {
    name: 'Nick',
    role: 'Manager',
    experience: '5+ years',
    skills: ['Bootstrap', 'CSS3', 'HTML5'],
    imgUrl: 'images/team/avatar.svg',
  },
  {
    name: 'Naveen',
    role: 'Sales Head',
    experience: '5+ years',
    skills: ['Tailwind CSS', 'HTML5', 'Bootstrap'],
     imgUrl: 'images/team/avatar.svg',
  },

];


const CMSData = [
    {
    name: 'Mukti Jindal',
    role: 'Frontend Developer',
    experience: '5+ years',
    skills: ['Bootstrap', 'CSS3', 'HTML5'],
    imgUrl: 'images/team/avatar.svg',
  },
  {
    name: 'Anupam',
    role: 'Lead Frontend Developer',
    experience: '5+ years',
    skills: ['Tailwind CSS', 'HTML5', 'Bootstrap'],
     imgUrl: 'images/team/avatar.svg',
  },
  {
    name: 'Ashish Sharma',
    role: 'Lead Backend Developer',
    experience: '5+ years',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS'],
    imgUrl: 'images/team/avatar.svg',
  },
    {
    name: 'Abdul Azeem',
    role: 'Lead Backend Developer',
    experience: '5+ years',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS'],
    imgUrl: 'images/team/avatar.svg',
  },
    {
    name: 'Ankit',
    role: 'Full Stack Developer Intern',
    experience: '5+ years',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS'],
    imgUrl: 'images/team/avatar.svg',
  },
];



export default function OurTeamComponent() {
  return (
    <div>
     <Banners
          image={BannerImage1}
          overlayImage
          heading="The Minds Behind the Success"
          description="At DevNexus Solutios our strength is in our team of experts. We are a passionate team of developers, designers, market strategies and digital marketers who are thrive on all challenges with creative thinking."
        />
    <main className="min-h-screen flex flex-col my-10 gap-12 items-center justify-center bg-gray-50">
   <DeveloperCarousel developers={FrontendData} title="Frontend Developers" cardsToShow={3} />
   <DeveloperCarousel developers={devData} title="Backend Developers" cardsToShow={3} />
   <DeveloperCarousel developers={CMSData} title="CMS Developers" cardsToShow={3} />
   <DeveloperCarousel developers={DesignerData} title="CMS Developers" cardsToShow={3} />

   <DeveloperCarousel developers={ManagementData} title="CMS Developers" cardsToShow={3} />


    </main>
    </div>

  );
}
