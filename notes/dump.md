# dump

    <script>
        const heading  = document.createElement("h1");
        heading.innerHTML = "Hello World using JavaScript";
        
        const root = document.getElementById("root");
        root.appendChild(heading);
    </script>

----------------------------------------------------------------------------------------------

    <script>
        const heading = React.createElement("h1", {}, "Hello World using Reactor");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>

-------------------------------------------------------------------------------------------------

    <script
        crossorigin
        src="https://unpkg.com/react@18/umd/react.development.js">
    </script>
    <script 
        crossorigin 
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
    </script>

--------------------------------------------------------------------------------


const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello World :)"),
    React.createElement("h2", { id: "heading2" }, "Hello World using React2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading11" }, "Hello World using React11"),
    React.createElement("h2", { id: "heading22" }, "Hello World using React22"),
  ])
);

root.render(parent);

--------------------------------------------------------------------------------------------