const hero = {
  heroType: "Warrior",
  attack: 4,
  weaponSkill: 3,
  strength: 3,
  toughness: 3,
  wounds: 12,
};

const enemy = {
  enemyType: "Goblin",
  attack: 2,
  weaponSkill: 2,
  strength: 2,
  toughness: 2,
  wounds: 8,
};

function rollAttack(
  attack,
  attackWs,
  defenderWs,
  attackerStrength,
  defenderToughness
) {
  let hits = 0;
  let diceRollHit = 0;
  let diceHit = [];
  let diceRollWound = 0;
  let diceWound = [];
  let wounds = 0;

  for (let i = 0; i < attack; i++) {
    diceRollHit = Math.floor(Math.random() * 6) + 1;
    diceHit.push(diceRollHit);
    if (attackWs > defenderWs && diceRollHit >= 3) {
      hits++;
    }
    if (attackWs === defenderWs && diceRollHit >= 4) {
      hits++;
    }
    if (attackWs < defenderWs && diceRollHit >= 5) {
      hits++;
    }
  }
  console.log("You've rolled: " + diceHit + " to hit");
  console.log("Successful hits: " + hits);

  if (hits === 0) {
    console.log("No hits");
  }
  if (hits > 0) {
    for (let i = 0; i < hits; i++) {
      diceRollWound = Math.floor(Math.random() * 6) + 1;
      diceWound.push(diceRollWound);
      if (diceRollWound === 6) {
        wounds = wounds + 2;
      } else {
        if (attackerStrength > defenderToughness && diceRollWound >= 3) {
          wounds++;
        }
        if (attackerStrength === defenderToughness && diceRollWound >= 4) {
          wounds++;
        }
        if (attackerStrength < defenderToughness && diceRollWound >= 5) {
          wounds++;
        }
      }
    }
  }
  enemy.wounds = enemy.wounds - wounds;

  console.log("You've rolled: " + diceWound + " to wound");
  console.log("You have inflicted " + wounds + " wounds on the enemy");
  console.log("Enemy has " + enemy.wounds + " wounds left");
}

rollAttack(
  hero.attack,
  hero.weaponSkill,
  enemy.weaponSkill,
  hero.strength,
  enemy.toughness
);
