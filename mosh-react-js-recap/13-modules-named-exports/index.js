// import { promote } from './Teacher'
// ctrl+ space
// curly braces only used for named exports
import Teacher, { promote } from "./Teacher";

const teacher = new Teacher("ian", "science");
teacher.teach();

// npm install --save babel-cli babel-preset-node6
// ./node_modules/.bin/babel-node --presets node6


// default-> import __ from ''
// named-> import {...} from ''