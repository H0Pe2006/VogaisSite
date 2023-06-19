const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit",(e) => {
    e.preventDefault();

    const palavra = String(frm.inText.value);

    let texto = palavra.split(" ");
    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;

    console.log(texto.length);

    if(texto.length >= 4){
        let vogais = ["a","e","i","o","u"];
        for(let i=0; i < texto.length; i++){
            if(texto[i]=="a"){
                contadorA++
            }else if(texto[i]=="e"){
                contadorE+=1
            }else if(texto[i]=="i"){
                contadorI+=1
            }else if(texto[i]=="o"){
                contadorO+=1
            }else if(texto[i]=="u"){
                contadorU+=1
            }
        }
    }else{
        resp.innerText = "Você não usou quatro palavras..."
    }

    resp.innerText = "A = "+contadorA;
})