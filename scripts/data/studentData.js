const students = [
  {
    firstName: "Joel",
    lastName: "Dick",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=1OGE3c_cyZrVncOM8qUvUJeSU4Ja7jLmM",
    githubURL: "https://github.com/guacajoely",
    photoURL: "",
    linkedInURL: "https://www.linkedin.com/in/joeldick2",
    serverSideCapstoneURL: "https://www.loom.com/share/dd37a1aabd2b4c9e94be5783ba9c17c4?sid=80282e2f-7e3d-45f6-b740-67a95fb129e5",
    frontEndCapstoneURL: "https://www.loom.com/share/a129dd4227314fa39a7762d1dfcb3b88?sid=ca0bbc18-6c30-4cfc-a04b-bcbc611098fa",
    interests:"If possible, I think I'm ready to tackle full-stack development. I prefer back-end slightly just because data driven code comes to me more naturally, but one of the things that excites me the most about coding is the idea of building an entire app by myself.",
    autobiography: "",
    commonPhrases:"Oh my gosh... it was the semicolon.",
    lookingFor:"A supportive environment including people that approach challenges with enthusiasm rather than negativity.",
    looking: true,
  },
  {
    firstName: "Spencer",
    lastName: "Lott",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=1soJL-O4pL5TZws4AFBa2vj1cVz0a-4W6",
    githubURL: "https://github.com/spencer-lott",
    photoURL: "",
    linkedInURL: "https://www.linkedin.com/in/spencer-lott-524558180/",
    serverSideCapstoneURL: "https://www.loom.com/share/0c9bc0b8eae34a289396a8812156d659?sid=12d0a96a-e8aa-4089-8cca-cecc1a0fc7c9",
    frontEndCapstoneURL: "https://www.loom.com/share/d6b6538ba21e4586ac70f2272b0329c3?sid=e28ae197-ebfe-4708-98eb-3bbd26a1eae6",
    interests:"React! SQL! C#! Finding and squashing those bugs is one of my favorite parts of development. In the future I'd like to see myself help train others and encourage them to succeed. I'm open to all fields of development and eager to learn another coding language or master one that I am familiar with.",
    autobiography: "",
    commonPhrases:"What else could make this better?",
    lookingFor:"A good team ",
    looking: true,
  },
  {
    firstName: "Nicholas",
    lastName: "Myers",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=1RVsR1f_H0fxfVVW8r1O5zYb65f7Qpzay",
    githubURL: "https://github.com/Nic338",
    photoURL: "",
    linkedInURL: "https://www.linkedin.com/in/nic-myers/",
    serverSideCapstoneURL: "https://www.loom.com/share/8acff85e9d1c4f499b5e5b1ff88f04e3?sid=8c4ab4fa-25c1-4af2-97d6-b1b636f22fae",
    frontEndCapstoneURL: "https://www.loom.com/share/137a90894537481bb3b8523674bd058b?sid=2be6893d-2e02-459f-9bd8-b89ef3e1ff3a",
    interests: "My hobbies include video games and telling stories with my friends through table top role playing games such as dungeons and dragons. I really enjoy puzzles and brain teasers. Anything that requires some out of the box thinking is really satisfying to me to tackle.",
    autobiography: "",
    commonPhrases:"I tend to try to ask myself where have I seen this before? I try to compare the problems I have when coding with similar issues or hurdles I've had in the past, and refer back to that code to come up with a solution. Aside from that, I'm usually trying to figure out where I left out a curly bracket. ",
    lookingFor:"I'm looking for a position that will help me learn and grow as a developer and that facilitates a healthy team work environment ",
    looking: true,
  },
  {
    firstName: "James",
    lastName: "Brooks",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=1DYg8taNx9EcRfhQ64E6xwnFbITFIk2bZ",
    githubURL: "https://github.com/JamesB0907",
    photoURL: "",
    linkedInURL: "www.linkedin.com/in/ jameskebrooks",
    serverSideCapstoneURL: "https://www.loom.com/share/e8e5540329c64fc3902fb8d726057b57?sid=a0c1c9c4-d840-4143-b303-4db633b600b0",
    frontEndCapstoneURL: "https://www.loom.com/share/2e55c4dddc054ac1870584088c8f14b8?sid=f7c570ba-57db-41b3-af25-ad6015fa4b90",
    interests: "I really enjoy and want explore more strongly-typed languages like C#, but I would also love to learn as many programming languages as possible (particularly Python, Java, C++ to start). I especially like the idea of working cloud-based services, databases or working for an ISP.  I'm also interested in software and would like to soon hone my skills enough to be able to develop software or program hardware. I enjoy tinkering with computer parts and testing out different builds. I love playing video games (especially old school adventure games and RPGs) and tabletop games, but I also love to read books. I also love being a father and being goofy with my two kids! I'm a avid homebrewer and craft beer enthusiast.",
    autobiography: "",
    commonPhrases:"First, second, third. I repeat my steps over and over to myself, so I don't leave anything out.",
    lookingFor:"A supportive learning environment. I'd like a job that allows me to flex my natural curiosity and continually presents new challenges while also providing a strong backbone of moral support and leadership.",
    looking: true,
  },
  {
    firstName: "Gloria",
    lastName: "Reina",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=1cmJ9r35_r3ppF00Sh7dQZCxynT0rzFw-",
    githubURL: "https://github.com/GloriaReina",
    photoURL: "",
    linkedInURL: "http://www.linkedin.com/in/gloria-reina",
    serverSideCapstoneURL: "https://www.loom.com/share/1290fbcf074e4f55aaee1b5879264eec?sid=6026c4f3-2bc2-4ffa-a4d1-dbcd7f46348a",
    frontEndCapstoneURL: "https://www.loom.com/share/46d9cb4227f9490fb27b5b339f5fbdba?sid=f4973036-3cfd-43af-90b2-399dba3db7bc",
    interests: "Venturing into the dynamic world of backend development, I'm excited to harness the capabilities of SQL, and nurture skills in data integration, APIs and cloud services.",
    autobiography: "",
    commonPhrases:"Focus! One step at time!",
    lookingFor:"Environments that fosters collaboration, growth, and exploration!",
    looking: true,
  },
  {
    firstName: "Marquise",
    lastName: "Campbell",
    hired: false,
    resumeURL:
      "",
    githubURL: "",
    photoURL: "",
    linkedInURL: "",
    serverSideCapstoneURL: "https://www.loom.com/share/1290fbcf074e4f55aaee1b5879264eec?sid=6026c4f3-2bc2-4ffa-a4d1-dbcd7f46348a",
    frontEndCapstoneURL: "https://www.loom.com/share/46d9cb4227f9490fb27b5b339f5fbdba?sid=f4973036-3cfd-43af-90b2-399dba3db7bc",
    interests: "I really loved working with SQL. Figuring out the right combination to get that data that you wanted felt like a puzzle that I loved to solve. My server side capstone is based on Magic: The gathering and I love finding different ways to win or solve your problem.Truthfully, coding is fun. I'm still very new to it and it does get frustrating, but finally getting to the end game and have everything work like you want it, there's no better feeling. ",
    autobiography: "",
    commonPhrases:"Wow stack overflow is really  life saver. and Oh yeah, it finally works, I feel incredible. ",
    lookingFor:"I want to work in a place with a good team and a good work culture. I'm hoping to learn more about SQL and overall coding in general. Finally getting your code to work is such an amazing feeling. I just want to keep growing my skills. ",
    looking: true,
  },
  {
    firstName: "Kara",
    lastName: "Hall",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=14LH6kd15cebAORnPOcMcZrtKJoaHd08Q",
    githubURL: "https://github.com/karainc",
    photoURL: "",
    linkedInURL: "https://www.linkedin.com/in/kara-hall/",
    serverSideCapstoneURL: "https://www.loom.com/share/19f9c104de4c40c58fc8bccfe4793a5e?sid=92adf3af-ceb3-411c-961f-be6b6e4a8838",
    frontEndCapstoneURL: "https://www.loom.com/share/ba220209721646ce956afc628ba3457c?sid=ca900c0d-953b-43a4-ba87-92715577ccba",
    interests: "I am interested in building on the development and software engineering foundation I have working towards database migration, as well as positions that involve problem solving. I also excel in being a liaison between client and company-I truly enjoy a challenge! I love to learn! I'm interested in learning every day, for the rest of my life, from each and every person I meet.",
    autobiography: "",
    commonPhrases:"...git add, git commit, git push...",
    lookingFor:"One key factor in my search for employment is my search for a career. I'm a quick study and having a platform that is setup to grow and build upon is what really piques my interest. I am looking for a dynamic team with strategy-minded individuals that share in my 'whatever it takes' mentality.",
    looking: true,
  },
  {
    firstName: "Aaron",
    lastName: "Dean",
    hired: false,
    resumeURL:
      "",
    githubURL: "",
    photoURL: "",
    linkedInURL: "",
    serverSideCapstoneURL: "",
    frontEndCapstoneURL: "",
    interests: "",
    autobiography: "",
    commonPhrases:"",
    lookingFor:"",
    looking: true,
  },
  {
    firstName: "Amanda",
    lastName: "Wright",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=1FUX-iNzSxnm9_B-EDnTdG01x51CCT4MH",
    githubURL: "https://github.com/amandakwright1",
    photoURL: "",
    linkedInURL: "https://www.linkedin.com/in/amanda-k-wright/",
    serverSideCapstoneURL: "https://www.loom.com/share/1db26e83e79643de98bd4bb8ebb1c413",
    frontEndCapstoneURL: "https://www.loom.com/share/6dbd1a965f27455a817ed785f6348d08",
    interests: "I really enjoy working with others to accomplish a task. I find joy when I can explain something that someone is struggling with and my explanation finally makes it 'click' for them. To me it is a puzzle to find a way to explain hard concepts to someone in a way that they will understand. Recently I have also found a love for SQL and database manipulation. ",
    autobiography: "",
    commonPhrases:"'YES!' I still get really excited when something works the way it was intended to, especially when I have been working on repairing an error and it is finally fixed!",
    lookingFor:"I am pursuing employment that focuses on creating a healthy learning environment so that employees can build their knowledge to bring more skills to the company. I also value a working environment where teammates can rely on each other when they need help with their part of the project.",
    looking: true,
  },
  {
    firstName: "Arnold",
    lastName: "Rispress",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=1-dLMlSP2rxz38UO5LiYhKmSPjsjepg3l",
    githubURL: "https://github.com/arispress88",
    photoURL: "",
    linkedInURL: "https://www.linkedin.com/in/arnold-rispress/",
    serverSideCapstoneURL: "https://www.loom.com/share/0c9bc0b8eae34a289396a8812156d659?sid=d6029d37-9813-4bb0-b29b-a68912d5081e",
    frontEndCapstoneURL: "https://www.loom.com/share/9b3e2abacc9045d8918dd1d79aecc924?sid=3c55424a-3f9e-42b0-b9ab-10958b4c8226",
    interests: "Pro Wrestling, Football, Music, Star Trek, and Video Games",
    autobiography: "",
    commonPhrases:"",
    lookingFor:"I'd like to join a team where I can learn to become more proficient in the programming languages I already know, as well as have the opportunity to learn new programming languages.",
    looking: true,
  },
  {
    firstName: "Austin",
    lastName: "Davis",
    hired: false,
    resumeURL:
      "",
    githubURL: "",
    photoURL: "",
    linkedInURL: "",
    serverSideCapstoneURL: "",
    frontEndCapstoneURL: "",
    interests: "",
    autobiography: "",
    commonPhrases:"",
    lookingFor:"",
    looking: true,
  },
  {
    firstName: "Bobby",
    lastName: "Hughes",
    hired: false,
    resumeURL:
      "",
    githubURL: "",
    photoURL: "",
    linkedInURL: "",
    serverSideCapstoneURL: "",
    frontEndCapstoneURL: "",
    interests: "",
    autobiography: "",
    commonPhrases:"",
    lookingFor:"",
    looking: true,
  },
  {
    firstName: "Christian",
    lastName: "Moore",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=1VfowrQi0EZn8BtNy4Q6zt_ibHPouJyyx",
    githubURL: "https://github.com/Christianmoore672",
    photoURL: "",
    linkedInURL: "http://www.linkedin.com/in/christian-a-moore",
    serverSideCapstoneURL: "https://www.loom.com/share/8079d7a51ec64c419dbb59e300586b30?sid=0df16001-e0b1-4030-b1b3-cd4cc6a908e8",
    frontEndCapstoneURL: "https://www.loom.com/share/dc562552fdfe4af0b08b7b06b821af20?sid=3199a111-98b5-4897-bae7-f31521416251",
    interests: "I am looking for an entry level software development role that would allow me to grow my skills in a structured environment (mentorship, options for classes/certifications, challenging projects) I see software development as a long term career for myself so I'd like to continue to grow my skills. I'm still learning what's out there but I had a lot of fun with front end and React. I have interests in finance, travel, art, and design outside of work so I believe companies in those fields would be great fits for me as well! ",
    autobiography: "",
    commonPhrases:"Where have I seen this before? ",
    lookingFor:"Options for continued learning Options for continued learning ",
    looking: true,
  },
  {
    firstName: "David",
    lastName: "Profitt",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=1htcuts8t8jLBBT1cJWiE2e5VRFI10Ob6",
    githubURL: "https://github.com/dlprofitt",
    photoURL: "",
    linkedInURL: "http://www.linkedin.com/in/dlprofitt",
    serverSideCapstoneURL: "https://www.loom.com/share/81a83dac50c4493d8e4fde86a2c846e8?sid=232deee0-ca31-4d17-9a39-039c995c3909",
    frontEndCapstoneURL: "",
    interests: "Education and abstract thinking, I relish in philosophical reflections and exploring efficiencies in systems and processes. I also have a love and passion for art, music, sports, and business.",
    autobiography: "",
    commonPhrases:"That's freaking awesome! I'm amazed at the power of technology.",
    lookingFor:"My core principles emphasize fairness, inclusivity, and social impact. I truly aim to leverage technology for community well-being, and I'm looking for a company that shares these values.",
    looking: true,
  },
  {
    firstName: "Gabrielle",
    lastName: "Schyrver",
    hired: false,
    resumeURL:
      "",
    githubURL: "",
    photoURL: "",
    linkedInURL: "",
    serverSideCapstoneURL: "",
    frontEndCapstoneURL: "",
    interests: "",
    autobiography: "",
    commonPhrases:"",
    lookingFor:"",
    looking: true,
  },
  {
    firstName: "Harrison",
    lastName: "Davidson",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=1FiOHdWXMT47t2GIEjpTQtV2fZDAxA1s-",
    githubURL: "https://github.com/HarrisonDavidson",
    photoURL: "",
    linkedInURL: "https://www.linkedin.com/in/harrison-davidson8/",
    serverSideCapstoneURL: "https://www.loom.com/share/46c5e23cf1a344c0be486c79164219b3?sid=b706744f-6e66-4cce-9cff-10e411d84476",
    frontEndCapstoneURL: "https://www.loom.com/share/c2a23df2a6b4457e86621e78e2aae17b?sid=7c0e0af2-0d3c-4df9-8f63-96d87db85218",
    interests: "I love a good puzzle or a problem to solve. I don't know how to live without having something to think about. Coding has really grabbed my focus because it is a constant flow of new challenges. This means most of my hobbies come with problem solving as part of the process. I like to write fiction because plot design can be like trying to get pieces of characters' lives to fall in place. I also enjoy running tabletop role-playing games like Dungeons & Dragons because it gives me a chance to design puzzles for my players.",
    autobiography: "",
    commonPhrases:"ERROR? What do you mean cannot... oh, wait...duh. That makes sense.",
    lookingFor:"I am looking for a team with positive attitudes and a real passion for improving. I know that maybe sounds generic, but I would really like coding to be more than my 9-5. I hope to meet some people who would want to form study groups, and possibly travel to programming conventions.",
    looking: true,
  },
  {
    firstName: "Jodi",
    lastName: "Fogle",
    hired: false,
    resumeURL:
      "",
    githubURL: "",
    photoURL: "",
    linkedInURL: "",
    serverSideCapstoneURL: "",
    frontEndCapstoneURL: "",
    interests: "",
    autobiography: "",
    commonPhrases:"",
    lookingFor:"",
    looking: true,
  },
  {
    firstName: "Jonathan",
    lastName: "Sheets",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=1ghkqu-LzZodZaCSIc5cC6mnHxkw-ui8f",
    githubURL: "https://github.com/JohnSheets",
    photoURL: "",
    linkedInURL: "https://www.linkedin.com/in/jonathan-sheets/",
    serverSideCapstoneURL: "",
    frontEndCapstoneURL: "https://www.loom.com/share/f0ae47c90661441f893d3d03b55cc2b7",
    interests: "",
    autobiography: "",
    commonPhrases:"Oh look, another typo that makes the whole app break.",
    lookingFor:"A few things I'm looking for  in a job are a good work environment and a company that cares about  continuing education. Continued education is important to me because I want to feel that I am always moving forward with my skills and learning new things. ",
    looking: true,
  },
  {
    firstName: "Kathleen",
    lastName: "Tyner",
    hired: true,
    resumeURL:
      "",
    githubURL: "",
    photoURL: "",
    linkedInURL: "",
    serverSideCapstoneURL: "",
    frontEndCapstoneURL: "",
    interests: "",
    autobiography: "",
    commonPhrases:"",
    lookingFor:"",
    looking: true,
  },
  {
    firstName: "Kiersten",
    lastName: "White",
    hired: false,
    resumeURL:
      "https://drive.google.com/open?id=164TD0bE3KaeRV33-dCnOCYC9oBauy6sE",
    githubURL: "https://github.com/KierstenWhite",
    photoURL: "",
    linkedInURL: "http://www.linkedin.com/in/kiersten-c-white",
    serverSideCapstoneURL: "https://www.loom.com/share/48a7c952211f48c4b80c02bbc607f84e?sid=74f99510-0a72-4069-94ec-d9b9bb1ac020",
    frontEndCapstoneURL: "https://www.loom.com/share/64f8ee48ead7452bb83ffe6d95ad5883?sid=ec614d5a-ff42-4f31-93b8-65eecd159b70",
    interests: "I am interested in UI and creating applications that are user-friendly and engaging. ",
    autobiography: "",
    commonPhrases:"I just spent 30 minutes looking for a misplaced bracket?!",
    lookingFor:"An environment that allows for creativity and a supportive team and leadership.",
    looking: true,
  },
  {
    firstName: "Timothy",
    lastName: "Clark",
    hired: false,
    resumeURL:
      "",
    githubURL: "",
    photoURL: "",
    linkedInURL: "",
    serverSideCapstoneURL: "",
    frontEndCapstoneURL: "",
    interests: "",
    autobiography: "",
    commonPhrases:"",
    lookingFor:"",
    looking: true,
  },

];

export const getStudents = () =>
  students
    .filter((student) => student.looking)
    .sort((b, a) => a.lastName.localeCompare(b.lastName));
