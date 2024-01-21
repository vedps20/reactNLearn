# infoNotes

React applications are generally called single page application.

why react is fast?
because it is fast in DOM manipulation, because it uses virtual DOM, applying diff algorithm which is very fast and reconsilation

Q.) why 2 React scripts?
A.) first link is the core React library second link is the react library for DOM manipulation.
React element is nothing but a javascript object with attributes and childrents ( i.e, props ).


Package.json is a configuration of our npm

package and dependencies are same

npm takes care of the packages/dependencies in package.json


there are 2 types of dependencies, i.e, Dev and regular(for production)

~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

dependecies have transient dependency.

tarball is a format to archive files, like the files of source code.

CDN links are not good practice to introduce react in our project, as its costly to hit network call, version change reflects in url of the CDN link script ( its was being used in index.html).


parcel does HMR (Hot Module Replacement) using File Watching Algorithm which is written in c++; also does cache for faster reloads (.parcel-cache file above node modules). It also does Image optimization, minification of files, bundeling ( its a bundler), compresses the file, also does consistent hashing, code splitting, differential bundling , error handling, Tree Shaking - removes unused code. Differnet dev and prod bundles

npx parcel build index.html (npx parcel index.html builds dev bundle)will build a production bundle in the dist folder before above_modules


Babel is a js compiler, it transpiles the jsx into react element, then further its converted into js object, and then its converted into html element


React Element is similar to like an HTML element, like div/h1 etc.
jsx is a react element

A function returning react element is called react component.

two ways of create component, functional component(new) and class component(old).

Whenever creating a error Capitalize the first letter.

const heading = (<h1 className="head" tabIndex="5">React Element</h1>);

const HeadingComponent = () =>{
    <div id = "container">
        <h1 className = "heading">React Component</h1>
    </div>
};

The dot notation (.) is used to select elements by class in CSS. (.className)
The hash/pound sign (#) is used to select elements by ID in CSS. (.idName)


To print a js object in jsx we need to put the object inside {}.
So whenever we do inline css in jsx the syntax becomes style = {{backgroundColor: "#f0f0f0"}}
// one brace is for the jsx one is of the jsobject


const RestaurantCard = (props) => {
  return ();
}; // and then use the props as props.attribute

                    OR

const RestaurantCard = ({attribure1, attribute2, ..., attributeN}) => {
  return ();
}; // and then use the props directly
//this destructuring is js not react

                   OR

const RestaurantCard = (props) => {
  const {attribure1, attribute2, ..., attributeN} = props;
  return ();
}; // and then use the props directly



donot use map indexes for keys as its not recommended by react itself
resList.map((restaurant, index) => (
  <RestaurantCard key={index} resData={restaurant} />
  ))




{} around import means that it is a named export.


Types of export/import
 - Default export/import
   - export default <name_of_variable/component/element>
   import name_of_variable/component/element from "...";

 - Named export/import
   -export const componenet;
   import {componenet} from "...";// curled braces


React Hooks
-useState()
-useEffect()


Below is how we define state variable.// useState returns an array and what we assign here is array destructuring, just like object destructuring for js objects
const [variableName, setVariableName] = useState()// [first is the variable, second is the setter for it(it can have any name)]

            OR
const arr = useState();
const [variableName, setVariableName] =  arr;// but this is not suggested to use

            OR
const arr = useState();
const variableName = arr[0];
const setVariableName = arr[1];
             
whenever a state variable updates ( whenever setVariableName() is called), react will re-render the entire componenet

React works fast with immutable items.

React fiber implements reconciler and, react-core implements renderer.

useEffect() is used when something is to be rendered after the components loads
useEffect() renders everytime its componenet renders

if no dependency array is present, it is called on every render
if dependency array is empty = [] , it is called only on initial render ( only once) .
if dependency is on a state variable, it will be called on its render

useEffect(()=>{
    fetchData();
}); // will render after each componenet render


useEffect(()=>{
    fetchData();
}, []); // will render only on initial render

Types of routing: 
Client side routing : we do not make any network call, we just render the details with what we have, like this app we build. ex: example/about .
Server Side routing : if we make network call for ex: example/component to our server then we get the details like html, css, js etc. and then render it, this is called SS routing.


useParams() gets the parameters from the URL

use <link> instead for <a> for hyperlinks, <link> does not renders the entire page unlike <a>. <link> is present in "react-router-dom"

useRouteError() gives error which we get

we declare an object state in class based components to create state variables and all variables are present inside it, not individually unlike in function based component

during ClassComponent lifecycle, first construtor is called, then render and then mounting happens. i.e, componentDidMount.
