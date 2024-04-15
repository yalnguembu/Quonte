export enum NOTE_ITEM {
  CARD = "CARD",
  LIST = "LIST",
  SUMMARY = "SUMMARY",
}

export enum SORT_TYPE {
  ASC = "ASC",
  DESC = "DESC",
}

export enum API_ERROR_MESSAGE {
  NOT_FOUND = "NOT_FOUND",
  FORBIDDEN = "FORBIDDEN",
  BAD_REQUEST = "BAD_REQUEST",
  ALREADY_EXIST = "ALREADY_EXIST",
}

export enum ALERT_BOX_TYPE {
  SUCCESS = "SUCCESS",
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

export enum THEME {
  BLUE = "BLUE",
  GREEN = "GREEN",
  YELLOW = "YELLOW",
}

export enum REGEX {
  EMAIL = "",
  PASSWORD = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
}
