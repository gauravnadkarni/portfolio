export enum SupportedSectionType {
  HOME = "home",
  ABOUT = "about",
  SKILL = "skill",
  PROJECT = "project",
  WORK_HISTORY = "history",
  RESUME = "resume",
  BLOG = "blog",
  FOOTER = "footer",
}

const DATA: Record<SupportedSectionType, boolean> = {
  [SupportedSectionType.HOME]:
    (process.env.REACT_APP_FEATURE_ENABLED_HOME &&
    process.env.REACT_APP_FEATURE_ENABLED_HOME === "true")
      ? true
      : false,
  [SupportedSectionType.ABOUT]: Boolean(
    (process.env.REACT_APP_FEATURE_ENABLED_ABOUT &&
      process.env.REACT_APP_FEATURE_ENABLED_ABOUT === "true")
      ? true
      : false
  ),
  [SupportedSectionType.SKILL]: Boolean(
    (process.env.REACT_APP_FEATURE_ENABLED_SKILL &&
      process.env.REACT_APP_FEATURE_ENABLED_SKILL === "true")
      ? true
      : false
  ),
  [SupportedSectionType.PROJECT]: Boolean(
    (process.env.REACT_APP_FEATURE_ENABLED_PROJECT &&
      process.env.REACT_APP_FEATURE_ENABLED_PROJECT === "true")
      ? true
      : false
  ),
  [SupportedSectionType.WORK_HISTORY]: Boolean(
    (process.env.REACT_APP_FEATURE_ENABLED_WORK_HISTORY &&
      process.env.REACT_APP_FEATURE_ENABLED_WORK_HISTORY === "true")
      ? true
      : false
  ),
  [SupportedSectionType.RESUME]: Boolean(
    (process.env.REACT_APP_FEATURE_ENABLED_RESUME &&
      process.env.REACT_APP_FEATURE_ENABLED_RESUME === "true")
      ? true
      : false
  ),
  [SupportedSectionType.BLOG]: Boolean(
    (process.env.REACT_APP_FEATURE_ENABLED_BLOG &&
      process.env.REACT_APP_FEATURE_ENABLED_BLOG === "true")
      ? true
      : false
  ),
  [SupportedSectionType.FOOTER]: Boolean(
    (process.env.REACT_APP_FEATURE_ENABLED_FOOTER &&
      process.env.REACT_APP_FEATURE_ENABLED_FOOTER === "true")
      ? true
      : false
  ),
};

console.log(DATA, process.env);

export default DATA;
