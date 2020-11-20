import nicePic from './img/about-me-pic.jpg';
import pythonLogo from './img/python-logo.svg';
import html5Logo from './img/html5-logo.svg';
import css3Logo from './img/css3-logo.svg';
import jsLogo from './img/js-logo.svg';
import reactLogo from './img/react-logo.svg';
import gitLogo from './img/git-logo.svg';
import facebookLogo from './img/facebook-logo.svg';
import gmailLogo from './img/gmail-logo.svg';
import githubLogo from './img/github-logo.svg';
import shootEmAliens from './img/shoot-em-aliens.JPG';
import passwordChecker from './img/password-checker.JPG';


const aboutMePic = nicePic;

const skills = [
    {
        techName: 'Python',
        logo: pythonLogo,
    },
    {
        techName: 'HTML5',
        logo: html5Logo,
    },
    {
        techName: 'CSS3',
        logo: css3Logo,
    },
    {
        techName: 'Javascript',
        logo: jsLogo
    },
    {
        techName: 'React JS',
        logo: reactLogo,
    },
    {
        techName: 'Git (VCS)',
        logo: gitLogo,
    },
];

const projects = [
    {
        projName: "Shoot 'Em Aliens",
        photo: shootEmAliens,
        description: "A classic alien-shooting game. The speed of aliens increases after a fleet is destroyed. The player is able to track the high score and has three lives before the game is over. The game is made using Python and Pygame package. By doing this, I was able to practice the OOP concept.\n",
        repo: "https://github.com/vidalvi/ShootEmAliens",
    },
    {
        projName: "Password Checker",
        photo: passwordChecker,
        description: "A python script to identify locally if a password has occured in the data set of previous data breaches. The inputted password is hashed using SHA-1 and the program sends a request to haveibeenpwned.com API with the first 5 characters of the generated SHA-1 password. The API then sends a response of all the passwords with the same first 5 characters of SHA-1 generated password and the number of times it occured in the data.\n",
        repo: "https://github.com/vidalvi/password-checker",
    },
];

const contactLogos = [
    {
        medium: 'Facebook',
        logo: facebookLogo,
        link: 'https://facebook.com/adrianvidal.09/',
    },
    {
        medium: 'Gmail',
        logo: gmailLogo,
        link: 'mailto:vidalvi.dev@gmail.com',
    },
    {
        medium: 'Github',
        logo: githubLogo,
        link: 'https://github.com/vidalvi',
    },
]

export { aboutMePic, skills, projects, contactLogos };
