# infoNotes

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