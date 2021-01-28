var Nav = {};

async function GetNav(req) {
    var nav = [
        { path: "/", name: "Home" },
        { path: "#projects", name: "Projects" }
    ]

    return nav;
}

Nav.GetNav = GetNav;

module.exports = Nav;