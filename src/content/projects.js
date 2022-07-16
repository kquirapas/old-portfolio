
const projects = {};

projects["0"] = {
    name: "Github | Solana Philippines",

    month: "July",
    
    day: "16",

    year: "2022",
    
    network: "Solana",

    description: "Solana Philippines is the official Github organization for the Solana Philippines community.",

    role: "Fullstack Solana Developer",

    thumbnail: "/assets/projects/solana-philippines/thumbnail.png",

    content: `# Quick Links

**[Github Organization](https://github.com/solana-philippines)**

[Github Page Deployment](https://solana-philippines.github.io/)

# About 

Solana Philippines is the official Github organization for the Solana Philippines community.

# Vision

A decentralized future where Filipinos are empowered to build and innovate on tools, decentralized applications, or scripts that will help everyone build with Solana.

# Mission

The mission is to open a space of respect and positive collaboration to facilitate the curious pursuit of knowledge in building with Solana. By empowering Filipinos with collaborative development experience we can nurture leading developers with the mindset of learning and problem-solving.
`
}

projects["1"] = {
    name: "Solana Paper Wallet",

    month: "July",
    
    day: "6",

    year: "2022",
    
    network: "Web 3",

    description: "Decoupling Solana from the Keypair Wallet with PDAs",

    role: "Fullstack Solana Developer",

    thumbnail: "/assets/projects/solana-paper-wallet/solana-paper-wallet.png",

    content: `
# Quick Links 

**[Vercel Deployment](https://solana-paper-wallet.vercel.app/)**

**[Youtube Video Demonstration](https://www.youtube.com/watch?v=Q_MpMqxS8U4&t=1s)**

# Problems to Solve with Paper Wallet
- Decouple Solana from Keypair Wallet
- Have something tangible to keep
- Provide the ability to give it to someone without asking them to make a wallet immediately.

# How it Works

![Graphic showing how it works](/assets/projects/solana-paper-wallet/how-it-works.png)


`
}

projects["2"] = {
    name: "Personal Portfolio",

    month: "March",
    
    day: "1",

    year: "2022",
    
    network: "Web 2",

    description: "A responsive personal porfolio project built with React and Styled Components. An overview of what I can achieve with React.",

    role: "Frontend Developer",

    thumbnail: "/assets/meta-image.jpg",

    content: `
# Deployment

[Portfolio [Link]](https://kquirapas.github.io)

# Goals for this Project
- Simple
- Responsive

# Colorscheme

\`\`\`js
  BLUE = "#0C1C2C";
  BROWN = "#AAA294";
  WHITE = "#FFFFFF";
  GREEN = "#5AAB93";
\`\`\`

# Problem #1: How to add content easily?

When I was around 14 years old, the websites I made were all hardcoded. If I wanted to add another page or another section to a page, I had to do it manually by getting down in to the code. This is too much work if I do the same for my portfolio.

In order to solve this I had to think of a way I can easily add content to my personal portfolio without too much work. After searching for a while I stumbled upon: react-markdown.

# react-markdown

React-markdown converts a string into markdown and injects the elements into your html document. I used this to funnel content from a string into react then made beautiful with **styled-components**.

The styling you see now as you read this is actually the output of using *react-markdown with styled-components*.


\`\`\`js
  // Here's a snippet how I styled the 'code' tag
  code {
    max-height: 100vh;
    overflow: auto;
    box-sizing: border-box;
    border: 1px solid \${GREEN};
    border-left: 2vw solid \${GREEN};
    display: block;
    padding: 3vh 1vw;
    margin: 2vh 0;
    font-family: RobotoMono Regular;
    font-size: 20px;
    background-color: \${BLUE};
    color: \${GREEN};

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
\`\`\`

# Problem #2: How to make my portfolio responsive? 

Making a website responsive is fairly easy with react as long as *you don't set a height for any element or at least most elements*. It starts getting complicated once you use a lot of hardcoded values.

I made my portfolio responsive by using simple media queries for 2 of the most common device widths: **768px** and **411px**.

\`\`\`js
  import styled from 'styled-components';

  // A snippet of how it's done
  // with react and styled-components

  const StyledAside = styled.aside\`
    // Initial css rules here

    @media (max-width: 768px) {
      // css rules here
    }

    @media (max-width: 411px) {
      // css rules here
    }
\`;
\`\`\`

Aside from that, you can also hide or display elements with media queries. Here's how I did it for my image on the about page.

\`\`\`
const StyledSection = styled.section\`
  // initial
  #img-left {
    display: none;
  }

  #img-right {
    display: block;
  }

  @media (max-width: 768px) {
    // responsive
    #img-left {
      display: block;
    }

    // responsive
    #img-right {
      display: none;
    }
  }
\`;
\`\`\`


# How it looks

![Image of how it looks on mobile](/assets/projects/portfolio/responsive.png)

# What I learned

It seems that mobile-first approach for frontend development would have made things simpler and easier to maintain my personal portfolio website.

`
}

projects["3"] = {
    name: "Blockplace",

    month: "February",
    
    day: "1",

    year: "2022",
    
    network: "Polygon",

    description: "A decentralized application where you can mint pixels as NFTs. It's a decentralized/blockchain version of r/Place.",

    role: "Fullstack Blockchain Developer",

    thumbnail: "/assets/projects/blockplace/thumbnail.png",

    content: `
# Goals for this Project
- Deploy on Polygon
- Develop Contracts with Test-Driven Development (TDD) 
- Connect contract Backend to Frontend
- Allow user to mint and change color of a Pixel NFT
  
# What is r/Place?

r/Place is the inspiration behind this dapp. If you want to know more check it out in this link: [r/Place Introduction](https://www.reddit.com/r/place/)

# Overview


**Blockplace is a canvas of 1000x1000 Pixel NFTs (1M NFTs)**. The sheer amount of NFTs (pixels) to render into the page is already one of the problems I had to overcome in this build. If you’re interested in knowing more continue reading.

![Close up of Blockplace](/assets/projects/blockplace/closeup.png)

###### A close up screenshot of Blockplace showing what it looks like

# Where is it?

The contracts are deployed in **Polygon's Mumbai Testnet**. It's an MVP hence deploying it to mainnet is not a good idea.

# Problem #1: Rendering Pixel Colors into the Page

I initially tried rendering each pixel in a canvas element one by one with nested for loops. It can be done but it's barely usable for how it freezes the app. It was difficult because I had to go through a lot of documentations and libraries to see what would make it work. I tried **Three.js, Pixel.js, WebGL, P5.js, etc*. WebGL and Pixel.js would have done it but I've stumbled upon an interesting topic: **ImageData**.

# ImageData()

Essentially drawing pixels one by one is tedious and slow. It will take a lifetime before one can mint a Pixel NFT. The solution to this is to leverage ImageData().

*ImageData is an interface that represents the underlying pixel data of a <canvas> element*. It allows you to jump down in the pixels and manipulate it as much as you like. What this allowed me to do is to display an array of 1000x1000 pixels into the canvas **way faster than for loops**.

Let me demonstrate the monstrosity of this canvas with a randomized render of pixels.

![Monsterous Canvas of Pixels](/assets/projects/blockplace/monster.png)

As you can see **that's a lot**. Imagine rendering that into a web page with for loops. You're not getting anything done soon with a canvas of that scale. But with **ImageData**, the performance is **100x better**.

# Problem #2: Blacklist + Whitelist = Greylist?

In the Web 3 space the term **whitelisted** means someone has the privilege to mint an NFT earlier than the others at *presale prices*. This is the list NFT hustlers are fighting to be part of. **Blacklist**, on the other hand, is just a list of addresses that ban a user from transacting with the smart contract.

So what's a **greylist**?

A greylist is the combination of *both a whitelist and a blacklist*. It allows a user to transact with the smart contract, but at the same time preventing them from spamming transactions. Greylist at its core is an anti-spam smart contract that controls the minting rate of users.

**How can this be done?** By using **block.timestamp**.

I won't go deep into the details, but you can check the greylist smart contract code down below.

\`\`\`
  //SPDX-License-Identifier: MIT
  pragma solidity ^0.8.4;

  contract Greylist {
    // address of minter -> timestamp of greylist end
    mapping(address => uint256) public greylistedAddresses;

    function addToGreylist() public {
      // greylist address for 2 seconds
      greylistedAddresses[msg.sender] = block.timestamp + 20 seconds;
    }

    function isGreylisted() public view returns (bool) {
      if (greylistedAddresses[msg.sender] > block.timestamp) {
        return true;
      }
      return false;
    }

    function getGreylistDuration() public view returns (uint256) {
      if (greylistedAddresses[msg.sender] < block.timestamp) {
        return 0;
      }

      return greylistedAddresses[msg.sender] - block.timestamp;
    }
  }
\`\`\`

*The Greylist.sol smart contract is used for mirroring the temporary ban that r/Place does for its users.*


# Problem #2: Smart Contract for Minting

The next problem to address is coding the smart contract to allow people to mint Pixel NFTs with Blockplace. If you're curious how I did that here's a snippet.

**Heads up! It's quite a long piece of code. Here's a summary of what to take notice of:**

- It's an extension of OpenZeppelin's ERC721 standard.
- Greylist contract is inherited from as seen on **line 6**.

\`\`\`
  //SPDX-License-Identifier: MIT
  pragma solidity ^0.8.4;

  import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
  import '@openzeppelin/contracts/access/Ownable.sol';
  import './Greylist.sol';

  contract Place is ERC721Enumerable, Ownable, Greylist {
    struct Color {
      uint8 r;
      uint8 g;
      uint8 b;
    }

    string baseTokenURI;

    uint256 public price = 0.001 ether;
    bool public paused;

    uint256 public tokenIdsLeft;

    // keep track of minting
    // tokenId => true/false
    mapping(uint256 => bool) public minted;

    // keep track of token by associating a tokenId with a color string
    // tokenId => Color(r,g,b)
    mapping(uint256 => Color) public color;


    modifier onlyWhenNotPaused {
      require(!paused, 'Place contract currently paused');
      _;
    }

    constructor(string memory _baseTokenURI, uint256 _maxTokenIds) ERC721("Blockplace Pixel", "BP") {
      baseTokenURI = _baseTokenURI;
      tokenIdsLeft = _maxTokenIds;
    }

    function _baseURI() internal view virtual override returns (string memory) {
      return baseTokenURI;
    }

    function mintPixel(uint256 tokenId) public payable onlyWhenNotPaused {
      // msg.sender not greylisted
      require(!isGreylisted(), 'Denied: You are greylisted');
      // have enough tokens left
      require(tokenIdsLeft > 0, 'All tokens minted');
      // token should not be owned
      require(!minted[tokenId], 'Token already minted');
      // must have enough msg.value (payment)
      require(msg.value >= price, 'Insufficient deposit');

      tokenIdsLeft -= 1;
      minted[tokenId] = true;
      color[tokenId] = Color({r: 0, g: 0, b: 0});
      addToGreylist();
      _safeMint(msg.sender, tokenId);
    }

    // set color
    function setColor(uint256 tokenId, Color memory _colorHex) public {
      // tokenId must exists (minted)
      require(minted[tokenId], 'Denied: Token not yet minted');
      // must be Owner of token
      require(ownerOf(tokenId) == msg.sender, 'Denied: you are not the token owner');
      color[tokenId] = Color({r: _colorHex.r, g: _colorHex.g, b: _colorHex.b});
    }

    function setPaused(bool _paused) public onlyOwner {
      paused = _paused;
    }

    // withdraw
    function withdraw() public onlyOwner {
      address _owner = owner();
      uint256 amount = address(this).balance;
      (bool sent, ) = _owner.call{value: amount}("");
      require(sent, 'Failed to send balance');
    }

    // needed functions
    receive() external payable {}
    fallback() external payable {}
  }
\`\`\`

# Problem #3: Test-Driven Development for Smart Contracts (TDD with Waffle)

I constructed both Greylist contracts and Place contracts with test-driven development. Here's my test files.

**Greylist.test.js**

\`\`\`
  const { expect } = require("chai");
  const { ethers } = require("hardhat");

  const delay = ms => new Promise(res => setTimeout(res, ms))

  describe('Greylist Contract', () => {
    let greylist;
    let owner, acc1, acc2;


    beforeEach(async () => {
      // getSigners() get the signer from hardhat's local node
      [owner, acc1, acc2] = await ethers.getSigners();
      const GreylistContract = await ethers.getContractFactory('Greylist', owner);
      greylist = await GreylistContract.deploy();

      // wait deployment to be mined
      await greylist.deployed();
    });

    it('should not be greylisted at start', async ()  => {
      expect(await greylist.isGreylisted()).to.equal(false);
    })

    it('should be greylisted after adding to greylist', async ()  => {
      await greylist.addToGreylist();
      expect(await greylist.isGreylisted()).to.equal(true);
    })
  });
\`\`\`


**Place.test.js**

\`\`\`
  const { expect } = require("chai");
  const { ethers } = require("hardhat");

  const delay = ms => new Promise(res => setTimeout(res, ms))

  describe('Place Contract', () => {
    let place;
    let owner, acc1, acc2;

    beforeEach(async () => {
      // getSigners() get the signer from hardhat's local node
      [owner, acc1, acc2] = await ethers.getSigners();
      const PlaceContract = await ethers.getContractFactory('Place', owner);
      place = await PlaceContract.deploy('test.com/api/', 1000000);

      // wait deployment to be mined
      await place.deployed();
    });


    describe('Deployment', () => {
      it('should have tokenIdsLeft of 1,000,000', async () => {
        expect((await place.tokenIdsLeft()).toString()).to.equal('1000000');
      });

      it('should have a price of 1eth', async () => {
        expect(ethers.utils.formatEther(await place.price())).to.equal('1.0');
      });
    });


    describe('Pausing', () => {
      it('should not be paused start', async ()  => {
        expect(await place.paused()).to.equal(false);
      });

      it('should be paused', async ()  => {
        expect(await place.paused()).to.equal(false);
        await place.setPaused(true);
        expect(await place.paused()).to.equal(true);
      });

      it('should not be allowed to mint when paused', async () => {
        await expect(place.mintPixel(0, {value: ethers.utils.parseEther('1')})).to.not.be.reverted;
        await place.setPaused(true);
        await expect(place.mintPixel(0)).to.be.revertedWith('Place contract currently paused');
      });
    });


    describe('Minting', () => {
      let place, place2;
      let owner, acc1, acc2;

      beforeEach(async () => {
        // getSigners() get the signer from hardhat's local node
        [owner, acc1, acc2] = await ethers.getSigners();

        const PlaceContract = await ethers.getContractFactory('Place', owner);
        place = await PlaceContract.deploy('test.com/api/', 1);
        // wait deployment to be mined
        await place.deployed();

        const PlaceContract2 = await ethers.getContractFactory('Place', owner);
        place2 = await PlaceContract2.deploy('test.com/api/', 2);
        // wait deployment to be mined
        await place2.deployed();
      });

      it('should mint and decrement tokendIdsLeft', async () => {
        await expect(place.mintPixel(0, {value: ethers.utils.parseEther("1.0")})).to.not.be.reverted;
        expect(await place.tokenIdsLeft()).to.equal(0);
      });

      it('should mint and store tokenId in color', async () => {
        await expect(place.mintPixel(0, {value: ethers.utils.parseEther("1.0")})).to.not.be.reverted;
        expect((await place.color(0))['r']).to.equal(255);
        expect((await place.color(0))['g']).to.equal(255);
        expect((await place.color(0))['r']).to.equal(255);
      });

      it('should NOT be able to mint insufficient deposit', async () => {
        await expect(place.mintPixel(0, {value: ethers.utils.parseEther("0.5")})).to.be.revertedWith('Insufficient deposit');
      });


      it('should NOT be able to mint because no more tokens left', async () => {
        await expect(place.mintPixel(0, {value: ethers.utils.parseEther("1.0")})).to.not.be.reverted;

        // changing the signer for same contract
        // Signer: Owner -> Acc2
        const contract = await ethers.getContractAt('Place', place.address, acc2);
        await expect(contract.mintPixel(0, {value: ethers.utils.parseEther("1")})).to.be.revertedWith('All tokens minted');
      });

      it('should NOT mint because tokenId owned', async () => {
        const tx = await expect(place2.mintPixel(0, {value: ethers.utils.parseEther("1.0")})).to.not.be.reverted;
        await tx.wait();

        // delay to dodge greylist
        await delay(3000);

        await expect(place2.mintPixel(0, {value: ethers.utils.parseEther("1.0")})).to.be.revertedWith('Token already minted');
      });
    });


    describe('Greylisting', () => {
      it('should NOT mint because greylisted', async () => {
        await expect(place.mintPixel(0, {value: ethers.utils.parseEther("1.0")})).to.not.be.reverted;
        await expect(place.mintPixel(0, {value: ethers.utils.parseEther("1.0")})).to.be.revertedWith('Denied: You are greylisted');
      });
    
      it('should mint because greylist lifted', async () => {
        await expect(place.mintPixel(0, {value: ethers.utils.parseEther("1.0")})).to.not.be.reverted;
        await delay(3000);
        await expect(place.mintPixel(1, {value: ethers.utils.parseEther("1.0")})).to.not.be.reverted;
      });
    });

    describe('Changing Color', () => {
      let local_place;

      beforeEach(async () => {
        local_place = await ethers.getContractAt('Place', place.address, acc1);
        await place.mintPixel(0, {value: ethers.utils.parseEther("1.0")});
      });

      it('should NOT set because not token owner', async () => {
        await expect(local_place.setColor(0, {r: 255, g: 255, b: 255})).to.be.revertedWith('Denied: you are not the token owner');
      })

      it('should NOT set because tokenId does not exists', async () => {
        await expect(local_place.setColor(1, {r: 255, g: 255, b: 255})).to.be.reverted;
      })


      it('it should set because token owner', async () => {
        await expect(place.setColor(0, {r: 255, g: 255, b: 255})).to.not.be.reverted;
      })

      it('should NOT set because color is wrong (overflow)', async () => {
        await expect(local_place.setColor(0, {r: 265, g: 285, b: 200})).to.be.reverted;
      });

      it('should NOT set because color is wrong (negative)', async () => {
        await expect(local_place.setColor(0, {r: -100, g: 285, b: 200})).to.be.reverted;
      });

      it('should NOT set because color is wrong (not a num)', async () => {
        await expect(local_place.setColor(0, {r: '100', g: 285, b: 200})).to.be.reverted;
      });

      it('HOTDOG', async () => {
        try {
          await local_place.setColor(0, {r: '100', g: 285, b: 200});
        } catch (err) {
          console.log(err);
        }
      });

    });
  });
\`\`\`

![Blockplace Home](/assets/projects/blockplace/home.png)

# What I learned from this build?
- Test-Driven Development should be used sparingly. Use it when you plan on building a project all the way through. If it's an experiment, no need to do TDD.
- ImageData is useful when rendering pixels into the canvas element.
- ERC721 standard and methods
- ERC721Enumerable methods
- How NFT collection drops are done


`
}




projects["4"] = {
    name: "Proximic",

    month: "February",
    
    day: "1",

    year: "2022",
    
    network: "Web 2",

    description: "A proximity-sensitive 2D lobby for people to hangout and have discussions. The entire app was built with ReactJS, WebRTC, and Firebase (BaaS).",

    role: "Backend Developer",

    thumbnail: "/assets/projects/proximic/thumbnail.png",

    content: `
# Deployment

[Proximic Deployed](https://proximic-a2a4e.web.app/)

# Other Roles for this Project
- Scrum Master
- Product Owner

# Goals for this Project
- Growth and learning
- Team culture at the price of perfection
- WebRTC and Backend Experience

# Overview
- The project was built with a team of three (3) including myself.
- I was the Scrum Master and Product Owner in charge of pruning backlogs and moving the team forward.
- I made the voicechat and multiplayer functionalities.
  
![Proximic Screenshot](/assets/projects/proximic/multiplayer.png)

# What is Proximic?

Proximic is a **fullstack web application** that aims to eliminate the social barrier that exists in voice chat rooms. This can be done by allowing users to have a discussion in a lobby with the aim to allow 'overhearing' conversations. If a user is able to overhear a conversation much like in real life, he may decide to enter the conversation, plan ahead with a decent punchline, or not even get into the conversation at all. Traditional voice chat rooms cannot offer this social dynamic, but Proximic can.

# Problem #1: Authentication

One of the things to consider at first with Proximic is authentication. How do we identify users? How do we ensure that users are identified? How do we ensure that we keep the bad actors away from our app?

The solution: **Firebase Authentication**

Thankfully, Firebase as a Backend as a Service (BaaS) has authentication built in. It required me to do some documentation work, but having it built in lessens the workload significantly.

![Proximic Screenshot](/assets/projects/proximic/signin.png)

It even has **sign up** features too.

![Proximic Screenshot](/assets/projects/proximic/signup.png)

# Problem #2: Multiplayer

If you're not a game developer, multiplayer functionality seems like a mystery. You wonder, how do multiplayer games work? How do you connect different players and share the same map?

The answer to that is a **shared state between users**. The core of multiplayer functionality is essentially just sharing the state of the game arena with all of the participants from a database. With Proximic, this is done with the **realtime database** provided by Firebase. Once again this has required me to go deep into the docs, but it's nothing new to a developer.

![Proximic Screenshot](/assets/projects/proximic/multiplayer.png)

# Problem #3: Leading the Team and Having Product Vision

Working as a freelancer developer since 2015 has proved to be a weakness in leading a team of developers. My mindset and the way I see the world is totally different from how my teammates live their lives. This isn't surprising since we're all different people, however it had proved itself to be challenging even for me.

I didn't back down though. I accepted this opportunity as a way for me to learn. And after weeks, I've learned the following:
- Be realistic with your own capability don't try to be perfect
- Understand your teammates and see how they think. This is the best way to lead them
- Listen more and talk less. I find that asking questions and probing deeper really gave me insight on how I should approach my leadership role.
- Emotional intelligence is important. It's okay to feel frustrated or disappointed, but it's not okay to project them into your teammates. It's best to reflect on them and really think about it deeply.

# What I learned from all this?
- Firebase makes backend easy
- Collaboration is tough coming from a freelance background
- Leadership is a learning experience too
- Take care of your teammates, they make or break your product
- Listening is the best tool in leading
`
}



const pIdx = Object.keys(projects).map(i => parseInt(i)).sort((a, b) => a - b);

export {
  projects,
  pIdx
};
