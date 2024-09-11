//JSON das tarefas
let tarefasJson = [];

index_geral = -1;

function addTask(tarefa) {
	if (document.querySelector(".add-input").value == "") {
		alert("Digite uma tarefa antes de clicar em adicionar!");
	} else {
		index_geral = index_geral + 1;
		tarefasJson.push({ id: index_geral, texto: String(tarefa) });
		console.log(tarefasJson);
		document.querySelector(".add-input").value = "";
		atualizarTarefas();
	}
}
function atualizarTarefas() {
	if (tarefasJson.length == 0) {
		document.querySelector(".lista-toda").innerHTML = `<p>Não há tarefas!</p`;
	} else {
		document.querySelector(".lista-toda").innerHTML = "";
		tarefasJson.map((item, index) => {
			let tarefaItem = document
				.querySelector(".models .tarefa-item")
				.cloneNode(true);
			tarefaItem.setAttribute("data-key", index);
			tarefaItem.setAttribute("value", index);
			tarefaItem.querySelector(".tarefa-texto").innerHTML = item.texto;

			document.querySelector(".lista-toda").append(tarefaItem);
		});
	}
}
atualizarTarefas();

valoresMarcados = [];
function marcar(value) {
	if (document.querySelector(`.tarefa-item[value='${value}']`).checked) {
		valoresMarcados.append(value);
	} else {
		let index = valoresMarcados.indexOf(value);
		valoresMarcados.splice(index, 1);
	}
	console.log(valoresMarcados);
}

function remove() {
	for (let i of valoresMarcados) {
		document.querySelector(`.tarefa-item[value=${i}]`).remove();
	}
}
