let gemMat;
let gatherMat;
let bossMat;
let monsterMat;
let mora;

const charData = [
    {
      charName: "Zhongli",
      lvl20Uncap: { "Agnidus Agate Sliver": 1, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 20000},
      lvl40Uncap: { "Agnidus Agate Sliver": 9, "Everflame Seed": 2, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 20000},
      lvl50Uncap: { "Agnidus Agate Sliver": 18, "Everflame Seed": 2, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 20000},
      lvl60Uncap: { "Agnidus Agate Sliver": 27, "Everflame Seed": 2, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 20000},
      lvl70Uncap: { "Agnidus Agate Sliver": 54, "Everflame Seed": 2, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 20000},
      lvl80Uncap: { "Agnidus Agate Sliver": 162, "Everflame Seed": 2, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 20000},
    },
    {
      charName: "Diluc",
      lvl20Uncap: { "Agnidus Agate Sliver": 1, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 20000},
      lvl40Uncap: { "Agnidus Agate Sliver": 9, "Everflame Seed": 2, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 40000},
      lvl50Uncap: { "Agnidus Agate Sliver": 18, "Everflame Seed": 2, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 60000},
      lvl60Uncap: { "Agnidus Agate Sliver": 27, "Everflame Seed": 2, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 80000},
      lvl70Uncap: { "Agnidus Agate Sliver": 54, "Everflame Seed": 2, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 100000},
      lvl80Uncap: { "Agnidus Agate Sliver": 162, "Everflame Seed": 2, "Small Lamp Grass": 3, "Slime Condensate": 3, "Mora": 120000},
    },
    {
      charName: "Generic",
      lv20Uncap: {gemMat: 1, gatherMat: 3, monsterMat:3, mora: 20000 },
      lv40Uncap: {gemMat: 9, bossMat: 2, gatherMat: 10, monsterMat:3, mora: 40000 },
      lv50Uncap: {gemMat: 18, bossMat: 4, gatherMat: 20, monsterMat:3, mora: 60000 },
      lv60Uncap: {gemMat: 27, bossMat: 8, gatherMat: 30, monsterMat:3, mora: 80000 },
      lv70Uncap: {gemMat: 54, bossMat: 12, gatherMat: 45, monsterMat:3, mora: 100000 },
      lv80Uncap: {gemMat: 162, bossMat: 20, gatherMat: 60, monsterMat:3, mora: 120000 }
    },
    {
      charName: "Xiao",
      gemMat: {"Vayuda Turquoise Sliver", "Vayuda Turquoise Fragment", "Vayuda Turquoise Chunk", "Vayuda Turquoise Gemstone"},
      bossMat: "Juvenile Jade",
      gatherMat : "Qingxin",
      monsterMat: {"Slime Condensate", "Slime Secretions", "Slime Concentrate"},
      mora : 0,
    }

  ]

gatherMatCheck(gatherMats,gatherReqs) {
  if (gatherMats >= gatherReqs) {
    return true;
  } else {
    return false;
  }
}

bossMatCheck(gatherMats,gatherReqs) {
  if (gatherMats >= gatherReqs) {
    return true;
  } else {
    return false;
  }
}

/*
gem reqs
lv20 = 1
lv40 = 9
lv20 = 18
lv20 = 27
lv20 = 54
lv20 = 162
for now, sliver, shard, gem.. something
sliver value = 1
shard value = 3
gem value = 9
something value = 27
*/


gemMatCheck20(){

}

gemMatCheck4050(sliver, shard, req){
  if ((shard*3) >= req) {
    return true;
  } else if (((shard*3) + sliver) >= req) {
    return true;
  } else {
    return false;
  }
}

gemMatCheck6070(){

}

gemMatCheck80(){

}

monsterMatCheck(){

}


lv20Uncap() {
  if (gemMatCheck20() == true && 
      monsterMatCheck() == true &&
      bossMatCheck() == true &&
      gatherMatCheck() == true) {
    return true;
  }
}

//gather & boss mats don't convert, so they can share same method functionality.
//gem and monster mats can be converted so they can share some funcationality depending on the level.
