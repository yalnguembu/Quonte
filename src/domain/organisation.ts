import type { OrganisationDTO } from "@/services/bespace";

export class Organisation {
  private organisation: OrganisationDTO;

  constructor(data: OrganisationDTO) {
    this.organisation = data;
  }

  get name() {
    return this.organisation.name;
  }
  set name(data: string) {
    this.organisation.name = data;
  }

  get logo() {
    return this.organisation.logo;
  }
  set logo(data: string) {
    this.organisation.logo = data;
  }

  get owner() {
    return this.organisation.owner;
  }
  set owner(data) {
    this.organisation.owner = data;
  }
}
