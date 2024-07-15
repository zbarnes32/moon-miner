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
      quantity: 1,
      incrementBy: 1,
      price: 10
    }),
    new Upgrade({
      name: 'Drill',
      picture: '⇣',
      quantity: 1,
      incrementBy: 5,
      price: 50
    }), 
    new Upgrade({
      name: 'Miner',
      picture: '🧑🏼‍🚀',
      quantity: 1,
      incrementBy: 10,
      price: 100
    }),
    new Upgrade({
      name: 'Automatic Drill',
      picture: '🗼',
      quantity: 1,
      incrementBy: 100,
      price: 1000
    }),
  ],

  ores: null
})