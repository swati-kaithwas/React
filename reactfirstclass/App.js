const heading = React.createElement("h1",{
    id:"title"
},"Nameste EveryOne !");
const heading1 = React.createElement("h2",{
    id:"title"
},"Hello EveryOne");
const container = React.createElement("h1",{
    id:"container"
},[heading,heading1]);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(container)
