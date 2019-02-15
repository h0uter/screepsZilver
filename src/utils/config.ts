import * as engineer from '../roles/roleEngineer'
import * as harvester from '../roles/roleHarvester'
import * as miner from '../roles/roleMiner'

import jobConstruct from '../jobs/jobConstruct'
import jobHarvest from '../jobs/jobHarvest'
import jobMine from '../jobs/jobMine';
import jobRestock from '../jobs/jobRestock'
import jobUpgrade from '../jobs/jobUpgrade'

export const POPULATION_SETTINGS: RoleNumberObject = {
  engineer: 6,
  harvester: 3,
  miner: 2,
}

export const RCL_SPAWN_LIST = {
  1: ['harvester', 'engineer'],
  2: ['harvester', 'engineer'],
  3: ['harvester', 'engineer', 'miner'],
  4: ['harvester', 'engineer', 'miner'],
  5: ['harvester', 'engineer', 'miner'],
  6: ['harvester', 'engineer', 'miner'],
  7: ['harvester', 'engineer', 'miner'],
  8: ['harvester', 'engineer', 'miner'],
}

export const ROLES: keyAnyObject = {
  engineer,
  harvester,
  miner
};

export const JOBS: keyAnyObject = {
  jobConstruct,
  jobHarvest,
  jobMine,
  jobRestock,
  jobUpgrade,
}

export const ROLE_BODY_CONFIG = {
  engineer: {
    WCM: [1, 1, 1],
    scaling: [1, 1, 1],
    limit: [5, 5, 5]
  },
  harvester: {
    WCM: [1, 1, 1],
    scaling: [1, 1, 1],
    limit: [5, 5, 5]
  },
  miner: {
    WCM: [1, 0, 1],
    scaling: [1, 0, 0],
    limit: [6, 0, 1]
  }
}