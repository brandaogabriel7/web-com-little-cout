let bancodedados = [
	{
		nome: 'Introdução à Programação Web',
		tags: ['web', 'html', 'internet', 'web e igual a internet', 'o que e a web', 'como surgiu a web', 'tim', 'tim coracao valente'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/intro/?utm_source=moodle&utm_medium=hyperlink&st=13370955679'
	},
	{
		nome: 'HTML (parte 1)',
		tags: ['web', 'html', 'funcionamento da web', 'estrutura html', 'tags html', 'css'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/html1/'
	},
	{
		nome: 'HTML (parte 2)',
		tags: ['web', 'html', 'tags de importancia', 'tags de listas', 'inline vs block', 'hiperlinks', 'css'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/html2/'
	},
	{
		nome: 'HTML (parte 3)',
		tags: ['web', 'html', 'tabelas', 'tabelas simples', 'tabelas compostas', 'celulas', 'estiliziar'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/html3/'
	},
	{
		nome: 'HTML (parte 4)',
		tags: ['web', 'html', 'div', 'span', 'box model', 'float'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/html4/'
	},
	{
		nome: 'HTML (parte 5)',
		tags: ['web', 'html', 'divitite', 'display', 'pseudo', 'tags semanticas', 'pseudo-classes', 'pseudo-elements'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/html5/'
	},
	{
		nome: 'CSS (parte 1)',
		tags: ['web', 'css', 'selecionando classes', 'float', 'flutuando', 'editores de texto', 'atom', 'sublime text', 'codificacao e doctype', 'reaproveitando codigo css', 'abelhas'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/css1/'
	},
	{
		nome: 'CSS (parte 2)',
		tags: ['web', 'css', 'cascata', 'seletores', 'ferramentas', 'ninjas', 'aprofundando em css'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/css2/'
	},
	{
		nome: 'CSS (parte 3)',
		tags: ['web', 'css', 'fontes', 'multimidia', 'unicornios', 'formatos de imagens', 'videos', 'audio', 'web fonts'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/css3/'
	},
	{
		nome: 'CSS (parte 4)',
		tags: ['web', 'css', 'posicionamento', 'estático', 'relativo', 'absoluto', 'fixo'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/css4/'
	},
	{
		nome: 'CSS (parte 5)',
		tags: ['web', 'css', 'especificidades', 'centralizar', 'seletores'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/css5/'
	},
	{
		nome: 'JS (parte 1)',
		tags: ['web', 'js', 'javascript', 'caracteristicas', 'botoes'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/js1/'
	},
	{
		nome: 'JS (parte 2)',
		tags: ['web', 'js', 'javascript', 'arrays', 'arranjos', 'dom', 'estruturas de repeticao', 'objetos', 'for', 'while'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/js2/'
	},
	{
		nome: 'JS (parte 3)',
		tags: ['web', 'js', 'javascript', 'estilizando elementos', 'eventos de mouse', 'depurando', 'objeto window', 'estilizar dinamicamente'],
		link: 'https://fegemo.github.io/cefet-front-end/classes/js3/'
	}
];

var map={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"};
function removerAcentos(s){ return s.replace(/[\W\[\] ]/g,function(a){return map[a]||a}) };
const google ='https://www.google.com.br/#q=';
let botao = document.querySelector("#pesquisar");
let campopesquisa = document.querySelector("#pesquisa");
document.addEventListener('keyup', function(e){
	if(e.which === 13)
	{
		let result = 0;
		let area = document.querySelector("#area-de-resultados");
		area.innerHTML = '';
		let texto;
		let qqrtxt = campopesquisa.value.toLowerCase();
		let qqrtxt2 = removerAcentos(qqrtxt);
			for(let i=0;i<(bancodedados.length);i++){
				for(let j=0;j<(bancodedados[i]).tags.length;j++){
					if(bancodedados[i].tags[j]==qqrtxt2)
					{
						texto = document.createElement('h2');
						texto.innerHTML = bancodedados[i].nome;
						area.appendChild(texto);
						texto = document.createElement('p');
						let link = document.createElement('a');
						link.href =  bancodedados[i].link;
						area.appendChild(link);
						link.innerHTML = link;
						result++;
					}
				}
			}
			if(result==0)
			{
				texto = document.createElement('h2');
				texto.innerHTML = 'Nada a respeito, tente o Google';
				area.appendChild(texto);
				texto = document.createElement('p');
				let link = document.createElement('a');
				let url = encodeURI(qqrtxt);
				link.href =  google + url;
				area.appendChild(link);
				link.innerHTML = link;
				result++;
			}
	}
});
botao.addEventListener('click', function()
{
	let result = 0;
	let area = document.querySelector("#area-de-resultados");
	area.innerHTML = '';
	let texto;
	let qqrtxt = campopesquisa.value.toLowerCase();
	let qqrtxt2 = removerAcentos(qqrtxt);
		for(let i=0;i<(bancodedados.length);i++){
			for(let j=0;j<(bancodedados[i]).tags.length;j++){
				if(bancodedados[i].tags[j]==qqrtxt2)
				{
					texto = document.createElement('h2');
					texto.innerHTML = bancodedados[i].nome;
					area.appendChild(texto);
					texto = document.createElement('p');
					let link = document.createElement('a');
					link.href =  bancodedados[i].link;
					area.appendChild(link);
					link.innerHTML = link;
					result++;
				}
			}
		}
		if(result==0)
		{
			texto = document.createElement('h2');
			texto.innerHTML = 'Nada a respeito, tente o Google';
			area.appendChild(texto);
			texto = document.createElement('p');
			let link = document.createElement('a');
			let url = encodeURI(qqrtxt);
			link.href =  google + url;
			area.appendChild(link);
			link.innerHTML = link;
			result++;
		}
});
