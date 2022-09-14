var pages = {
  home: `<h1>This is Home page</h1><br/><img src='images/home.png' alt='Home' style='width:50%;'/><br/><h2>I made this site for the Kottans course to complete the task "Action task"</h2>`,
  aboutcs: `<h1>This is About CS:GO page</h1><br/><img src='images/aboutcs.png' alt='About Cs' style='width:50%;' /><br/><h3>The overall gameplay of Global Offensive is similar to previous games in the Counter-Strike series. Global Offensive is a multiplayer first-person shooter where each player joins a team of terrorists or special forces (counter-terrorists) to defeat the enemy team. Each team has 5 fighters. The game continues over several rounds, ending when all fighters on one side are dead or the objective is completed. At the beginning of each round, teams appear at their "bases". Fighters have a reserve of health, initial weapons and funds. Around the bases there is a "shopping zone", within which it is possible to purchase additional weapons and equipment for a limited time. Using weapons, shelters, knowledge of the terrain (maps) and teamwork, players attempt to complete a task that depends on a pre-selected mode. By performing successful actions, the fighters receive funds, and after the end of the round, they receive an additional reward - more in case of victory and less in case of defeat. At the same time, funds are withdrawn for killing teammates or terrorist hostages. Players whose character has been killed can watch the fight until the end of the round.A training mode has appeared in Counter-Strike: Global Offensive.</h3>`,
  services: `<h1>This is Services page</h1><br/><img src='images/services.png' alt='About Cs' style='width:50%;' /><br/><h3>Upon release, Global Offensive received positive reviews from critics who praised the game for its gameplay and fidelity to the Counter-Strike series, although it was criticized for some early features and differences between the console and PC versions. Since its release, it has attracted approximately 11 million players per month and remains one of the most popular games on Valve's Steam platform. In December 2018, Valve switched the game to a free-to-play model, focusing on revenue from cosmetic products.</h3>`,
  images: `<h1>This is Images page</h1><br/><img src='images/m4a4.jpg' alt='m4a4' style='width:25%;' /><img src='images/ak47.jpg' alt='ak47' style='width:25%;' /><img src='images/awp.jpg' alt='AWP' style='width:25%;' /><img src='images/glock.jpg' alt='Glock' style='width:25%;' />`,
};

function getPageContent(page) {
  var contentToReturn;
  switch (page) {
    case "home":
      contentToReturn = pages.home;
      break;
    case "services":
      contentToReturn = pages.services;
      break;
    case "images":
      contentToReturn = pages.images;
      break;
    case "aboutcs":
      contentToReturn = pages.aboutcs;
      break;
    default:
      contentToReturn = pages.home;
      break;
  }
  document.getElementById("content").innerHTML = contentToReturn;
}
