import escapeRoomPoster from "../assets/posters/escape-room.jpeg";
import wordwarPoster from "../assets/posters/wordwar.jpeg";
import potpourriPoster from "../assets/posters/pot-pourri.jpeg";

export const technicalEvents = [
  {
    id: "ui-ux",
    title: "UI VISION",
    shortDescription: "UI VISION is a UI/UX design competition that tests creativity, observation, and design skills.",
    fullDescription: ["UI VISION is a UI/UX design competition that tests creativity, observation, and design skills. ",
      "The event consists of two exciting rounds designed to challenge participants. ",
      "In Round 1, teams solve a UI jigsaw puzzle in the shortest possible time. ",
      "In Round 2, teams recreate and improve a given user interface using AI design tools. ",
      "Participants are encouraged to enhance the design while maintaining its functionality. ",
      "The event provides hands-on experience in modern UI/UX design and promotes innovation, teamwork, and problem-solving. "
    ],

    rules: [
      "Each team must have 2 participants. ",
      "Participants must complete both rounds within the given time limit. ",
      "Only the AI UI design tools approved by the organizers can be used",
      "Copying designs, using pre-made templates, or any unfair practice is not allowed. ",
      "Taking photos or recording videos of the sample UI displayed on the screen is strictly prohibited. Any team found doing so will be immediately disqualified.",
      "The judge's decision will be final and binding for all participants."
    ],
    date: "July 30, 2026",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfBI_CgmFXQwUpWuXJKVdlkcftWpCiE8GsVPMppCfV4rtUSvw/viewform?usp=header",
    poster: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "escape-room",
    title: "QRX - ESCAPE CHALLENGE",
    shortDescription: "Solve puzzles, uncover clues through QR codes, and race against time to escape.",
    fullDescription: ["The theme of this event is inspired by The Titanic. ",
      "Participants step aboard the mighty ship when time comes to a standstill. ",
      "A mysterious time keeper is revealed , who gives the three member team a chance to save Jack by navigating through a maze of QR codes and interconnected clues and puzzles. ",
      "Bring your imagination, confidence, and charisma—because this is your chance to stand out and steal the spotlight!"
    ]
    ,
    rules: [
      "Each team must consist of 3 players.",
      "Every team will have 20 minutes to complete the challenge and escape the room.",
      "Listen carefully to the instructions before the game begins. No additional explanations will be given later.",
      "Stay within the designated play area at all times.",
      "Clues may be hidden anywhere, but you will never need to dismantle, damage, or force open any fixtures or props.",
      "Only one mobile phone is permitted per team during the game.",
      "If your team gets stuck, you may request a Clue Card. For every Clue Card used, one team member will no longer be allowed to participate.",
      "Treat all props with care. Any damage to game materials or violation of the rules will result in immediate disqualification."

    ],
    date: "July 30, 2026 ",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdtu2YzqdD3iEqvW9-z2C3ga8Z95H1YNsS7OlCvF9-SEt92_Q/viewform?usp=header",
    poster: escapeRoomPoster,
  }
];

export const nonTechnicalEvents = [
  {
    id: "pot-pourri",
    title: "Pot Pourri",
    shortDescription: "A mix of literary games, quizzes, and surprise challenges.",
    fullDescription: "A fun and entertaining game which consists of a variety of mini games! Teams of 2 face off against other teams through continuous elimination by playing mini games like memory and more! Join us in participating in potpourri to have a fun filled entertainment while challenging your vocabulary!.",
    rules: [
      "Each team must consist of *2 participants",
      "All team members must participate in every round of the event.",
      "The use of *mobile phones, internet access, or any external assistance* during the event is strictly prohibited.",
      "Participants must follow the instructions given by the event coordinators and moderators.",
      "Any form of *misconduct, inappropriate language, cheating, or unfair practices* will lead to disqualification.",
      "The event follows a *continuous elimination format*, and only qualifying teams will advance to the next round."
    ],
    date: "July 30, 2026 ",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdqvpTl0nVWsbSCXSCMS2KbM60k2mKBnllh_LyUHt0XMoaKNQ/viewform?usp=header",
    poster: potpourriPoster,
  },
  {
    id: "ship-wreck",
    title: "WORD WAR",
    shortDescription: "Defend your chosen character and convince everyone why it deserves to survive.",
    fullDescription: "Think you've got the wit to outsmart the room? Step into an exciting two-round challenge where creativity meets quick thinking! Start with Spin a Yarn, where you'll weave captivating stories from the most unexpected prompts. Then face the ultimate Shipwreck showdown, where only the most convincing arguments will earn you a place on the lifeboat. Bring your imagination, confidence, and charisma—because this is your chance to stand out and steal the spotlight!",
    rules: [
      "The event consists of two rounds: Spin a Yarn followed by Shipwreck. Only participants qualifying in Round 1 will advance to Round 2.",
      "Participants must report on time. Late entries will not be permitted once the event begins",
      "In Spin a Yarn, participants must create an original story based on the given prompt within the allotted time.",
      "In Shipwreck, participants must stay in character and convincingly justify why they deserve to survive the shipwreck scenario.",
      "The use of offensive, vulgar, discriminatory, or plagiarized content is strictly prohibited and may lead to disqualification.",
      "The judges' decision will be final and binding. Participants are expected to maintain discipline and sportsmanlike conduct throughout the event."
    ],
    date: "July 30, 2026 ",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfPWo9c3c2qc7E-K7fExphuGHvw2imznYRsBRau71lLrrtfxg/viewform?usp=header",
    poster: wordwarPoster,
  }
];
