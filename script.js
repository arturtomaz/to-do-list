//JSON das tarefas
let tarefasJson = [
	{ id: 1, texto: "Lavar a louça" },
	{ id: 2, texto: "Lavar a roupa" },
];

function marcar() {}

tarefasJson.map((item, index) => {
	let tarefaItem = document
		.querySelector(".models .tarefa-item")
		.cloneNode(true);
	tarefaItem.setAttribute("data-key", index);
	tarefaItem.querySelector(".checkbox").setAttribute("value", index);
	tarefaItem.querySelector(".tarefa-texto").innerHTML = item.texto;

	document.querySelector(".lista-toda").append(tarefaItem);
});
