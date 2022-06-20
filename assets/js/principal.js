// Começo do programa para uma função da resolução para exibir os filmes na tela

function exibirFilme(){
  limpaDiv()

// declração dos filmes
  let filmes = [
    'star wars',
    'liga da justiça',
  'toy story',
  'interstellar',
  'harry potter', 
  'transformers'
];
// nomes dados aos próprios filmes
  let nomes = [
    'Star Wars: Os Ultimos Jedi','Liga da Justiça', 
    'Toy Story 4', 'Interstellar', 
    'Harry Potter e a Pedra Filosofal',
    'Transformers'
  ];
// url das capas
  let capas = [
    'https://www.plugou.com/wp-content/uploads/2017/10/star-wars-os-ultimos-jedi-poster-analise_-04-plugou_11-10-2017.jpg',
    'https://cinemaemcena.com.br/uploads/banners/1616144826_poster.jpg', 
    'https://upload.wikimedia.org/wikipedia/pt/4/4c/Toy_Story_4_poster.jpg',
    'https://waltermattos.com/site/wp-content/uploads/2014/11/tut_Analise_Grafica_Cartaz_Interstellar_05_011.png', 
    'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg', 
    'https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  ];
// url dos video e trailers
  let videos = [
    'https://www.youtube.com/embed/7Ieigpxyrgo', 
    'https://www.youtube.com/embed/BifA90UAQtg', 
    'https://www.youtube.com/embed/76CslX-q5C4',
    'https://www.youtube.com/embed/hHBsKHVLAYc', 
    'https://www.youtube.com/embed/CLJv2Qi98jU',
    'https://www.youtube.com/embed/dxQxgAfNzyE'
  ];
  // descrições dos filmes, falando como sinopse da história
  let descricoes = [
    'Rey deselvolve suas habilidades com a ajuda de Luke Skywalker, embora a Resistença se prepara para a batalha com a Primeira Ordem.',
    'Em um mundo de luto e ainda aprendendo a viver sem Superman, Bruce Wayne recruta um time de metahumanos para enfrentar um implacável senhor da guerra vindo das estrelas determinado a conquistar a Terra.',
    'Quando um novo brinquedo chamado "Forky" se une a Woody e à turma, uma viagem ao lado de velhos e novos amigos revela o quão grande o mundo pode ser para um brinquedo',
    'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço, na tentativa de garantir a sobrevivência da humanidade.', 
    ' Harry é um garoto orfão que mora na casa de seus tios e se aventura no mundo da magia de hogwartz!', 
    'Sam é um garoto do ensino médio, que se encontra com robôs alienígenas que pretendem travar uma guerra na Terra, e ele é a chave da sobrevivência do planeta!' 
 ];
  
  // variável declarada para pegar todos os links de ID dos filmes...
  let imdb = [
    'https://www.imdb.com/title/tt2527336/?ref_=nv_sr_srsg_0',
    'https://www.imdb.com/title/tt12361974/?ref_=nv_sr_srsg_0',
    'https://www.imdb.com/title/tt1979376/?ref_=nv_sr_srsg_0',
    'https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0', 
    'https://www.imdb.com/title/tt0241527/?ref_=nv_sr_srsg_0', 
    'https://www.imdb.com/title/tt0418279/?ref_=fn_al_tt_1'
  ];

  let filme=document.getElementById("filme")
  filme = (filme.value).toLowerCase()
  let filmeIndex = filmes.indexOf(filme)
  
  if (filmeIndex != -1){
    let capa = document.getElementById("capa")
    capa.innerHTML = `<img src=${capas[filmeIndex]} + >`
    let video = document.getElementById("descricao")
    video.innerHTML= `<span id='titulo'> ${nomes[filmeIndex]} </span><a href=${imdb[filmeIndex]} target='_blank'>IMDB</a><span id='p'> ${descricoes[filmeIndex]} </span><iframe id='frame' width='380' height='213' src=${videos[filmeIndex]}></iframe>`
  }
  else{
    let aviso = document.querySelector("#descricao")
    aviso.innerHTML= `<span id='indisponivel'>Ainda não possuimos esse filme :(</span>`
  }
}

function passaValor(valor){
  let input = document.getElementById('filme')
  let nome = document.getElementById(valor)
  input.value = nome.innerText
  exibirFilme()
}

div.innerHTML = " "
function limpaDiv(){
  let div = document.getElementById('capa')
}