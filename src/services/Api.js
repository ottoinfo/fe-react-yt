import api from "superagent"

export default class Api {

  constructor(url="/api") {
    this.url = url
  }

  fetch = ()=> {
    return api.get(this.url).accept("application/json")
  }

  save = (model)=> {
    if (model.id) {
      return api.put(this.url + model.id).send(model).accept("application/json")
    }
    else {
      return api.post(this.url).send(model).accept("application/json")
    }
  }

  delete = (model)=>{
    return api.delete(this.url + model.id).accept("application/json")
  }
}