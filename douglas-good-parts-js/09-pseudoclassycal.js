function Gizmo(id){
  this.id = id
}

Gizmo.prototype.toString = function(){
  return "gizmo " + this.id
}