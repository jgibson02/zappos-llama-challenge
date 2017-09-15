var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var MainInterface = React.createClass({
    
    getInitialState: function() {
        return({
           activeSection: "none" 
        });
    },
    
    onLocationsClick: function() {
        this.setState({
           activeSection: "locations"
        });
    }, // onLocationsClick
    
    onCharacteristicsClick: function() {
        this.setState({
           activeSection: "characteristics"
        });
    }, // onCharacteristicsClick
    
    onLlamasVsAlpacasClick: function() {
        this.setState({
           activeSection: "llamas-vs-alpacas"
        });
    }, // onLlamasVsAlpacasClick
    
    onShearALlamaClick: function() {
        this.setState({
           activeSection: "shear-a-llama" 
        });
    }, // onShearALlamaClick
    
    onAboutClick: function() {
        this.setState({
           activeSection: "about" 
        });
    }, // onAboutClick
    
    render: function() {
        var wrapperClasses = classNames({
           'wrapper': true,
           'active-section': this.state.activeSection
        });
        
        return(
            <div className={wrapperClasses}>
                <Header/>
                <div className="inner-wrapper">
                    <Nav 
                        onLocationsClick={this.onLocationsClick} 
                        onCharacteristicsClick={this.onCharacteristicsClick} 
                        onLlamasVsAlpacasClick={this.onLlamasVsAlpacasClick}
                        onShearALlamaClick={this.onShearALlamaClick}    
                        onAboutClick={this.onAboutClick}
                    />
                    <ContentPane activeSection={this.state.activeSection} className="content-pane"/>
                </div>
            </div> // wrapper
        ) // return
    } // render
}); // MainInterface

var Header = React.createClass({
    render: function() {
        return(
            <header>
                <object type="image/svg+xml" data="images/llamafacts-header.svg"></object>
            </header>
        )
    }
}); // Header

var Nav = React.createClass({
    render: function() {
        return (
            <nav>
                <div className="nav__button">
                    <div className="nav__button__content" onClick={this.props.onLocationsClick}><span>Locations</span></div>
                    <div className="nav__button__background location"></div>
                </div>
                <div className="nav__button">
                    <div className="nav__button__content" onClick={this.props.onCharacteristicsClick}><span>Characteristics</span></div>
                    <div className="nav__button__background characteristics"></div>
                </div>
                <div className="nav__button"><a className="nav__button__content" onClick={this.props.onLlamasVsAlpacasClick}><span>Llamas vs. Alpacas</span></a>
                    <div className="nav__button__background llamas-vs-alpacas"></div>
                </div>
                <div className="nav__button"><a className="nav__button__content" onClick={this.props.onShearALlamaClick}><span>Shear a Llama</span></a>
                    <div className="nav__button__background shear"></div>
                </div>
                <div className="nav__button"><a className="nav__button__content" onClick={this.props.onAboutClick}><span>About</span></a>
                    <div className="nav__button__background about"></div>
                </div>
            </nav>
        ) // return
    } // render
}); // Nav

var ContentPane = React.createClass({
    render: function() {
        switch (this.props.activeSection) {
            case "locations":
                return <LocationsPage/>;
                break;
            case "characteristics":
                return <CharacteristicsPage/>
                break;
            case "llamas-vs-alpacas":
                return <LlamasVsAlpacasPage/>
                break;
            case "shear-a-llama":
                return <ShearALlamaPage/>
                break;
            case "about":
                return <AboutPage/>
                break;
            default:
                return <LocationsPage/>
        }
    } // render
}); // ContentPane

var LocationsPage = React.createClass({
    render: function() {
        return (
            <div className="locations__root content-pane">
                <h1>Locations</h1>
                <div id="map"></div>
                <div className="species-list">
                    <div className="species-card">
                        <div className="species-card__heading">
                            North American
                        </div>
                        <div className="species-card__avatar">
                            <img src="images/north-american-llama.jpg"/>
                        </div>
                    </div>
                    <div className="species-card">
                        <div className="species-card__heading">
                            Central American
                        </div>
                        <div>
                            <div className="species-card__avatar">
                                <img src="images/central-american-llama.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="species-card">
                        <div className="species-card__heading">
                            South American
                        </div>
                        <div>
                            <div className="species-card__avatar">
                                <img src="images/south-american-llama.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="species-card">
                        <div className="species-card__heading ">
                            European
                        </div>
                        <div>
                            <div className="species-card__avatar">
                                <img src="images/european-llama.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
});

var CharacteristicsPage = React.createClass({
    render: function() {
        return (
            <div className="characteristics__root content-pane">
                <h1>Characteristics</h1>
                <table>
                <tbody>
                    <tr>
                        <td><div className="list-bullet"></div></td>
                        <td>
                            <h2>Pack Animals</h2>
                            <p><img src="images/caravan.jpg" style={{float: "right", width: "300px", display: "inline-block"}}/>For centuries, llamas have been used as domesticated pack animals by the inhabitants of the Andes Mountain Range. Packing llamas with goods makes it easy to transport materials many miles in the form of a caravan.<br/>Llamas will only go so far though before they start to act up in response to a heavy burden. Llamas are known to spit, kick, or show other forms of aggressive behavior until they are given a more acceptable load.</p>
                            
                        </td>
                    </tr>
                    <tr>
                        <td><div className="list-bullet"></div></td>
                        <td>
                            <h2>Spitting</h2>
                            <p><img src="images/llama-spit.jpg" style={{float: "right", width: "300px", display: "inline-block"}}/>When llamas aren't happy, they have one unique mechanism for warding off annoyances/aggressors: spitting. Llamas will often use their spit to let another llama know to back away, or to mark their own property. Llamas might also step it up one more step and regurgitate stomach contents to really fend off another animal.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><div className="list-bullet"></div></td>
                        <td>
                            <h2>Eating</h2>
                            <p><img src="images/llama-eating.jpg" style={{float: "right", width: "300px", display: "inline-block"}}/>Llamas, like cows, sheep, and deer, graze and feed on grass and are multi-stomached ruminants. If you didn't already know, the term "ruminant" is used to refer to animals with a multi-sectioned stomach that allows them to extract additional nutrients from plant-matter, and that the animal typically regurgitates and chews their cud. Llamas specifically can eat a wide variety of plants, don't need much water, and as a result thrive in mountainous regions like the Andes.</p>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
});

var LlamasVsAlpacasPage = React.createClass({
    render: function() {
        return (
            <div className="llamas-vs-alpacas__root content-pane">
                <h1>Llamas vs. Alpacas</h1>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">Llamas</th>
                            <th colSpan="2">Alpacas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div className="list-bullet"></div></td>
                            <td>
                                <p>Weigh between 200 - 350 pounds.</p>
                            </td>
                            <td><div className="list-bullet"></div></td>
                            <td>
                                <p>Weigh between 100 - 175 pounds.</p>
                            </td>
                        </tr>
                        <tr>
                            <td><div className="list-bullet"></div></td>
                            <td>
                                <p>Have longer, more pointy faces.</p>
                            </td>
                            <td><div className="list-bullet"></div></td>
                            <td>
                                <p>Have shorter, more "smushed" faces.</p>
                            </td>
                        </tr>
                        <tr>
                            <td><div className="list-bullet"></div></td>
                            <td>
                                <p>Are primarily built to function as pack animals.</p>
                            </td>
                            <td><div className="list-bullet"></div></td>
                            <td>
                                <p>Are primarily built to have nice, colorful fleece.</p>
                            </td>
                        </tr>
                        <tr style={{textAlign: "center"}}>
                            <td colSpan="2">
                                <img src="images/llama-silhouette.png"/>
                            </td>
                            <td colSpan="2">
                                <img src="images/alpaca-silhouette.png"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
});

var ShearALlamaPage = React.createClass({
    render: function() {
        return(
            <div className="shear-a-llama-page__root content-pane">
                <h1>Pls Don't</h1>
                <img style={{width: "100%"}} src="images/shaved-llama.jpg"/>
            </div>
        )
    } 
});

var AboutPage = React.createClass({
    render: function() {
        return(
            <div className="about__root content-pane">
                <h1>About</h1>
                <h3>Who am I?</h3>
                <p>Hi! My name's John Gibson and I am a junior studying Computer Science at Bloomsburg University of Pennsylvania. I am a mentor for freshmen studying Computer Science here at BU and also serve as the vice-president for the ACM student chapter. This past summer I learned React.js from Lynda.com videos in order to make a webapp for NASA engineers (if you're interested, check out my Github), which has taught me a lot about the current state of web technologies. I enjoy trying to understand the field of user experience design and working on making interfaces simpler to use. When I have the free time, I like to play Overwatch and Heroes of the Storm, or to go camping with friends and family.<br/>(Github, Codepen, Linkedin, etc. available here: <a href="http://www.johngibson.me">johngibson.me</a>)</p>
                <h3>Why am I excited about being a part of today's web landscape?</h3>
                <p>This is a topic that I've gotten the opportunity to talk with peers about before, and I see it this way:<br/>Creating a DOM in HTML, styling it with the vast set of tools the current versions of CSS provide, and assigning logic with Javascript has shifted to become the easiest model for building user interfaces that are universally accessible and renderable on any device and form factor.<br/>Knowing how to work with these technologies in conjunction with MVC frameworks such as Angular or React gives the web developer the tools to create desktop applications with Electron. Even on the backend, with the emergence of Node.js' use of the V8 engine, Javascript is now the most popular language. One example is a project I'm working on now that involves a React application that we will then deploy on mobile with React Native without having to manually build a full native app on Android and iOS. Instead, our app can be accessible from a URL and does not force the user into having to download and install it. I think that we will see a migration of mobile applications to web-based applications to enforce a more uniform experience with easier access and management with the advent of more robust Javascript UI frameworks and tools like Android Instant Apps.</p>
                <h3>Why did I design the site the way I did?</h3>
                <p><span className="look-ma">Look ma! No templates!</span> I wanted to create my site from scratch because, while I know I could have made the site a lot prettier and a lot faster if I just went to HTML5Up and picked one, it wouldn't show any understanding of how to thoroughly control the layout and style of each part I wanted to build if I wasn't the one to write it. Since the content of the site involves 5 pages, each with their own separate groups of information, I wanted to avoid the popular single page site design, because I feel that the user should not have to scroll back and forth to find the information they were looking for. I opted instead for a static viewport, where the user navigates between panes of content using the nav menu on the left side. The middle content pane is intended to be a fixed percentage of the viewport width to keep line lengths manageable and text easily readable.</p>
                <h3>What frameworks did you use and why?</h3>
                <p>For this project I used React.js to control dynamic toggling of the content displayed on the page, as well as Gulp+Browserify to handle the tasks of converting SASS, bundling included Node modules, and watching for when I made changes to a sourcefile.</p>
                <h3>Reservations</h3>
                <p>I noticed that the Google Maps embed will disappear after navigating away and back to it again. In order to fix this, I'd have to handle lifecycle methods for when that content pane is rendered, and move when the Google Maps API script is loaded, which I did not have time to finish with this project.</p>
                <h3>Thank you for taking the time to review this site!</h3>
            </div>
        )
    }
});

ReactDOM.render(
  <MainInterface/>,
  document.getElementById('main-interface')
); // render