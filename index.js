"use strict";

function draw() {
    //retrieve json data
    var les_miserables = null;
    $.getJSON("./data/les_miserables.json", function(json) {
      les_miserables = json;
    });

    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
        nodes: les_miserables.nodes,
        edges: les_miserables.edges
    };
    var options = {
        nodes: {
            shape: 'dot',
            size: 16
        },
        physics: {
            forceAtlas2Based: {
                gravitationalConstant: -26,
                centralGravity: 0.005,
                springLength: 230,
                springConstant: 0.18
            },
            maxVelocity: 146,
            solver: 'forceAtlas2Based',
            timestep: 0.35,
            stabilization: {iterations: 150}
        }
    };
    var network = new vis.Network(container, data, options);

}
