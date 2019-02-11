import * as engineer from '../roles/roleEngineer'
import * as harvester from '../roles/roleHarvester'

import jobConstruct from '../jobs/jobConstruct'
import jobHarvest from '../jobs/jobHarvest'
import jobRestock from '../jobs/jobRestock'
import jobUpgrade from '../jobs/jobUpgrade'

export const Roles: keyAnyObject = {
  engineer,
  harvester
};

export const Jobs: keyAnyObject = {
  jobConstruct,
  jobHarvest,
  jobRestock,
  jobUpgrade,
}