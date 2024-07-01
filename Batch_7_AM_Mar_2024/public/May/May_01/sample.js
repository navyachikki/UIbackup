/*var bookDetails = {
                name: 'My Stories',
                price: 200,
                authors: ["abc", 'pqr'],
                publisher: 'People Publishers'
            }

            console.log(bookDetails);
            console.table(bookDetails);
            console.table([bookDetails], ['name', 'price']); */

            var empDetails = {
                name: '',
                gender: '',
                readEmployeeDetails() {
                    empDetails.name = prompt("enter employee name");
                    this.gender = prompt("enter employee gender");                
                    this.basicSal = parseInt(prompt("enter basic sal"));
                    empDetails.getPFAndHra();
                },
                getPFAndHra() {
                    this.pf = (this.basicSal * 12) / 100;
                    this.hra = (this.basicSal * 24) / 100;
                    this.totalSal = this.pf + this.basicSal + this.hra;
                    this.getTotalTax();
                },
                getTotalTax() {
                    this.taxpercent = 0;
                    if (this.gender == 'Male') {
                        if (this.totalSal >= 200000) {
                            this.taxpercent = 15
                        }
                    } else {
                        if (this.totalSal >= 100000) {
                            this.taxpercent = 10
                        }
                    }
                },
                displayEmployeeDetails() {
                    this.readEmployeeDetails();
                    console.log("EMPLOYEE DETAILS");
                    console.log("Name " + this.name);
                    console.log("Gender" + this.gender);
                    console.log("Total sal " + this.totalSal);
                    console.log("Total tax percent " + this.taxpercent);
                }
            };

            // empDetails.displayEmployeeDetails();
            

           // empDetails.readEmployeeDetails();


           var sampleObj = {
                name: 'Prasad',
                displayInfo() { // Recommended
                    console.log("from display info");
                }
                /* displayInfo: function() {
                    console.log("from display info");
                } */
                /*displayInfo: () => {
                    console.log("from display info");
                }*/
           }
           sampleObj.displayInfo();