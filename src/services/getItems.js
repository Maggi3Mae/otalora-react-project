//Acá cargo el array y la promesa
const GameList = [
    {
        id: 1, 
        title: "The Witcher 3: Wild Hunt",
        price: 50000,
        picUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
        gameUrl: "https://www.igdb.com/games/the-witcher-3-wild-hunt",
        sumary: "RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.",
        backImg: "https://images.igdb.com/igdb/image/upload/t_screenshot_big/farvemmmxav0bgt6wx7t.jpg"
    },
    {
        id: 2, 
        title: "Metal Gear Solid 3: Snake Eater",
        price: 34500,
        picUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co29pn.jpg",
        gameUrl: "https://www.igdb.com/games/metal-gear-solid-3-snake-eater",
        sumary: "A stealth action/survival game and prequel to Metal Gear Solid 1 (1998) and 2 (2001), MGS3 follows Naked Snake as he trudges through rain forests and swamps in order to clear the name of the American government of suspicion at detonating a nuclear missile within Soviet soil by dispatching the organization behind the act, in a story of shifting allegiances, deception, warfare, mentorship and sexuality.",
        backImg: "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc6vo7.jpg"
    },
    {
        id: 3, 
        title: "Hades",
        price: 24000,
        picUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co39vc.jpg",
        gameUrl: "https://www.igdb.com/games/hades--1",
        sumary: "A rogue-lite hack and slash dungeon crawler in which Zagreus, son of Hades the Greek god of the dead, attempts to escape his home and his oppressive father by fighting the souls of the dead through the various layers of the ever-shifting underworld, while getting to know and forging relationships with its inhabitants.",
        backImg: "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc8lin.jpg"
    },
    {
        id: 4, 
        title: "Portal 2",
        price: 65000,
        picUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rs4.jpg",
        gameUrl: "https://www.igdb.com/games/portal-2",
        sumary: "Sequel to the acclaimed Portal (2007), Portal 2 pits the protagonist of the original game, Chell, and her new robot friend, Wheatley, against more puzzles conceived by GLaDOS, an A.I. with the sole purpose of testing the Portal Gun's mechanics and taking revenge on Chell for the events of Portal. As a result of several interactions and revelations, Chell once again pushes to escape Aperture Science Labs.",
        backImg: "https://images.igdb.com/igdb/image/upload/t_screenshot_big/i9ys3zdhph1mh3futdit.jpg"
    }
    
];
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(GameList);
        },2000);
        //si cambio este timeout a menor tiempo, no carga nada y sale en consola el mensaje
        setTimeout(() => {
            reject("No funciona, pero que triste eso")
        }, 3000);
    });

    export const getItems =()=> {
        return promise
    }