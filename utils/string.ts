export const replaceSpaceBySlashToLowercase = (text: string) =>
  text?.toLowerCase().replace(" ", "-");

export const capitalizeWholeText = (text: string): string =>
  text.at(0)?.toUpperCase() + text.substring(1);

export const toLowerCase = (text: string): string => text?.toLowerCase();
