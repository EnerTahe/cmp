const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Demo",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Artists",
    newTab: false,
    submenu: [
      {
        id: 301,
        title: "TreyC",
        path: "/artists/treyc",
        newTab: false,
      },
    ],
  },
];
export default menuData;


