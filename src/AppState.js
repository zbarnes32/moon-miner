import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null, 

  upgrades: [
    new Upgrade({
      name: 'Pickaxe',
      picture: '⛏',
      quantity: 0,
      manualMultiplier: 1,
      autoMultiplier: 0,
      price: 10
    }),
    new Upgrade({
      name: 'Drill',
      picture: '⇣',
      quantity: 0,
      manualMultiplier: 5,
      autoMultiplier: 0,
      price: 50
    }), 
    new Upgrade({
      name: 'Miner',
      picture: '🧑🏼‍🚀',
      quantity: 0,
      manualMultiplier: 0,
      autoMultiplier: 25,
      price: 250
    }),
    new Upgrade({
      name: 'Automatic Drill',
      picture: '🗼',
      quantity: 0,
      manualMultiplier: 0,
      autoMultiplier: 100, 
      price: 1000
    }),
  ],

  ores: 0
})