// psudoclassical
function Gizmo(id) {
  this.id = id;
}

Gizmo.prototype.toString = function() {
  return "gizmo " + this.id;
};

function Hoozit(id) {
  this.id = id;
}

Hoozit.prototype = new Gizmo();
Hoozit.prototype.test = function(id) {
  return this.id === id;
};

// functional inheritance
function gizmo(id) {
  return {
    id: id,
    toString: function() {
      return "gizmo" + this.id;
    }
  };
}

function hoozit(id) {
  var that = gizmo(id);
  that.test = function(testid) {
    return testid === this.id;
  };
  return that;
}
