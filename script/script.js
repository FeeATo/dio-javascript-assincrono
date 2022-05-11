const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const btnNewCat = document.getElementById('btnChange-cat')
const imgCat = document.getElementById('cat')

const getCatsConst = async function getCats(){
    try{
        const json = await fetch(BASE_URL).then(data=>data.json())   
        /*faz um fetch, e usa o método .then porque o fetch retorna uma promise. Usando o await para esperar a resposta. Poderia ter usado também o .catch ao invés do try-catch, porém achei
        que ficaria melhor para visualizar
        */     
        return json.webpurl;
    } catch (e){
        console.log(e.message)
    }
}

const loadImgConst = async function loadImg(){
    imgCat.src = await getCatsConst()   //aguarda a resposta da function getCats que aguarda a resposta do fetch
} 

btnNewCat.addEventListener('click', loadImgConst)

loadImgConst()

