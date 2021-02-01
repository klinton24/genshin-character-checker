export const charData = [
    {
      charName: "Zhongli",
      lvl20Uncap: [[[1]["Prithiva Topaz Sliver"]][[3]['Cor Lapis']]],
      lvl40Uncap: [[[3]['Prithiva Topaz Fragment']][[10]['Cor Lapis']]] 
    },
    {
      charName: "Diluc",
      lvl20Uncap: { "Agnidus Agate Sliver": 1, "Small Lamp Grass": 3 },
      lvl40Uncap: { "Agnidus Agate Fragment": 3, "Small Lamp Grass": 10}
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
