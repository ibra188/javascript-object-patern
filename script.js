//Object Literals
var o = {
    x: 42,
    y: 13.4,
    f: function(){},
    g: function(){},
}

//Factory Function
function thing(){
    return{
        x: 42,
        y: 13.4,
        f: function(){},
        g: function(){}
    };
}

var o = thing();

//Prototype Chains
var thingPrototype = {
    f: function(){},
    g: function(){}
};

function thing(){
    var o = Object.create(thingPrototype);

    o.x = 42;
    o.y = 3.14;

    return o;
}

var o = thing();
