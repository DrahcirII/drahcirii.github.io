var poemstuff = [

          '<img id="robot" style="height: 75%; width: 75%; margin: 0 auto; display: block;" src="../pics/aya1.png">',
          '<img id="robot" style="height: 75%; width: 75%; margin: 0 auto; display: block;" src="../pics/aya2.png">', 
                     
          
              ];
              var poemLineNumber = Math.random() * (poemstuff.length - 1);
              poemLineNumber = poemLineNumber.toFixed(0);
              document.write(poemstuff[poemLineNumber]);