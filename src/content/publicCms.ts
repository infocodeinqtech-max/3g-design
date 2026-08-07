import {
  seedContactOffices,
  seedContactPage,
} from "../data/staticContent";

/** Static stand-in for public CMS fetch. */
export async function loadPublicSiteCms(_force = false) {
  return {
    contactPage: seedContactPage,
    contactOffices: seedContactOffices,
    siteContact: null,
    footer: null,
  };
}
