import * as engineer from '../roles/roleEngineer'
import * as harvester from '../roles/roleHarvester'
import * as miner from '../roles/roleMiner'

import jobConstruct from '../jobs/jobConstruct'
import jobHarvest from '../jobs/jobHarvest'
import jobMine from '../jobs/jobMine';
import jobRestock from '../jobs/jobRestock'
import jobUpgrade from '../jobs/jobUpgrade'

export const Roles: keyAnyObject = {
  engineer,
  harvester,
  miner
};

export const Jobs: keyAnyObject = {
  jobConstruct,
  jobHarvest,
  jobMine,
  jobRestock,
  jobUpgrade,
}