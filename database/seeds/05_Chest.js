
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chests').del()
    .then(function () {
      // Inserts seed entries
      return knex('chests').insert([
        { chest_name: 'Beginner Chest', rarity: 42, chest_rewards: 1, chest_id: 1 },
        { chest_name: 'Beginner Chest', rarity: 42, chest_rewards: 2, chest_id: 1 },
        { chest_name: 'Beginner Chest', rarity: 42, chest_rewards: 3, chest_id: 1 },
        { chest_name: 'Easy Chest', rarity: 27, chest_rewards: 1, chest_id: 2 },
        { chest_name: 'Medium Chest', rarity: 15, chest_rewards: 2, chest_id: 3 },
        { chest_name: 'Hard Chest', rarity: 7, chest_rewards: 3, chest_id: 4 },
        { chest_name: 'Elite Chest', rarity: 3, chest_rewards: 1, chest_id: 5 },
        { chest_name: 'Master Chest', rarity: 1, chest_rewards: 2, chest_id: 6 },
      ]);
    });
};

/* 

Rarity:
- 1 : Ultra Rare
- 3 : Epic
- 7 : Super Rare
- 15 : Rare
- 25 : Un-Common
- 50 : Common

Beginner, Easy, Medium, Hard, Elite, Master

*/