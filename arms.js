function changeArms (){
    setTimeout(armTable.replaceChildren(), 10);
    setTimeout(stray2.replaceChildren(), 10);
     if(document.getElementById("classSetting").value == "Arms"){
        //setTimeout(departTable.remove(), 10000);
        setTimeout(correct, 100);
    function correct() {

    var stray2 = document.getElementById("stray2");
    var label_type2 = document.createElement("label");
        label_type2.innerHTML = "Arms: ";
        label_type2.id = "label_type2";
        stray2.appendChild(label_type2);
    var label_type2 = document.getElementById("label_type2");
    var select_type2 = document.createElement("select");
        select_type2.id = "deptType";
        label_type2.appendChild(select_type2);
    var select_type2 = document.getElementById("deptType");

    for(var arm = "65"; arm <= classOptions.value; arm++){
        var classOption =  document.createElement("option");
         classOption.innerHTML = String.fromCharCode(arm);
         classOption.value = String.fromCharCode(arm);
         document.getElementById("deptType").appendChild(classOption);
    }
    var headt = document.createElement("tr");
        headt.id = "headt";
        document.getElementById("armTable").appendChild(headt);

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
        document.getElementById("armTable").appendChild(dayTr);
        
        
        var dayTd = document.createElement("td");
        dayTd.innerHTML = getDayOfWeek(wDay);
        document.getElementById(getDayOfWeek(wDay)).appendChild(dayTd);
        
        //class table data
        var classTd = document.createElement("td");
        classTd.innerHTML = "";
        classTd.id = "class" + getDayOfWeek(wDay);
        document.getElementById(getDayOfWeek(wDay)).appendChild(classTd);
        
        var classTable = document.createElement("table");
        classTable.id = "classTable" + getDayOfWeek(wDay);
        classTable.className = "classTable";
        document.getElementById("class" + getDayOfWeek(wDay)).appendChild(classTable);
        //if else statement of class's depart and arms goes here
                        
            for(js = 1; js<=3; js++){ //about to change arm setting
                for(arm = 65; arm<=classOptions.value; arm++){
                var classTr = document.createElement("tr");
                classTr.id = "js"+js;
                document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(classTr);

                var jsTd = document.createElement("td");
                jsTd.innerHTML = "JSS " + js +" "+String.fromCharCode(arm);
                jsTd.className = "class";
                document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(jsTd);
            }
            }

            for(ss = 1; ss<=3; ss++){
                for(arm = 65; arm<=classOptions.value; arm++){
                var classTr = document.createElement("tr");
                classTr.id = "ss"+ss;
                document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(classTr);

                var ssTd = document.createElement("td");
                ssTd.innerHTML = "SSS " + ss + " "+String.fromCharCode(arm);
                ssTd.className = "class";
                document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(ssTd);

                }
            }
        //period code section
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

        for(js = 1; js<=3; js++){ //about to change arm setting
                for(arm = 65; arm<=classOptions.value; arm++){
                var classTr = document.createElement("tr");
                classTr.id = "period"+js;
                document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(classTr);

                var jsTd = document.createElement("td");
                jsTd.id = "td"+wDay+"JSS"+js+String.fromCharCode(arm)+res;
                document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(jsTd);
                //input as table data
                var tdInput = document.createElement("input");
                tdInput.id = wDay+"JSS"+js+String.fromCharCode(arm)+res;
                tdInput.className = wDay+""+res;
                //tdInput.value = "0/0";
                //tdInput.value = wDay+"JSS"+js+String.fromCharCode(arm)+res;
                document.getElementById(jsTd.id).appendChild(tdInput);
            }
        }

        for(js = 1; js<=3; js++){ //about to change arm setting
            for(arm = 65; arm<=classOptions.value; arm++){
            var classTr = document.createElement("tr");
            classTr.id = "period"+js;
            document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(classTr);

            var jsTd = document.createElement("td");
            jsTd.id = "td"+wDay+"SSS"+js+String.fromCharCode(arm)+res;
            document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(jsTd);
            //input as table data
            var tdInput = document.createElement("input");
            tdInput.id = wDay+"SSS"+js+String.fromCharCode(arm)+res;
            tdInput.className = wDay+""+res;
            //tdInput.value = "0/0";
            //tdInput.value = wDay+"SSS"+js+String.fromCharCode(arm)+res;
            document.getElementById(jsTd.id).appendChild(tdInput);
        }
    }

    }
    //period code section
}
     }
}

}