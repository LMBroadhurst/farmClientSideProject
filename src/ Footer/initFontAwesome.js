
import { library } from "@fortawesome/fontawesome-svg-core";


// importing specific icons from @fortawesome
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub,} from "@fortawesome/free-brands-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";


// adding specific icons that I want to use to my library  
function initFontAwesome() {
    library.add(fab, faGamepad, faTwitterSquare, faFacebook, faLinkedin, faGithub);
}

// export the function 

export default initFontAwesome;

