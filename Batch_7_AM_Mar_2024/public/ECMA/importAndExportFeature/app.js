
// import {getTotalSal, count} from "./salUtil.js";
import * as reference from "./salUtil.js"

var displayMsg = () => {
    console.log("am from display msg");
}
var totalSal = reference.getTotalSal(23000);

console.log("count is " + reference.count);


displayMsg();

console.log("totalSal" + totalSal);

var p1 = new reference.StudentDetails()