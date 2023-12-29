# dump

    <!-- <script>
        const heading  = document.createElement("h1");
        heading.innerHTML = "Hello World using JavaScript";
        
        const root = document.getElementById("root");
        root.appendChild(heading);
    </script> -->

    <script>
        const heading = React.createElement("h1", {}, "Hello World using Reactor");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);

    </script>

