const express = require("express");
const router = express.Router();

const config = require("../config.json");

const Avatar = require("../models/Avatar");
const Dashboard = require("../models/Dashboard");

const social = [
    {icon: "fa-github", path: "https://github.com/m0uka"},
    {icon: "fa-gitlab", path: "https://gitlab.com/m0uka"},
    {icon: "fa-discord", path: "https://discord.bio/p/m0uka"},
    {icon: "fa-steam", path: `https://steamcommunity.com/profiles/${config.steamid}`},
];

const languages = [
    {name: "Lua", value: "95"},
    {name: "C#", value: "90"},
    {name: "JavaScript", value: "85"},
    {name: "SQL", value: "80"},
    {name: "PHP", value: "60"},
];

const technologies = [
    {name: "MySQL", value: "90", color: "info"},
    {name: "ASP.NET Core", value: "85", color: "info"},
    {name: "Linux", value: "85", color: "info"},
    {name: "Git", value: "85", color: "info"},
    {name: "Node.JS", value: "75", color: "info"},
]

const languageTags = {
    "Lua": "info", 
    "GmodStore": "primary"
};

function createTag(lang) {
    var color = languageTags[lang];
    return {color: color, title: lang};
}

const projects = [];

const about = `I am a freelance developer from the Czech Republic. I originally started programming with a Minecraft mod
called ComputerCraft. After that, I started learning web stack (HTML/CSS/JS). Thanks to that, I discovered Node.JS, which I used to make
Discord bots. Then I proceeded to learn the basics of C#, which I used for my Unity projects. Sometime later I discovered that you can
code with Lua in Garry's Mod. I was instantly hooked and started doing freelance work, and I was successful at it, so I started making GModStore addons.`;

router.get("/", async (req, res) => {

    var addonsArr = Array.from(projects);

    var addons = await Dashboard.GetUserAddons(config.steamid);
    addons.data.forEach(addon => {
        if (!addon.active) return;
        var tags = [createTag("Lua"), createTag("GmodStore")];
        var name = addon.name.replace(/ .*/, '');
        addonsArr.push({title: name, description: addon.shortDescription, img: addon.bigSpotImage, link: addon.route, tags: tags});
    })

    res.render("home", {
        pathId: "/",
        
        avatar: Avatar.GetCachedAvatar(),
        social: social,
        about: about,
        languages: languages,
        tech: technologies,
        projects: addonsArr,
    });
})

module.exports = router;
