setInterval(autoClass4, 10)
                        function autoClass4() { 
                            if(document.getElementById("classSetting").value == "Arms"){
                                document.getElementById("autoMate").style.display = "none";
                                document.getElementById("autoClass").selectedIndex = 0;
                                document.getElementById("studentClass").disabled = false;
                            }else{
                                document.getElementById("autoMate").style.display = "block";
                                //document.getElementById("deptType").disabled = true;
                            }
                            
                        }
                        
                        function autoClass3() {
                            var autoClass1 = document.getElementById("autoClass").value;
                            if(document.getElementById("classSetting").value != "Arms"){
                            if(autoClass1 == ""){
                                var notClass = document.getElementById("studentClass");
                                notClass.disabled = false;
                                notClass = notClass.value.slice(0,1);
                                if(notClass != "S"){
                                    document.getElementById("deptType").disabled = true;
                                }else{
                                    document.getElementById("deptType").disabled = false;
                                }
                            }else if(autoClass1 == "SSS"){
                                document.getElementById("studentClass").disabled = true;
                                document.getElementById("deptType").disabled = false;
                            }else{
                                document.getElementById("studentClass").disabled = true;
                                document.getElementById("deptType").disabled = true;
                                document.getElementById("studentClass").selectedIndex = 0;
                                document.getElementById("deptType").selectedIndex = 0;
                            }
                            }else{
                                document.getElementById("studentClass").disabled = false;
                                document.getElementById("deptType").disabled = false;
                            }
                        }
                        function CreateStaff() {
                            var locus = document.getElementById("subjecty").value;
                            locus = locus.replaceAll(" ","");
                            var locus2 = document.getElementById("staff").value;
                            locus2 = locus2.replaceAll(" ","");
                            if(locus2 == "" || locus == ""){
                                alert("Enter the Teacher's name and Subject")
                            }else{
                            var autoClass1 = document.getElementById("autoClass").value;
                            //document.querySelector("div.stray").innerHTML = "blue";
                            var staff = document.createElement("div");
                            staff.innerHTML = "NAME: "+document.getElementById("staff").value;
                            document.getElementById("container").appendChild(staff);
                            document.getElementById("container").appendChild(document.createElement("br"));

                            var subjecty = document.createElement("div");
                            subjecty.innerHTML = "SUBJECT: "+document.getElementById("subjecty").value;
                            document.getElementById("container").appendChild(subjecty);
                            document.getElementById("container").appendChild(document.createElement("br"));

                            var studentClass = document.createElement("div");
                            var studentClass1 = document.getElementById("studentClass").value;
                            studentClass.innerHTML = (document.getElementById("classSetting").value != "Arms" && autoClass1 == "JSS" || document.getElementById("classSetting").value != "Arms" && autoClass1 == "SSS")? ("CLASS: "+autoClass1+" 1-3") : "CLASS: "+studentClass1; //value.slice(0,1) slice(-1); splict("-",1)
                            document.getElementById("container").appendChild(studentClass);
                            document.getElementById("container").appendChild(document.createElement("br"));
                            
                            var deptType = document.createElement("div");
                            deptType.innerHTML = (document.getElementById("classSetting").value == "Arms" && document.getElementById("deptType").value == "")?("DEPARTMENT/ARMS: A-"+String.fromCharCode(classOptions.value)): "DEPARTMENT/ARMS: "+document.getElementById("deptType").value;
                            document.getElementById("container").appendChild(deptType);
                            document.getElementById("container").appendChild(document.createElement("br"));

                            var period = document.getElementById("period").value;
                            var periodAdd = document.createElement("div");
                            periodAdd.innerHTML = "PERIOD: "+period;
                            document.getElementById("container").appendChild(periodAdd);
                            document.getElementById("container").appendChild(document.createElement("br"));
                            document.getElementById("container").appendChild(document.createElement("br"));
                            document.getElementById('container').lastChild.scrollIntoView(false);
                            //console.log(document.getElementById("deptType").value.slice(0,1));

                            var value1 = document.getElementById("staff").value;
                            var subjectValue = document.getElementById("subjecty").value;
                            var autoClass1 = document.getElementById("autoClass").value;

                            var period = document.getElementById("period").value;
                            for(var c = 1; c<=period; c++){
                            
                            function autoCreate(inputElement){
                            var inputDay = Math.floor(Math.random()*5)+1;
                            var inputPeriod = Math.floor(Math.random()*8)+1;
                            var stateClass = document.getElementById("studentClass").value;
                            var dept = document.getElementById("deptType").value.slice(0,1);
                            var inputAddress = inputDay+stateClass+dept+inputPeriod;
                            var inputElement = document.getElementById(inputAddress);
                            var checked = inputDay+""+inputPeriod+value1;
                            var classic = inputDay+stateClass+dept+subjectValue;
                            classic = classic.replaceAll(' ','');
                            checked = checked.replaceAll(' ','');
                            

                            //(document.getElementById("staff").value == checked.split("/", 1))?alert(true):alert(false);
                           

                            //inputElement.value = "confirm";
                            //alert(inputElement.value);
                            //inputElement.style = "background: yellow";

                            if(document.getElementById("classSetting").value == "Department" && dept == "" && stateClass == "SSS1" && autoClass1 == ""||
                                document.getElementById("classSetting").value == "Department" && dept == "" && stateClass == "SSS2" && autoClass1 == ""||
                                document.getElementById("classSetting").value == "Department" && dept == "" && stateClass == "SSS3" && autoClass1 == "") {
                                if(document.getElementsByClassName(checked).length >= 1 || document.getElementsByName(classic).length >= 1 ||
                                document.getElementById(inputDay+stateClass+"S"+inputPeriod).value != ""||
                                document.getElementById(inputDay+stateClass+"A"+inputPeriod).value != ""||
                                document.getElementById(inputDay+stateClass+"C"+inputPeriod).value != ""
                            ){
                                    autoCreate(inputElement);
                                }else{
                                    document.getElementById(inputDay+stateClass+"S"+inputPeriod).value = subjectValue;
                                    document.getElementById(inputDay+stateClass+"S"+inputPeriod).className = checked;
                                    document.getElementById(inputDay+stateClass+"S"+inputPeriod).name = classic;

                                    document.getElementById(inputDay+stateClass+"A"+inputPeriod).value = subjectValue;
                                    document.getElementById(inputDay+stateClass+"A"+inputPeriod).className = checked;
                                    document.getElementById(inputDay+stateClass+"A"+inputPeriod).name = classic;

                                    document.getElementById(inputDay+stateClass+"C"+inputPeriod).value = subjectValue;
                                    document.getElementById(inputDay+stateClass+"C"+inputPeriod).className = checked;
                                    document.getElementById(inputDay+stateClass+"C"+inputPeriod).name = classic;
                                }
                            }
                            else{

                                if(document.getElementById("classSetting").value == "Arms" && dept == ""){
                                    
                                    for(var mr = 65; mr<=classOptions.value; mr++){
                                        function autoCreate1(inputElement1){
                                        var inputDay1 = Math.floor(Math.random()*5)+1;
                                        var inputPeriod1 = Math.floor(Math.random()*8)+1;
                                        var inputAddress1 = inputDay1+stateClass+String.fromCharCode(mr)+inputPeriod1;
                                        var inputElement1 = document.getElementById(inputAddress1);
                                        var xlassic = inputDay1+stateClass+String.fromCharCode(mr)+subjectValue.replaceAll(" ","");
                                        var xhecked = inputDay1+""+inputPeriod1+value1.replaceAll(" ","");
                                        //console.log(xhecked+":"+xlassic+":"+inputAddress1);
                                        if(document.getElementsByClassName(xhecked).length >= 1 || document.getElementsByName(xlassic).length >= 1 || inputElement1.value != ""){                                
                                            autoCreate1(inputElement1);
                                        }else{
                                            inputElement1.value = subjectValue;
                                            inputElement1.className = xhecked;
                                            inputElement1.name = xlassic;
                                        }
                                        }
                                    autoCreate1();
                                    }
                                }else{ 
                                    
                                        if(autoClass1 != ""){
                                            for(var mr = 1; mr<=3; mr++){
                                                function autoCreate1(inputElement1){
                                                var inputDay1 = Math.floor(Math.random()*5)+1;
                                                var inputPeriod1 = Math.floor(Math.random()*8)+1;
                                                var inputAddress1 = inputDay1+autoClass1+mr+dept+inputPeriod1;
                                                var inputElement1 = document.getElementById(inputAddress1);
                                                var xlassic = inputDay1+autoClass1+mr+dept+subjectValue.replaceAll(" ","");
                                                var xhecked = inputDay1+""+inputPeriod1+value1.replaceAll(" ","");
                                                //console.log(xhecked+":"+xlassic+":"+inputAddress1);
                                                if(document.getElementById("classSetting").value == "Department" && dept == "" && autoClass1 == "SSS") {
                                                    if(document.getElementsByClassName(xhecked).length >= 1 || document.getElementsByName(xlassic).length >= 1 ||
                                                    document.getElementById(inputDay1+autoClass1+mr+"S"+inputPeriod1).value != ""||
                                                    document.getElementById(inputDay1+autoClass1+mr+"A"+inputPeriod1).value != ""||
                                                    document.getElementById(inputDay1+autoClass1+mr+"C"+inputPeriod1).value != ""
                                                ){
                                                        autoCreate1(inputElement1);
                                                    }else{
                                                        document.getElementById(inputDay1+autoClass1+mr+"S"+inputPeriod1).value = subjectValue;
                                                        document.getElementById(inputDay1+autoClass1+mr+"S"+inputPeriod1).className = xhecked;
                                                        document.getElementById(inputDay1+autoClass1+mr+"S"+inputPeriod1).name = xlassic;

                                                        document.getElementById(inputDay1+autoClass1+mr+"A"+inputPeriod1).value = subjectValue;
                                                        document.getElementById(inputDay1+autoClass1+mr+"A"+inputPeriod1).className = xhecked;
                                                        document.getElementById(inputDay1+autoClass1+mr+"A"+inputPeriod1).name = xlassic;

                                                        document.getElementById(inputDay1+autoClass1+mr+"C"+inputPeriod1).value = subjectValue;
                                                        document.getElementById(inputDay1+autoClass1+mr+"C"+inputPeriod1).className = xhecked;
                                                        document.getElementById(inputDay1+autoClass1+mr+"C"+inputPeriod1).name = xlassic;
                                                    }
                                                }else{
                                                    if(document.getElementsByClassName(xhecked).length >= 1 || document.getElementsByName(xlassic).length >= 1 || inputElement1.value != ""){                                
                                                        autoCreate1(inputElement1);
                                                    }else{
                                                        inputElement1.value = subjectValue;
                                                        inputElement1.className = xhecked;
                                                        inputElement1.name = xlassic;
                                                    }
                                                    }
                                                    }
                                            autoCreate1();
                                            }
                                    }else{
                                        if(document.getElementsByClassName(checked).length >= 1 || document.getElementsByName(classic).length >= 1 || inputElement.value != ""){                                
                                            autoCreate(inputElement);
                                        }else{
                                            inputElement.value = subjectValue;
                                            inputElement.className = checked;
                                            inputElement.name = classic;
                                            return;
                                        }
                                    }
                                }
                            }
                            }
                            autoCreate();
                            changeText();
                        }

                            document.getElementById("deptType").selectedIndex = 0;
                            document.getElementById("studentClass").value = "JSS1";
                            document.getElementById("period").value = "1";
                            }
                            
                        }
                        var cat = setInterval(changeSet, 15);
                        function changeSet () {
                            if(document.getElementById("classSetting").value == "Department"){
                                document.getElementById("classOptions").disabled = true;
                                document.getElementById("classOptions").value = "";
                                setTimeout(armTable.replaceChildren(), 10);
                                setTimeout(stray2.replaceChildren(), 10);
                                armTable.style.display = "none";
                                departTable.style.display = "block";
                            } else{
                                document.getElementById("classOptions").disabled = false;
                                setTimeout(departTable.replaceChildren(), 10);
                                setTimeout(stray1.replaceChildren(), 10);
                                armTable.style.display = "block";
                                departTable.style.display = "none";
                                
                            }
                        }
                        //var tat = setInterval(typeClass, 50)
                        //var classAgain = document.getElementById("studentClass").value
                        function typeClass () {
                            var classAgain = document.getElementById("studentClass").value;

                            if( classAgain == 'JSS3' || classAgain == 'JSS1' || classAgain == 'JSS2'){
                                document.getElementById("deptType").selectedIndex = 0;
                                document.getElementById("deptType").disabled = true;
                            }
                            else{
                                document.getElementById("deptType").disabled = false;
                            }
                        }

                        function reset12() {
                            document.getElementById("autoClass").selectedIndex = 0;
                            document.getElementById("staff").value = "";
                            document.getElementById("deptType").disabled = true;
                            document.getElementById("deptType").selectedIndex = 0;
                            document.getElementById("studentClass").selectedIndex = 0;
                            document.getElementById("studentClass").disabled = false;
                            document.getElementById("subjecty").value = "";
                            document.getElementById("period").selectedIndex = 0;
                        }

                        function update1() {
                            var spanner = document.getElementById("spanner");
                            var checkClash = document.getElementById("checkClash");;
                            if(document.getElementById("staffEdit").value.replaceAll(" ","") == ""){
                                spanner.style.display = "block";
                                spanner.innerText = "Enter the Teacher's name";
                                document.getElementById("staffEdit").focus();
                            }
                            else{
                                if(document.getElementById("subjectEdit").value.replaceAll(" ","") == ""){
                                    spanner.style.display = "block";
                                    spanner.innerText = "Enter the Subject";
                                    document.getElementById("subjectEdit").focus();
                                }
                                else{
                                    var hiddenField = document.getElementById("hiddenField").value;
                                    var stakeValue = document.getElementById(hiddenField);
                                    var dayValue = hiddenField.slice(0,1);
                                    var pedValue = hiddenField.slice(-1);
                                    var remain = hiddenField.slice(1,-1);
                                    var checker = dayValue+""+pedValue+document.getElementById("staffEdit").value.replaceAll(" ","");
                                    const cChecker = document.getElementsByClassName(checker);
                                    if(cChecker.length >= 1 && checkClash.checked == true){
                                        spanner.style.display = "block";
                                        spanner.innerText = "Teacher's Subject is clashing.";
                                        var count = 0;
                                        counter = setInterval(() => {
                                            count++
                                            if(count == 1 || count == 3){
                                                document.getElementById("modal1").style.border = "2px solid red";
                                            }
                                            else{
                                                if(count == 5){
                                                    clearTimeout(counter);
                                                }else{
                                                document.getElementById("modal1").style.border = "2px solid #005994";
                                                }
                                            }
                                        }, 300);
                                    }else{/*
                                        for(let r = 0; r < cChecker.length; r++){
                                            console.log(cChecker[r].id.slice(1, 4));
                                        }*/
                                        if(cChecker.length >= 1){
                                            if(cChecker[0].id.slice(1, 5) != remain.slice(0, 4) && cChecker[0].value != ""){
                                                spanner.style.display = "block";
                                                spanner.innerText = "Teacher's Subject is clashing.";
                                                var count = 0;
                                                counter = setInterval(() => {
                                                    count++
                                                    if(count == 1 || count == 3){
                                                        document.getElementById("modal1").style.border = "2px solid red";
                                                    }
                                                    else{
                                                        if(count == 5){
                                                            clearTimeout(counter);
                                                        }else{
                                                        document.getElementById("modal1").style.border = "2px solid #005994";
                                                        }
                                                    }
                                                }, 300);
                                            }else{
                                                stakeValue.value = document.getElementById("subjectEdit").value;
                                                stakeValue.name = dayValue+remain+document.getElementById("subjectEdit").value.replaceAll(" ","");
                                                stakeValue.className = checker.replaceAll(" ","");
                                                document.getElementById("subjectEdit").value = "";
                                                document.getElementById("staffEdit").value = ""
                                                spanner.innerText = "";
                                                modal.style.display = "none";
                                                changeText();
                                            }
                                        }else{
                                            stakeValue.value = document.getElementById("subjectEdit").value;
                                            stakeValue.name = dayValue+remain+document.getElementById("subjectEdit").value.replaceAll(" ","");
                                            stakeValue.className = checker.replaceAll(" ","");
                                            document.getElementById("subjectEdit").value = "";
                                            document.getElementById("staffEdit").value = ""
                                            spanner.innerText = "";
                                            modal.style.display = "none";
                                            changeText();
                                          }
                                    }
                                }
                            }
                        }
                        
                        function cancel1() {
                                    modal.style.display = "none";
                                    document.getElementById("subjectEdit").value = "";
                                    document.getElementById("staffEdit").value = ""
                                    document.getElementById("spanner").style.display = "none";
                                    document.getElementById("spanner").innerText = "";
                                }

                        function search1() {
                            var search = document.getElementById("search").value.replaceAll(" ","");
                            if(search != ""){
                                for(var i=1; i<=8; i++){
                                    for(var j=1; j<=5; j++){
                                        try {
                                            const textName = j+""+i+search.replaceAll(" ","");
                                            const textNodes = document.getElementsByClassName(textName);
                                            for(let r = 0; r < textNodes.length; r++){
                                                textNodes[r].style.backgroundColor = "rgb(250, 101, 37)";
                                            } 
                                        array_search.push(textNodes.length);
                                        }
                                        catch(err){
                                            //console.log("invalid element");
                                        }
                                    }
                                }
                              alert(array_search.toString().replaceAll("0","").replaceAll(",","").length+" Period(s)");
                            }else{
                                document.getElementById("search").focus();
                                document.getElementById("search").value = "";
                            }
                        }

                        function changeText(){
                            const nodes = document.querySelectorAll("textarea");
                            for(let r = 0; r < nodes.length; r++){
                                nodes[r].style.backgroundColor = "initial";
                            }
                        }

                        function filtaClass() {
                            var filta = document.getElementById("filterClass");
                            if(filta.value == ""){
                                for(var j = 1; j<=3; j++){
                                    for(let y = 0; y < document.getElementsByClassName("JSS"+j).length; y++){
                                        document.getElementsByClassName("JSS"+j)[y].style.display = "table-cell";
                                    }
                                    for(let s = 0; s < document.getElementsByClassName("SSS"+j).length; s++){
                                        document.getElementsByClassName("SSS"+j)[s].style.display = "table-cell";
                                    }
                                    for(let lk = 0; lk < document.getElementsByClassName("dayTd").length; lk++){
                                        document.getElementsByClassName("dayTd")[lk].style.transform = "rotate(-75deg)";
                                    }
                                    for(let lka = 0; lka < document.getElementsByClassName("dayTd").length; lka++){
                                        document.getElementsByClassName("dayTd")[lka].style.fontSize = "30px";
                                    }
                                }
                            }else{
                                for(var k = 1; k<=3; k++){
                                    for(let y = 0; y < document.getElementsByClassName("JSS"+k).length; y++){
                                        document.getElementsByClassName("JSS"+k)[y].style.display = "none";
                                    }
                                    for(let s = 0; s < document.getElementsByClassName("SSS"+k).length; s++){
                                        document.getElementsByClassName("SSS"+k)[s].style.display = "none";
                                    }
                                }
                                for(let l = 0; l < document.getElementsByClassName(filta.value).length; l++){
                                    document.getElementsByClassName(filta.value)[l].style.display = "table-cell";
                                }
                                for(let lk = 0; lk < document.getElementsByClassName("dayTd").length; lk++){
                                    document.getElementsByClassName("dayTd")[lk].style.transform = "unset";
                                }
                                for(let lka = 0; lka < document.getElementsByClassName("dayTd").length; lka++){
                                    document.getElementsByClassName("dayTd")[lka].style.fontSize = "15px";
                                }
                            }
                        }
