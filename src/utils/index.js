function setSession(_key,_value){
  sessionStorage.setItem(_key, JSON.stringify(_value));
}

function getSession(_key){
  return JSON.parse(sessionStorage.getItem(_key));
}

export default {
  setSession,
  getSession
}
