
const root = ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement("div", {id: "parent"},
 React.createElement("div", {id: "child1"}, 
 [
    React.createElement("h1", {id:"heading1"}, "Hello World using React1"),
    React.createElement("h2", {id:"heading2"}, "Hello World using React2")
]), React.createElement("div", {id: "child2"}, 
[
   React.createElement("h1", {id:"heading11"}, "Hello World using React11"),
   React.createElement("h2", {id:"heading22"}, "Hello World using React22")
]));

root.render(parent);