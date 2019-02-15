interface keyAnyObject {
  [key:string]: any;
}

interface KeyNumberObject {
  [key:string]: number;
}



type Foo = 'a' | 'b';
type Bar = {[key in Foo]: any};

type Role = "engineer" | "miner" | "harvester";

type RRoleNumberObject = {[key in Role]: number};

interface RoleNumberObject {
  [key: string]: number;

}