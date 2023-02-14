"use strict";
let i, j;
l1:
for (i = 0; i < 3; i++) {  
    document.write("<tr><td>" + i + "</td><td>" + j + "</td><td>umgebende Schleife</td></tr>");
    
    if (i%2==1) continue l1;  
  

    l2:
    for(j=0;j<3;j++){
        document.write("<tr><td>" + i + "</td><td>" + j + "</td><td>innere Schleife</td></tr>");
        if (j%2==1) continue l1;
        else continue l2;
    }
}