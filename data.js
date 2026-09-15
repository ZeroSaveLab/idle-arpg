window.GAME_DATA={
maps:[
{id:"forest",name:"Floresta Inicial",min:1,max:10,theme:"forest",monsterPool:["slime","goblin"],reward:5},
{id:"ruins",name:"Ruínas Abandonadas",min:11,max:20,theme:"ruins",monsterPool:["skeleton","goblin"],reward:8}
],
monsters:{
slime:{name:"Slime",hp:30,speed:42,damage:5,xp:25,color:"#6db77a"},
goblin:{name:"Goblin",hp:42,speed:38,damage:7,xp:34,color:"#9b7e5b"},
skeleton:{name:"Esqueleto",hp:58,speed:30,damage:10,xp:48,color:"#d6d1c2"}
},
items:{
sword:{name:"Espada do Aventureiro",type:"Arma",rarity:"Comum",stats:{damage:4}},
armor:{name:"Couraça Reforçada",type:"Armadura",rarity:"Comum",stats:{hp:20}},
ring:{name:"Anel Simples",type:"Anel",rarity:"Mágico",stats:{damage:2}},
boots:{name:"Botas de Couro",type:"Botas",rarity:"Mágico",stats:{speed:5}}
}
};