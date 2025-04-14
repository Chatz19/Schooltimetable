setTimeout(changeFormat, 1);
function changeFormat () {
    if(document.getElementById("classSetting").value == "Department"){
        document.getElementById("container").replaceChildren();
        //setTimeout(armTable.remove(), 10000);
        setTimeout(correct, 20);

    function correct(){
        
    var stray1 = document.getElementById("stray1");

    var label_type2 = document.createElement("label");
        label_type2.innerHTML = "Department: ";
        label_type2.id = "label_type2";
        stray1.appendChild(label_type2);
    var label_type2 = document.getElementById("label_type2");
    var select_type2 = document.createElement("select");
        select_type2.id = "deptType";
        label_type2.appendChild(select_type2);
    var select_type2 = document.getElementById("deptType");
    var optional3 = document.createElement("option")
        optional3.value = "";
        optional3.selected = true;
        optional3.innerHTML = "All";
        select_type2.appendChild(optional3);
    var optional = document.createElement("option")
        optional.value = "Science";
        optional.innerHTML = "Science";
        select_type2.appendChild(optional);
    var optional1 = document.createElement("option");
        optional1.value = "Art";
        optional1.innerHTML = "Art";
        select_type2.appendChild(optional1)
    var optional2 = document.createElement("option");
        optional2.value = "Commercial";
        optional2.innerHTML = "Commercial";
        select_type2.appendChild(optional2)
    var br1 = document.createElement("br");
        label_type2.appendChild(br1);
    var br1 = document.createElement("br");
        label_type2.appendChild(br1);
        typeClass();

    var headt = document.createElement("tr");
        headt.id = "headt";
        document.getElementById("departTable").appendChild(headt);

        var dayTh = document.createElement("th");
        dayTh.innerHTML ="Day";
            document.getElementById("headt").appendChild(dayTh);

            var classTh = document.createElement("th");
            classTh.innerHTML ="Class";
            document.getElementById("headt").appendChild(classTh);

    for(var i=1; i<=9; i++){ 
        let res = (i>5)? (i-1) : i;
        if(i==6){
            var sBreak = document.createElement("th");
            sBreak.innerHTML ="Break";
            document.getElementById("headt").appendChild(sBreak);
            continue;
        }
         var tableTh =  document.createElement("th");
         tableTh.innerHTML = res;
         document.getElementById("headt").appendChild(tableTh);
         
    }
    //element.replaceChildren(element.firstChild, element.lastChild); 
    for(var wDay=1; wDay<=5; wDay++){
        var dayTr = document.createElement("tr");
        dayTr.id = getDayOfWeek(wDay);
        document.getElementById("departTable").appendChild(dayTr);
        
        
        var dayTd = document.createElement("td");
        dayTd.innerHTML = getDayOfWeek(wDay);
        dayTd.className = "dayTd";
        document.getElementById(getDayOfWeek(wDay)).appendChild(dayTd);
        
        //class table data
        var classTd = document.createElement("td");
        classTd.innerHTML = "";
        classTd.id = "class" + getDayOfWeek(wDay);
        document.getElementById(getDayOfWeek(wDay)).appendChild(classTd);
        
        var classTable = document.createElement("table");
        classTable.id = "classTable" + getDayOfWeek(wDay);
        document.getElementById("class" + getDayOfWeek(wDay)).appendChild(classTable);
        //if else statement of class's depart and arms goes here
                  
        for(js = 1; js<=3; js++){
            var classTr = document.createElement("tr");
            classTr.id = "js"+js;
            document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(classTr);

        var jsTd = document.createElement("td");
            jsTd.innerHTML = "JSS " + js;
            jsTd.className = "class "+"JSS"+js;
            document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(jsTd);
            }

            for(ss = 1; ss<=3; ss++){
            var classTr = document.createElement("tr");
            classTr.id = "ss"+ss;
            document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(classTr);

        var ssTd = document.createElement("td");
            ssTd.innerHTML = "SSS " + ss + " SCI.";
            ssTd.className = "class "+"SSS"+ss;
            ssTd.id = "SSS"+ss;
            document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(ssTd);

            var classTr = document.createElement("tr");
            classTr.id = "ss"+ss;
            document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(classTr);

        var ssTd = document.createElement("td");
            ssTd.innerHTML = "SSS " + ss + " ART.";
            ssTd.className = "class "+"SSS"+ss;
            ssTd.id = "SSS"+ss;
            document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(ssTd);

            var classTr = document.createElement("tr");
            classTr.id = "ss"+ss;
            document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(classTr);

        var ssTd = document.createElement("td");
            ssTd.innerHTML = "SSS " + ss + " COMM";
            ssTd.className = "class "+"SSS"+ss;
            ssTd.id = "SSS"+ss;
            document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(ssTd);
            }
            //period time section start
            for(var i=1; i<=9; i++){
                let res = (i>5)? (i-1) : i;
                if(i==6){
    
                    var periodTd = document.createElement("td");
            periodTd.innerHTML = "";
            periodTd.id = "breaks" + getDayOfWeek(wDay);
            periodTd.className = "breaks";
            document.getElementById(getDayOfWeek(wDay)).appendChild(periodTd);
            continue;
                }
            var periodTd = document.createElement("td");
            periodTd.innerHTML = "";
            periodTd.id = "periods" + getDayOfWeek(wDay)+i;
            document.getElementById(getDayOfWeek(wDay)).appendChild(periodTd);
            
            var periodTable = document.createElement("table");
            periodTable.id = "periodTable" + getDayOfWeek(wDay)+i;
            document.getElementById("periods" + getDayOfWeek(wDay)+i).appendChild(periodTable);
            
            var checkClash = document.getElementById("checkClash");
    
            for(js = 1; js<=3; js++){ 
                    var classTr = document.createElement("tr");
                    classTr.id = "period"+js;
                    document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(classTr);
    
                    var jsTd = document.createElement("td");
                    jsTd.id = "td"+wDay+"JSS"+js+res;
                    jsTd.className = "JSS"+js;
                    document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(jsTd);
                    //textarea as table data
                    var tdInput = document.createElement("textarea");
                    tdInput.id = wDay+"JSS"+js+res;
                    tdInput.readOnly = true;
                    tdInput.row = 2;
                    tdInput.addEventListener("click", function()  {
                        var modal = document.getElementById("modal");
                        modal.style.display = "block";
                        document.getElementById("hiddenField").value = this.id;
                        checkClash.checked = true;
                        
                        var periodEdit = document.getElementById("periodEdit");
                        var classEdit = document.getElementById("classEdit");
                        var dayEdit = document.getElementById("dayEdit");
                        document.getElementById("staffEdit").focus();
                        var pos;
                        if(res == 1){
                            pos = "st";
                        }else{
                            if(res == 2){
                                pos = "nd";
                            }else{
                                if(res == 3){
                                    pos = "rd";
                                }else{
                                    pos = "th";
                                }
                            }
                        }
                        periodEdit.innerText = res;
                        classEdit.innerText = "JSS"+" "+this.id.slice(1,-1).slice(-1);
                        dayEdit.innerText = getDayOfWeek(this.id.slice(0,1));
                        document.getElementById("pos").innerText = pos;

                    }, false);
                    document.getElementById(jsTd.id).appendChild(tdInput);
            }

            for(ss = 1; ss<=3; ss++){ 
                var classTr = document.createElement("tr");
                classTr.id = "period"+ss;
                document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(classTr);

                var ssTd = document.createElement("td");
                ssTd.id = "td"+wDay+"SSS"+ss+"S"+res;
                ssTd.className = "SSS"+ss;
                document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(ssTd);
                var tdInput = document.createElement("textarea");
                //textarea as table data
                tdInput.id = wDay+"SSS"+ss+"S"+res;
                tdInput.readOnly = true;
                tdInput.row = 2;
                tdInput.addEventListener("click", function()  {
                    var modal = document.getElementById("modal");
                    modal.style.display = "block";
                    document.getElementById("hiddenField").value = this.id;
                    checkClash.checked = true;

                    var periodEdit = document.getElementById("periodEdit");
                        var classEdit = document.getElementById("classEdit");
                        var dayEdit = document.getElementById("dayEdit");
                        document.getElementById("staffEdit").focus();
                        var pos;
                        if(res == 1){
                            pos = "st";
                        }else{
                            if(res == 2){
                                pos = "nd";
                            }else{
                                if(res == 3){
                                    pos = "rd";
                                }else{
                                    pos = "th";
                                }
                            }
                        }
                        periodEdit.innerText = res;
                        classEdit.innerText = "SSS"+" "+this.id.slice(1,-1).slice(-2).slice(0,1)+ " Science";
                        dayEdit.innerText = getDayOfWeek(this.id.slice(0,1));
                        document.getElementById("pos").innerText = pos;

                }, false);
                document.getElementById(ssTd.id).appendChild(tdInput);

                var classTr = document.createElement("tr");
                classTr.id = "period"+ss;
                document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(classTr);

                var ssTd = document.createElement("td");
                ssTd.id = "td"+wDay+"SSS"+ss+"A"+res;
                ssTd.className = "SSS"+ss;
                tdInput.readOnly = true;
                tdInput.row = 2;
                document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(ssTd);
                //textarea as table data
                var tdInput = document.createElement("textarea");
                tdInput.id = wDay+"SSS"+ss+"A"+res;
                tdInput.readOnly = true;
                tdInput.row = 2;
                tdInput.addEventListener("click", function()  {
                    var modal = document.getElementById("modal");
                    modal.style.display = "block";
                    document.getElementById("hiddenField").value = this.id;
                    checkClash.checked = true;

                    var periodEdit = document.getElementById("periodEdit");
                        var classEdit = document.getElementById("classEdit");
                        var dayEdit = document.getElementById("dayEdit");
                        document.getElementById("staffEdit").focus();
                        var pos;
                        if(res == 1){
                            pos = "st";
                        }else{
                            if(res == 2){
                                pos = "nd";
                            }else{
                                if(res == 3){
                                    pos = "rd";
                                }else{
                                    pos = "th";
                                }
                            }
                        }
                        periodEdit.innerText = res;
                        classEdit.innerText = "SSS"+" "+this.id.slice(1,-1).slice(-2).slice(0,1)+" Art";
                        dayEdit.innerText = getDayOfWeek(this.id.slice(0,1));
                        document.getElementById("pos").innerText = pos;
                    
                }, false);
                document.getElementById(ssTd.id).appendChild(tdInput);

                var classTr = document.createElement("tr");
                classTr.id = "period"+ss;
                document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(classTr);

                var ssTd = document.createElement("td");
                ssTd.id = "td"+wDay+"SSS"+ss+"C"+res;
                ssTd.className = "SSS"+ss;
                document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(ssTd);
                //textarea as table data
                var tdInput = document.createElement("textarea");
                tdInput.id = wDay+"SSS"+ss+"C"+res;
                tdInput.readOnly = true;
                tdInput.row = 2;
                tdInput.addEventListener("click", function()  {
                    var modal = document.getElementById("modal");
                    modal.style.display = "block";
                    document.getElementById("hiddenField").value = this.id;
                    checkClash.checked = true;

                    var periodEdit = document.getElementById("periodEdit");
                        var classEdit = document.getElementById("classEdit");
                        var dayEdit = document.getElementById("dayEdit");
                        document.getElementById("staffEdit").focus();
                        var pos;
                        if(res == 1){
                            pos = "st";
                        }else{
                            if(res == 2){
                                pos = "nd";
                            }else{
                                if(res == 3){
                                    pos = "rd";
                                }else{
                                    pos = "th";
                                }
                            }
                        }
                        periodEdit.innerText = res;
                        classEdit.innerText = "SSS"+" "+this.id.slice(1,-1).slice(-2).slice(0,1)+" Commercial";
                        dayEdit.innerText = getDayOfWeek(this.id.slice(0,1));
                        document.getElementById("pos").innerText = pos;

                }, false);
                document.getElementById(ssTd.id).appendChild(tdInput);
        }

        }
        //period time section end
    }
}
}

}