import footprintImg from '../assets/projects/footprint.png';
import footprintDetailsImg from '../assets/projects/footprint-details.png';
import spoonacularImg from '../assets/projects/spoonacular.png';
import spoonacularDetailsImg from '../assets/projects/spoonacular-details.png';
import maptyImg from '../assets/projects/mapty.png';
import maptyDetailsImg from '../assets/projects/mapty-details.png';
import lifeQualityImg from '../assets/projects/life-quality.png';
import lifeQualityDetailsImg from '../assets/projects/life-quality-details.png';
import cryptoImg from '../assets/projects/crypto.png';
import portfolioImg from '../assets/projects/old-portfolio.png';
import portfolioDetailsImg from '../assets/projects/old-portfolio-details.png';
export const projectsData = [
  {
    id: 1,
    title: 'Flight Footprint',
    img: footprintImg,
    imgDetails: footprintDetailsImg,
    technologies: ['React JS', 'Redux Toolkit', 'React Router', 'Tailwind Css'],
    description:
      'Flight Footprint is a website developed with the idea of making users aware of the pollution produced by air travel, inside we can find a section where we can calculate the CO2 emissions produced by a flight by entering data such as: departure airport, destination airport, number of passengers and class of flight. I chose to work on this project because I enjoy traveling and I am very close to environmental sustainability issues. I hope that tomorrow most people will be aware of the damage we are generating to our planet and consequently to ourselves.',
    demoLink: 'https://flightfootprint.netlify.app/',
    githubLink: 'https://github.com/MrRobot-fm/Flight-footprint'
  },
  {
    id: 2,
    title: 'Spoonacular App',
    img: spoonacularImg,
    imgDetails: spoonacularDetailsImg,
    technologies: ['React JS', 'Context API', 'React Router', 'Tailwind Css'],
    description:
      'Spoonacular is a web app dedicated to the vegetarian world. It allows us to search for recipes and ingredients and make our meals more conscious and delicious.',
    demoLink: 'https://spoonacular-fm.netlify.app/',
    githubLink: 'https://github.com/MrRobot-fm/Spoonacular'
  },
  {
    id: 3,
    title: 'Mapty App',
    img: maptyImg,
    imgDetails: maptyDetailsImg,
    technologies: ['Javascript'],
    description:
      'In this app, you can log your running or cycling workouts with location, distance, time, pace, and steps/minute. You can also see all your workouts at a glance and on a map. I developed this project following a Udemy tutorial, and I implemented some features like: sort by property, remove: workout/workouts, modal window, overview and set view.',
    demoLink: 'https://mapty-project-js.netlify.app/',
    githubLink: 'https://github.com/MrRobot-fm/Mapty'
  },
  {
    id: 4,
    title: 'Crypto App',
    img: cryptoImg,
    imgDetails: cryptoImg,
    technologies: ['React'],
    description:
      'In crypto app was developed with the aim of searching for the cryptocurrencies of interest and displaying information such as: currency icon, name, price and a small graph on the weekly trend. The project is for demonstration purposes and is not a complete web page.',
    demoLink: 'https://crypto-app-fm.netlify.app/',
    githubLink: 'https://github.com/MrRobot-fm/Crypto-App'
  },
  {
    id: 5,
    title: 'Life Quality App',
    img: lifeQualityImg,
    imgDetails: lifeQualityDetailsImg,
    technologies: ['Javascript', 'Htl', 'Css'],
    description:
      'Life quality app is a project that allows users to view information about the quality of life in various cities, in paricular they can type in the searchbar the name of the city they want and find info such as a general description and scores in the various categories assigned to the city: cost of living, economy, education, environmental quality and many other categories.',
    demoLink: 'https://lifequalityapp.netlify.app/',
    githubLink: 'https://github.com/MrRobot-fm/Life-quality-app'
  },
  {
    id: 6,
    title: 'Old Portfolio',
    img: portfolioImg,
    imgDetails: portfolioDetailsImg,
    technologies: ['Javascript', 'Html', 'Css'],
    description:
      'I decided to include my old portfolio to show that over time, through study and practice, I have had improvements on both the style part and the functionality part.',
    demoLink: 'https://federicomigliore-portfolio.netlify.app/',
    githubLink: 'https://github.com/MrRobot-fm/Old-Portolio'
  }
];
