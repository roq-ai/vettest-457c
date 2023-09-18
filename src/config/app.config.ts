interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Veterinarian', 'Veterinary Nurse'],
  tenantName: 'Clinic',
  applicationName: 'vettest',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage clinic profile',
    'Invite Veterinarians and Veterinary Nurses to the system',
    'Delete Veterinarian or Veterinary Nurse profiles',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/12c30f84-8841-48ac-b4b5-cd193ef59124',
};
