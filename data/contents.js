import { v4 as uuidv4 } from "uuid";

const bannerDiv = [
  {
    title: "Our Own \nSpace For Creatives.",
    link: "/marketplace",
    linkText: "Learn More",
    imageURL: "/images/Panthart-NM.svg",
  },
  {
    title: "Be Part Of The Agency \nBy Working With Us.",
    link: "/workwithus",
    linkText: "Talk to Us",
    imageURL: "/images/Panthart-Careers.svg",
  },
];

const aboutTitleAndDes = [
  {
    id: uuidv4(),
    title: "Founding Story Of Panthart.",
    italic: "By Chukwudubem Osegbe",
    desOne:
      "In all started in the boom of the NFT space. I wanted a platform where African artiste can showcase their art and crafts and also sell them as as NFT, with the knowing that our culture and art is very rich and vast. Afer creators were not well represented as only but a few creatives were privilaged. There is also a fact that so many people do not and still don't understand the concept of NFTs and how to navigate through it. That was when the idea of Panthart was born.",
    desTwo:
      "I was basically looking for a name to call this new brand and I needed it to at least relate to our culture. For one reason or the other Black Panther came to the mind, but I could obviously not use that as the name for this new brand. Long story short, I ended up combining the words 'Panther', and 'Art', to get Panthart. There could be more besides just showcasing our art and artist, we can start to showcase or our fashion, our tech, and other areas of our lives. Now we are complete agency and pioneers ready to take NFTs to the next level. So here we are today, taking one step at a time.",
    link: "/roadmap",
    linkText: "View Our Roadmap",
  },
  {
    id: uuidv4(),
    title: "Achieving Same Goal.",
    italic: "One Big Community",
    desOne:
      "Panthart is a big project. Moving forward, we will comprise of different teams that will be handle different segments simultaneously to achieve a common goal.",
    desTwo:
      "We aim to work only with those who are determined and passionate about the Panthart project.",
    link: "/workwithus",
    linkText: "Work With Us",
  },
];

const tAndSum = [
  {
    id: uuidv4(),
    title: "The 500 of 5500 | The Senior Comrades.",
    desOne:
      "To be our angel investor, you will have to purchase at least one of the NFT in the Non-Fungible Comrades collection, 500 of 5500. On the release of The 500 collection, 470 of the 500 will be available on auction starting with a price of 0.385ETH. Just for the sake of clarity, the remaining 30 is reserved for the Panthart Team, and would be used for rewards or further options.",
    desTwo:
      "Buying into this collection, makes you a Senior Comrade. You get all benefits from the 5000 of 5500 collection and more. There is also no limit to the amount of Senior Comrades per wallet. Senior comrades can still own a regular Comrade regardless. There is no limit for Senior Comrades. They are the Seniors.",
    link: "http://nfcomrades.com",
    linkText: "Become A Comrade",
  },
  {
    id: uuidv4(),
    title: "10% Of Panthart As A Company.",
    desOne:
      "We are the first project to do this. Moving forward towards the growth of Panthart, Our Senior Comrades (Angel Investors) collectively own 10% of Panthart.",
    desTwo:
      "Just as a regular company operates, at the end of every business year, Senior Comrades gets their own allocation. We know that these NFT can be sold to a new user. Selling your senior comrade means selling your own share to the new owner. This a a very interesting utility we are giving the Senior Comrades.",
    link: "http://nfcomrades.com",
    linkText: "Become A Comrade",
  },
  {
    id: uuidv4(),
    title: "Exclusive Access To Airdrops And Rewards.",
    desOne:
      "As we progress and hit our targets on the roadmap, there will be exclusive airdrops for our Comrades and also an additional flex in particular for our Angel Investors. This means that Angel Investors (Senior Comrades), gets more portion of sweetness than a regular Comrade in all our airdrops and rewards.",
    desTwo: "",
    link: "http://nfcomrades.com",
    linkText: "Become A Comrade",
  },
];

const aferDetails = [
  {
    id: uuidv4(),
    title: "No Gas Fees.",
    desOne:
      "We want a stress free blockchain. A blockchain that will not come and be stressing us with plenty gas fees like that of our senior brother, Ethereum. In fact, we don't want gas fees again. Whenever you are carrying out a transaction, our blockchain itself would handle the gas fees for every single transaction. This will enable users to carry out their regular transactions with ease without having to worry about gas fees anymore.",
    desTwo:
      "From time to time we will be having private spaces with comrades and then for the public we would be releasing videos on our YouTube channel to converse more on the Afer Blockchain project.",
  },
  {
    id: uuidv4(),
    title: "A Semi Regulated Blockchain.",
    desOne:
      "Blockchain is not fully for the function of decentralization. Blockchain can still be incorporated and inculcated into the technology and applications we use now for various reasons including security, and faster transaction. ",
    desTwo:
      "We need a blockchain that is favorable to both the government and the people. There will be regulations where needed, like in the health and finance sector. Users will also be able to pay their taxes as they carry out their various transactions.",
  },
  {
    id: uuidv4(),
    title: "Blockchain For Various Industries.",
    desOne:
      "An optimized blockchain for specific needs in various industries. In Health, Finance, Logistics, Commerce, Entertainment and a usual there will be more improvement in this technology as time unfolds.",
    desTwo: " ",
  },
  {
    id: uuidv4(),
    title: "Smarter Contracts.",
    desOne:
      "A blockchain with contracts that would be able to handle various aspects  and logic simultaneously and smoothly in all aspects, not excluding security and authentication.",
    desTwo: " ",
  },
];

const marketPlaceDetails = [
  {
    id: uuidv4(),
    title: "The Exchange And Loan Feature.",
    desOne:
      "New features will be implemented on our marketplace smart contract. The Exchange and Loan feature. Users can be able to exchange their NFTS instead of trading, more like trade by barter, and this will be supervised by our smart contract which stands as an escrow.",
    desTwo:
      "Users will be able to loan out their NFTs, for an agreed fee or for an agreed collateral, that more likely worth more than the NFT to be loaned for security reasons. After all its a loan, and all loan should be paid back. ",
  },
  {
    id: uuidv4(),
    title: "Comrades Own The Marketplace.",
    desOne:
      "All holder of Non-Fungible Comrades, are collective owners of the platform. Profits generated from the platform its been split among comrades on a certain percentage. Regardless, there is allocation for the upkeep and maintenance of the platform.",
    desTwo: " ",
  },
  {
    id: uuidv4(),
    title: "The Cashout Option.",
    desOne:
      "We will put out a new feature to the test. It is called the cashout option. The idea behind the cashout feature is that: when an NFT is purchased and then due to time limit or emergency of any kind, a user is not able to trade their NFT, they can opt for the cashout option.",
    desTwo:
      "The Cashout option will automatically convert the NFT to a fungible value, that is (From ERC-721 to ERC-20), but for a fee and will worth also worth less than the actual value of the NFT so as to ensure that the feature is not misused. The NFT in return automatically belongs to the Panthart, and will be either reserved or put up for auction to be traded again by another user.",
  },
];

const lifestyleDetails = [
  {
    id: uuidv4(),
    title: "What We Wear.",
    desOne:
      "Comrades can brand any of their clothing with the comrade brand or their personal comrade NFT. We will always have already made outfits ready to buy and wear up for sale for the general public.",
    desTwo:
      "Most of our clothing materials will be sourced within us as to also promote our handwork. This means that we will be working with Fashion designers, Tailors, Models and Manufactures.",
  },
  {
    id: uuidv4(),
    title: "We Love our Creators And Influencers.",
    desOne:
      "Much love to our public figures; Musicians, Comedians, Actors, Influencers who represent us on the global stage. We support in whatever that they are doing, be it Content creation, YouTube, Music, Podcast, Film, Music, and other forms of entertainment.",
    desTwo: " ",
  },
  {
    id: uuidv4(),
    title: "Job Creation And Side Hustle.",
    desOne:
      "There will be a lot of hands on deck to bringing out of fashion and lifestyle. As already mentioned above, there are other more skillful areas we did work with to achieving this. ",
    desTwo:
      "It will be about creation of jobs opportunities for our people and another source of income for people too.",
  },
];

const vawulEnt = [
  {
    id: uuidv4(),
    title: "Cartoons And Anime.",
    desOne:
      "The Cartoon and Anime industry in Afer is not yet pronounced but yet very promising. The ample talents and skills can be seen already with some of our creatives and their works. We need more of our own Cartoons, Anime and CGI.",
    desTwo:
      "More work will be put in action, to gather talents and this field, provide them with the all the tools needed for them to start creating something that they are passionate about. Patiently, we will grow to the top.",
  },
  {
    id: uuidv4(),
    title: "Content Creation.",
    desOne:
      "Content Creation has taken another level already in Afer.  As the world becomes more digital and less physical, we will be creating even more content for daily consumption.",
    desTwo:
      "Blog articles, YouTube Vlog, Videos and so on. All form of content to keep you entertained.",
  },
  {
    id: uuidv4(),
    title: "Film And Photography.",
    desOne:
      "We will also be contributing more to the film and photography industry moving forward. Pushing our film and photography contents further to the top is a goal.",
    desTwo:
      "We can only do this ourselves, we have the skill and talent to achieve this and even more.",
  },
  {
    id: uuidv4(),
    title: "Music And Movies.",
    desOne:
      "Afer beats is the new sound,  and it is only the beginning of what we can create with music. VawulEnt houses a movie studio too. Moving forward, we will also delve mainstream into Music and Movie production.",
    desTwo: " ",
  },
];

const faqS = [
  {
    question: "What is the roadmap execution plan?",
    answer:
      "Our roadmap as seen on the roadmap page is going to be executed in order accordingly, and will also be announced across on our social media pages for the public to easily follow through.",
  },
  {
    question: "Benefits of being an Angel Investor.",
    answer:
      "Our Angel Investors AKA Senior Comrades, are the main funders of the Panthart project together with the Comrades. Angel investors gets more perks in the long run. More information on this on the 'Angel Investors' page. ",
  },
  {
    question: "Will Panthart be a registered company?",
    answer: "Yes! it's in our roadmap to get Panthart registered as a company.",
  },
  {
    question: "Why is the mint price for the comrades cheap?",
    answer:
      "This is to enable everyone possible, who is passionate about the project, to join in. The mint price is 0.05ETH",
  },
  {
    question: "When will the Afer Blockchain project Kickoff?",
    answer:
      "Afer Blockchain is not in our immediate plans, as there are a lot of complexities and technicalities associated with building a native blockchain from the scratch. There is no rush. More and extensive research needs to be done to ensure we deliver the best possible blockchain possible as described on the Afer blockchain page. There will be updates moving forward the Afer blockchain project.",
  },
  {
    question: "Is Panthart different from Non-Fungible Comrades?",
    answer:
      "Non-Fungible Comrades is a NFT project and Community under the Panthart. Panthart is a parent company to other projects besides the non-fungible comrades like the Afer blockchain, NFT marketplace and more Made in Afer products.",
  },
];

const roadMap = [
  {
    plan: "Gather The Comrades",
    details:
      "This is the beginning of our project. At this point, we setup our various social mediums, create awareness and announce to the universe that the comrades are coming. A Pre-Mint competition will be held for the public and the selected winners will be awarded after all comrades have been minted. More details on this competition will be announced on our social media.",
    isDone: false,
  },
  {
    plan: "Mint The Comrades (5000 Collection)",
    details:
      "There is a total of 5,500 Comrades. 5,000 Comrades will be released to the public for minting as a collection. Angel Investors and team members can optionally participate in the public mint, but do not need to, as the remaining 500 Comrades are reserved for them. More details about angel investors can be found on the Angel Investors Page.",
    isDone: false,
  },
  {
    plan: "Mint The Comrades (500 Collection)",
    details:
      " Half way to the sellout of The 5000 Collection, The 500 Collection will be released, and will be available to the public for angel investment, with an allocation of Senior Comrades reserved for the Panthart team.",
    isDone: false,
  },
  {
    plan: "Registration And Trademark",
    details:
      "Our Vision is to be the largest conglomorate of Made In Afer (Africa) Products. Both Physical and Digital Products. We need to be legally recognised as a business. Details of our regitration will be shared across to the comradres, as they are shareholders of Panthart, and also announced across our various Social Media." +
      " Panthart will be resgitered as a Parent company of all our other projects and service.",
    isDone: false,
  },
  {
    plan: "Brand Elements For Panthart And Comrades",
    details:
      "Our brand elements will be released. This is to aid correct use and representation of Panthart and all her sub-projects including the Non-Fungible Comrades. Comrades will love to use our branding for their merch and various business. Panthart will aid in this course.",
    isDone: false,
  },
  {
    plan: "Our Creators Economy - VawulEnt",
    details:
      "This is the beginning of Project VawulEnt. At this point we begin to create contents for the public. this includes Youtube Channel, Tiktok, Shorts (Short videos), Articles, and lots more. All this to entertain and educate the public. We also show support to existing black creators at this stage.",
    isDone: false,
  },
  {
    plan: "7 Days On BlockChain, Sessions With Comrades",
    details:
      "This task is divided into two sections. The first being for the public, including comrades and non-comrades. There are a large number of the public who have little or no idea of what blockchain is all about or how to navigate themselves around NFT. We will help with all resources we can to bring the public to an understanding, through our various social media like Twitter space and threads, discord, medium articles." +
      " The second Section is exclusive to the holders of Non-Fungible Comrades. More attention and care will be provided to them to answer all their questions and at this point, we will be sharing information about our current and future plans moving forward in our project.",
    isDone: false,
  },
  {
    plan: "Release Our Merch",
    details:
      "Lol! We were never going to skip this stage. This is start of our lifestyle's project. Comrades can request that their comrades be custom printed on their merch. The public too can order from our already made merchandise. We want to assure you that our packaging will be unique and mad!!! Kindly note that delivery fee applies especially if you are outside Nigeria, and want your package delivered to you. You can also request that we send the digital elements needed so that you easily produce an output in your location.",
    isDone: false,
  },
  {
    plan: "Our First NFT Africa Event",
    details:
      "Synonymous To NFT NYC (New York), We will plan and host annual event for players in the nft space in Africa. Let's converse on NFTs, share innovative ideas, Network, and also educate ourselves more on blockchain technology, and NFT. " +
      "The first official event for NFT Africa will take place in Nigeria, and subsequently, other African Countries. We will be open to collaborations and more sponsors to support Panthart prior to the date for this event.",
    isDone: false,
  },
  {
    plan: "Award The Winners Of The Competitions",
    details:
      "We announce the winners of the competiton on our social media, with their respective prices. This part of the roadmap is recurring and does not affect the occurence of any other step in the roadmap.",
    isDone: false,
  },
];

export default bannerDiv;
export {
  aboutTitleAndDes,
  tAndSum,
  aferDetails,
  marketPlaceDetails,
  lifestyleDetails,
  vawulEnt,
  faqS,
  roadMap,
};
