export function GetData(dataName, defaultValue = 0) {
  if (localStorage.getItem(dataName) == null) {
    return defaultValue;
  }
  return localStorage.getItem(dataName);
}


export function SetData(dataName, value){
    localStorage.setItem(dataName, value);
}